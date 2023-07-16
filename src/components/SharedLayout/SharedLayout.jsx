import { Header } from "components/Header/Header";
import { MobileMenu } from "components/MobileMenu/MobileMenu";
import Media from "react-media";
import { Outlet } from "react-router-dom";
import style from "./SharedLayout.module.scss";

export const SharedLayout = () => {
  return (
    <div className={style.container}>
      <Media
        queries={{
          small: "(max-width: 767px)",
        }}
      >
        {(matches) => (matches.small ? <MobileMenu /> : <Header />)}
      </Media>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
