import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuItems: [
    { text: 'main', url: 'http://localhost:3000/' },
    { text: 'moodle', url: 'http://78.137.2.119:2929/' },
    { text: 'chsbc', url: 'http://csbc.edu.ua/' },
  ],
};
const menuSlice = createSlice({
  name: 'menu',
  initialState,
});

export default menuSlice.reducer;
