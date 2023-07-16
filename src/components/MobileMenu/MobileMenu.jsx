import IconsSprite from "assets/symbol-defs.svg";
import { DropDownMenu } from "components/DropDownMenu/DropDownMenu";
import { Link } from "react-router-dom";
import style from "./MobileMenu.module.scss";
import headerStyle from "components/Header/Header.module.scss";

export const MobileMenu = () => {
  return (
    <header className={headerStyle.headerBar}>
      <button>
        <svg height={25} width={25} className={headerStyle.logoGroupSvg}>
          <use href={`${IconsSprite}#icon-menu`} />
        </svg>
      </button>
      <Link to="/" className={headerStyle.logoGroup}>
        <svg height={25} width={25} className={headerStyle.logoGroupSvg}>
          <use href={`${IconsSprite}#icon-film`} />
        </svg>
        <p className={headerStyle.logoGroupName}>Filmoteka</p>
      </Link>
      {/* <nav className={style.navGroup}>
        <Link to="/" className={style.navGroupLink}>
          Home
        </Link>
        <Link to="/about" className={style.navGroupLink}>
          About
        </Link>
        <Link to="/contacts" className={style.navGroupLink}>
          Contacts
        </Link>
      </nav> */}
      <DropDownMenu />
    </header>
  );
};
