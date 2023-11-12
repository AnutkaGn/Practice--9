import React, { useState, useEffect } from 'react';

const CurrentTime = (props) => {
    const [currentTime, setCurrentTime] = useState(props.dateObj);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p style={{fontSize: "13px", fontWeight: "normal"}}>{currentTime.toLocaleTimeString()}</p>
        </div>
    );
}

export default CurrentTime;
