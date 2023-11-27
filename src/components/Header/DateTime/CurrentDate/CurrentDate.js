import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDate } from '../../../../store/dateSlice';
import moment from 'moment';


const CurrentDate = () => {
    const dispatch = useDispatch();
    const currentDateTimestamp = useSelector((state) => state.date.date);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(setCurrentDate(moment().valueOf()));
        }, 10000);
        return () => clearInterval(interval);
    }, [dispatch]);
    const currentDate = moment(currentDateTimestamp);
    return (
        <div>
            <p style={{fontSize: "13px", fontWeight: "normal"}}>{currentDate.format("MMM Do YY")}</p>
        </div>
    );
}

export default CurrentDate;
