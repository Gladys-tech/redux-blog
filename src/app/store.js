import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/blogs/blogSlice';
// import articleReducer from '../features/blogs/articleSlice';


export const store = configureStore({
  reducer: {
    data: dataReducer,
    // article: articleReducer,
  },
});
