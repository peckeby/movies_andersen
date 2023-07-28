import { Link } from "react-router-dom";
import IconsSprite from "assets/symbol-defs.svg";
import style from "./Header.module.scss";
import { DropDownMenu } from "components/DropDownMenu/DropDownMenu";

export const Header = () => {
  return (
    <header className={style.headerBar}>
      <Link to="/" className={style.logoGroup}>
        <svg height={25} width={25} className={style.logoGroupSvg}>
          <use href={`${IconsSprite}#icon-film`} />
        </svg>
        <p className={style.logoGroupName}>Filmoteka</p>
      </Link>
      <nav className={style.navGroup}>
        <Link to="/" className={style.navGroupLink}>
          Home
        </Link>
        <Link to="/about" className={style.navGroupLink}>
          About
        </Link>
        <Link to="/contacts" className={style.navGroupLink}>
          Contacts
        </Link>
      </nav>
      <DropDownMenu />
    </header>
  );
};
