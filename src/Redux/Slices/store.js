import { configuration } from '@reduxjs/toolkit';
import AuthSliceReducer from './AuthSlice';

const store = configuration({
    reducer: {
        auth: AuthSliceReducer
    },
    devtools: true
})

export default store
