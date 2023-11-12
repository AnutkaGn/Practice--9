import React from 'react';
import CurrentDate from './CurrentDate/CurrentDate';
import CurrentTime from './CurrentTime/CurrentTime';

const DateTime = () => {
    const dateTime = new Date();
    return (
        <div style={{marginRight: "30px", alignSelf: "center"}}>
            <CurrentDate dateObj = {dateTime}/>
            <CurrentTime dateObj = {dateTime}/>
        </div>
    );
}

export default DateTime;
