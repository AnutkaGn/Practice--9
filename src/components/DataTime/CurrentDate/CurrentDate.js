import React, { useState, useEffect } from 'react';


const CurrentDate = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    
    return (
        <div>
            <p>{currentDate}</p>
        </div>
    );
}

export default CurrentDate;
