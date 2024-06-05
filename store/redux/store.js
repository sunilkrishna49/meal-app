import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./FavoriteReducer";

export const store = configureStore({
  reducer: {
    FavoriteMeals: favoritesReducer,
  },
});
