import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: localStorage.getItem('mode') || 'light', // Agar localStorage bo'sh bo'lsa, 'light' bo'lsin
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('mode', state.mode); // Mode'ni localStorage'ga saqlash
    },
  },
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;
