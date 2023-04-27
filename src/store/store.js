import {configureStore} from '@reduxjs/toolkit';
import { favReducers } from './fav.slices';

export const store = configureStore({
    reducer:{
        fav:favReducers,
    },
});