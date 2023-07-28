export const editCategories = (event) => {
  return { type: "EDIT_CATEGORY", payload: event.target };
};

export const editFilms = (event) => {
  return { type: "EDIT_FILMS", payload: event.target };
};

export const changeFilmsCheckbox = (event) => {
  return { type: "CHANGE_FILMS_CHECKBOX", payload: event.currentTarget };
};

export const changeCategoryCheckbox = (event) => {
  return { type: "CHANGE_CATEGORY_CHECKBOX", payload: event.currentTarget };
};

export const deleteCategory = (event) => {
  return { type: "DELETE_CATEGORY", payload: event.currentTarget };
};

export const deleteFilm = (event) => {
  return { type: "DELETE_FILM", payload: event.currentTarget };
};
