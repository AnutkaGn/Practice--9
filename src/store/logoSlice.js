import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  src: '../../../assets/image.png',
};

const logoSlice = createSlice({
  name: 'logo',
  initialState,
});

export default logoSlice.reducer;