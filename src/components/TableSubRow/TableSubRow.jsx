import { useState, useRef, useEffect } from "react";
import IconsSprite from "assets/symbol-defs.svg";
import style from "components/CategoriesTable/CategoriesTable.module.scss";
import rowStyle from "components/TableRow/TableRow.module.scss";
import { useDispatch } from "react-redux";
import { changeFilmsCheckbox, deleteFilm, editFilms } from "redux/actions";

export const TableSubRow = ({ film }) => {
  const [editSubDescription, setEditSubDescription] = useState(false);
  const [editSubName, setEditSubName] = useState(false);

  const dispatch = useDispatch();

  const filmNameRef = useRef();
  const filmDescriptionRef = useRef();

  useEffect(() => {
    let descriptionChangeHandler = (e) => {
      if (!filmDescriptionRef.current.contains(e.target)) {
        setEditSubDescription(false);
      }
    };

    let nameChangeHandler = (e) => {
      if (!filmNameRef.current.contains(e.target)) {
        setEditSubName(false);
      }
    };

    document.addEventListener("mousedown", descriptionChangeHandler);
    document.addEventListener("mousedown", nameChangeHandler);

    return () => {
      document.removeEventListener("mousedown", descriptionChangeHandler);
      document.removeEventListener("mousedown", nameChangeHandler);
    };
  });

  const handleEditSubInput = (event) => {
    dispatch(editFilms(event));
  };

  const handleCheckboxChange = (event) => {
    dispatch(changeFilmsCheckbox(event));
  };

  const handleDeleteFilm = (event) => {
    dispatch(deleteFilm(event));
  };

  return (
    <tr>
      {editSubName ? (
        <td className={style.thead}>
          <input
            type="text"
            name="name"
            value={film.name}
            id={film.id}
            ref={filmNameRef}
            onChange={handleEditSubInput}
          />
        </td>
      ) : (
        <td
          ref={filmNameRef}
          className={style.thead}
          onClick={() => {
            setEditSubName(!editSubName);
          }}
        >
          {film.name}
        </td>
      )}
      {film.checkbox ? (
        <td className={style.thead}>
          <button
            onClick={handleCheckboxChange}
            id={film.id}
            className={rowStyle.iconCategories}
          >
            <svg height={25} width={25}>
              <use href={`${IconsSprite}#icon-check-square`} />
            </svg>
          </button>
        </td>
      ) : (
        <td className={style.thead}>
          <button
            onClick={handleCheckboxChange}
            id={film.id}
            className={rowStyle.iconCategories}
          >
            <svg height={25} width={25}>
              <use href={`${IconsSprite}#icon-square`} />
            </svg>
          </button>
        </td>
      )}
      {editSubDescription ? (
        <td className={style.thead}>
          <input
            type="text"
            name="description"
            value={film.description}
            id={film.id}
            ref={filmDescriptionRef}
            onChange={handleEditSubInput}
          />
        </td>
      ) : (
        <td
          className={style.thead}
          ref={filmDescriptionRef}
          onClick={() => {
            setEditSubDescription(!editSubDescription);
          }}
        >
          {film.description}
        </td>
      )}
      <td className={style.thead}>
        <button
          id={film.id}
          onClick={handleDeleteFilm}
          className={rowStyle.iconCategories}
        >
          <svg height={25} width={25}>
            <use href={`${IconsSprite}#icon-trash`} />
          </svg>
        </button>
      </td>
    </tr>
  );
};
