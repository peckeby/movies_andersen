import { TableRow } from "components/TableRow/TableRow";
import { useEffect } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { getData } from "redux/selectors";
import style from "./CategoriesTable.module.scss";

export function CategoriesTable() {
  const categories = useSelector(getData);

  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th className={style.thead}>Name</th>
          <th className={style.thead}>Checkbox</th>
          <th className={style.thead}>Description</th>
          <th className={style.thead}>Delete</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => {
          return (
            <Fragment key={category.id}>
              <TableRow category={category} />
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
}
