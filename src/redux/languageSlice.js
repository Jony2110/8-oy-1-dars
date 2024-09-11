import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: localStorage.getItem('language') || 'en', // localStorage'dan olingan til yoki default 'en'
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem('language', action.payload); // Yangi tilni localStorage'ga saqlash
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
