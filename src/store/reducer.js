import { createStore } from "redux";

const initialState = {
  users: [],
  loggedInUser: null,
  products: [
    {
      id: 1,
      name: "Pen",
      price: 5,
    },
    {
      id: 2,
      name: "Pencil",
      price: 2,
    },
    {
      id: 3,
      name: "Eraser",
      price: 3,
    },
    {
      id: 4,
      name: "Sharpner",
      price: 4,
    },
  ],
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        // copy of the array and withing the users have new users
        ...state,
        users: [...state.users, action.payload],
      };
    case "LOGIN":
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default createStore(reducer);
