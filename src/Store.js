import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slicers'; // Adjust the path to your slice

const store = configureStore({
  reducer: {
    cart: cartReducer, // Use a key that represents your state slice
    // other slices can be added here
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Optionally customize middleware
});

export default store;
