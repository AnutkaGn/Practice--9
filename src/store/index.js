import {configureStore} from '@reduxjs/toolkit';
import logoReducer from '../store/logoSlice';
import menuReducer from '../store/menuSlice';

const store = configureStore({
    reducer: {
        logo: logoReducer,
        menu: menuReducer,
    }
  });
  
  export default store;