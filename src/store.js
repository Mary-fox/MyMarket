import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart-reducer";
import favoriteReducer from "./reducers/favorit-reducer";

const logger = (store) => (next) => (action) => {
    console.log("action", action);
    let result = next(action);
    console.log("next state", store.getState())
    return result;
};
let count = [];
const counter = (store) => (next) => (action) => {
    count.push(action);
    let result = next(action);
    console.log("Количество обработанных действий:", count.length);
    return result;
};

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorite: favoriteReducer,
    },

    middleware: [logger, counter],
});