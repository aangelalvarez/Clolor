import React from 'react';
import { useClock } from '../hooks/useclock';
import '../styles/clock.css';


const Clock: React.FC = () => {

    const {time, 
        ampm, 
        updateAMPM, 
        updateTime, 
        isAmPm, 
        noAMPM
    } = useClock(); 

    return (
        <div className = 'clockContainer'>
            <div className = 'mainClockContent'>{time}</div>
            <div className = 'secondaryClockContent'>{ampm}</div>
        </div>
    );
}

export default Clock;

