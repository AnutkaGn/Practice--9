import {configureStore} from '@reduxjs/toolkit';
import logoReducer from '../store/logoSlice'

const store = configureStore({
    reducer: {
        logo: logoReducer,
    }
  });
  
  export default store;