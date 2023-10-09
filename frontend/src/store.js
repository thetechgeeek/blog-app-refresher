import { configureStore } from '@reduxjs/toolkit';
import blogsStateReducer from './blogsState';

export default configureStore({
    reducer: {
        blogsState: blogsStateReducer,
    },
});
