import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import modeReducer from './modeSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    mode: modeReducer,
    cart: cartReducer,
  },
});

