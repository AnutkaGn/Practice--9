import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment';


const initialState = {
    date: moment().valueOf(),
};

const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        setCurrentDate: (state = initialState, action) => {
            state.date = action.payload;
          },      
    },
});

export const { setCurrentDate } = dateSlice.actions;
export default dateSlice.reducer;