import { Fragment, useEffect, useRef, useState } from "react";
import IconsSprite from "assets/symbol-defs.svg";
import style from "components/CategoriesTable/CategoriesTable.module.scss";
import tableRowStyle from "./TableRow.module.scss";
import { useDispatch } from "react-redux";
import {
  changeCategoryCheckbox,
  deleteCategory,
  editCategories,
} from "redux/actions";
import { TableSubRow } from "components/TableSubRow/TableSubRow";

export const TableRow = ({ category }) => {
  const [editDescription, setEditDescription] = useState(false);
  const [editName, setEditName] = useState(false);
  const [showSubFilms, setshowSubFilms] = useState(false);

  const dispatch = useDispatch();

  const descriptionRef = useRef();
  const nameRef = useRef();

  useEffect(() => {
    let descriptionChangeHandler = (e) => {
      if (!descriptionRef.current.contains(e.target)) {
        setEditDescription(false);
      }
    };

    let nameChangeHandler = (e) => {
      if (!nameRef.current.contains(e.target)) {
        setEditName(false);
      }
    };

    document.addEventListener("mousedown", descriptionChangeHandler);
    document.addEventListener("mousedown", nameChangeHandler);

    return () => {
      document.removeEventListener("mousedown", descriptionChangeHandler);
      document.removeEventListener("mousedown", nameChangeHandler);
    };
  });

  const handleEditInput = (event) => {
    dispatch(editCategories(event));
  };

  const handleCheckboxChange = (event) => {
    dispatch(changeCategoryCheckbox(event));
  };

  const handleDeleteCategory = (event) => {
    setshowSubFilms(false);
    dispatch(deleteCategory(event));
  };

  return (
    <>
      <tr>
        {editName ? (
          <td className={style.thead}>
            <div>
              <input
                type="text"
                name="name"
                value={category.name}
                id={category.id}
                ref={nameRef}
                onChange={handleEditInput}
              />
              <div>
                <span>{category.films.length}</span>
                <button
                  className={tableRowStyle.iconCategories}
                  onClick={() => {
                    setshowSubFilms(!showSubFilms);
                  }}
                >
                  (+)
                </button>
              </div>
            </div>
          </td>
        ) : (
          <td className={style.thead}>
            <div className={style.categoryName}>
              <p
                ref={nameRef}
                onClick={() => {
                  setEditName(!editName);
                }}
              >
                {category.name}
              </p>
              <div>
                <span>{category.films.length}</span>
                <button
                  className={tableRowStyle.iconCategories}
                  onClick={() => {
                    setshowSubFilms(!showSubFilms);
                  }}
                >
                  {showSubFilms ? <span>(-)</span> : <span>(+)</span>}
                </button>
              </div>
            </div>
          </td>
        )}
        {category.checkbox ? (
          <td className={style.thead}>
            <button
              onClick={handleCheckboxChange}
              id={category.id}
              className={tableRowStyle.iconCategories}
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
              id={category.id}
              className={tableRowStyle.iconCategories}
            >
              <svg height={25} width={25}>
                <use href={`${IconsSprite}#icon-square`} />
              </svg>
            </button>
          </td>
        )}
        {editDescription ? (
          <td className={style.thead}>
            <input
              type="text"
              name="description"
              value={category.description}
              id={category.id}
              ref={descriptionRef}
              onChange={handleEditInput}
            />
          </td>
        ) : (
          <td
            className={style.thead}
            onClick={() => {
              setEditDescription(!editDescription);
            }}
            ref={descriptionRef}
          >
            {category.description}
          </td>
        )}
        <td className={style.thead}>
          <button
            id={category.id}
            onClick={handleDeleteCategory}
            className={tableRowStyle.iconCategories}
          >
            <svg height={25} width={25}>
              <use href={`${IconsSprite}#icon-trash`} />
            </svg>
          </button>
        </td>
      </tr>
      {showSubFilms &&
        category.films.map((film) => {
          return (
            <Fragment key={film.id}>
              <TableSubRow film={film} />
            </Fragment>
          );
        })}
    </>
  );
};
