
import { configureStore } from '@reduxjs/toolkit';
import { jsonPlaceholderApi } from './services/jsonPlaceholderApi'; 

const store = configureStore({
  reducer: {
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware), 
});

export default store;
