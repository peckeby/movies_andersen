import { createStore } from "redux";

const initialState = {
  data: JSON.parse(localStorage.getItem("data")),
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_CATEGORY": {
      return {
        data: state.data.map((category) => {
          if (category.id.toString() === action.payload.id) {
            const obj = {};
            obj[action.payload.name] = action.payload.value;
            return Object.assign({}, category, obj);
          }
          return category;
        }),
      };
    }
    case "EDIT_FILMS": {
      return {
        data: state.data.map((category) => {
          const films = category.films.map((film) => {
            if (film.id.toString() === action.payload.id) {
              const obj = {};
              obj[action.payload.name] = action.payload.value;
              return Object.assign({}, film, obj);
            }
            return film;
          });
          return { ...category, films };
        }),
      };
    }
    case "CHANGE_CATEGORY_CHECKBOX": {
      return {
        data: state.data.map((category) => {
          if (category.id.toString() === action.payload.id) {
            const obj = {};
            obj.checkbox = !category.checkbox;
            return Object.assign({}, category, obj);
          }
          return category;
        }),
      };
    }
    case "CHANGE_FILMS_CHECKBOX": {
      return {
        data: state.data.map((category) => {
          const films = category.films.map((film) => {
            if (film.id.toString() === action.payload.id) {
              const obj = {};
              obj.checkbox = !film.checkbox;
              return Object.assign({}, film, obj);
            }
            return film;
          });
          return { ...category, films };
        }),
      };
    }
    case "DELETE_CATEGORY": {
      return {
        data: state.data.filter(
          (category) => category.id.toString() === action.payload.id
        ),
      };
    }
    case "DELETE_FILM": {
      return {
        data: state.data.map((category) => {
          const films = category.films.filter(
            (film) => film.id.toString() !== action.payload.id
          );
          return { ...category, films };
        }),
      };
    }
    default:
      return state;
  }
};

export const store = createStore(rootReducer);
