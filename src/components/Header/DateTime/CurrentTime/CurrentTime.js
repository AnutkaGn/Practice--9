import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDate } from '../../../../store/dateSlice';
import moment from 'moment';

const CurrentTime = (props) => {
    const dispatch = useDispatch();
    const currentTimeTimestamp = useSelector((state) => state.date.date);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(setCurrentDate(moment().valueOf()));
        }, 1000);
        return () => clearInterval(interval);
    }, [dispatch]);
    const currentTime = moment(currentTimeTimestamp);

    return (
        <div>
            <p style={{fontSize: "13px", fontWeight: "normal"}}>{currentTime.format('LTS')}</p>
        </div>
    );
}

export default CurrentTime;
