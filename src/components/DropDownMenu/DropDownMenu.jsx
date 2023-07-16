import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import style from "./DropDownMenu.module.scss";
import IconsSprite from "assets/symbol-defs.svg";

export const DropDownMenu = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={menuRef}>
      {" "}
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className={style.dropDownMenuBtn}
      >
        <span>Profile</span>
        <svg height={25} width={25}>
          <use href={`${IconsSprite}#icon-user-circle`} />
        </svg>
      </button>
      <div
        className={`${style.dropDownMenuContainer} ${
          open ? style.active : style.inactive
        }`}
      >
        <ul
          className={style.dropDownMenuList}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="favorites">Favorites</Link>
          </li>
          <li>LogOut</li>
        </ul>
      </div>
    </div>
  );
};
