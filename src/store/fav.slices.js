import {createSlice} from '@reduxjs/toolkit';

const favSlice = createSlice({
  name: 'fav',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const favActions = favSlice.actions;
export const favReducers = favSlice.reducer;
