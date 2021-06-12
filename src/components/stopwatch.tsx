import React from 'react';
import { useStopWatch } from '../hooks/usestopwatch'
import '../styles/stopwatch.css';

const StopWatch: React.FC = () => {

    const {
        timer, 
        isActive, 
        isPaused, 
        countRef, 
        handleStart, 
        handlePause, 
        handleResume, 
        handleReset, 
        formatTime, 
        buttonStyle
    } = useStopWatch();

    return (
        <div className = 'stopWatchContainer'>
            <div className = 'mainStopWatchContent'>{formatTime(timer)}</div>
            <div className = 'secondaryStopWatchContent'>
               {!isActive && <button className = 'stopWatchButton' onClick={handleStart} style = {buttonStyle}>Start</button>}
               {!isPaused && isActive && <button className = 'stopWatchButton' onClick={handlePause} style = {buttonStyle}>Pause</button>}
               {isPaused && isActive && <button className = 'stopWatchButton' onClick={handleResume} style = {buttonStyle}>Resume</button>}
               {isActive && <button className = 'stopWatchButton' onClick={handleReset} style = {buttonStyle}>Reset</button>}
            </div>
        </div>
    )
}

export default StopWatch;
