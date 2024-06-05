import { createSlice } from "@reduxjs/toolkit";

export const FavoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.slice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = FavoriteSlice.actions.addFavorite;
export const removeFavorite = FavoriteSlice.actions.removeFavorite;
export default FavoriteSlice.reducer;
