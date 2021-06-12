import React from 'react';
import '../styles/timer.css';
import UseTimer from '../hooks/usetimer';

 const Timer = () => {

    const {
        color, 
        fontColor,
        isActive,
        isPaused,
        timer,
        countRef,
        handlePause,
        handleReset,
        handleResume,
        handleStart,
        formatTime,
        addHour,
        addMinute,
        addSecond,
        handleDismiss,
    } = UseTimer();

    return (
        <div className = 'timerContainer'>
            <div className = 'mainTimerContent'>{formatTime(timer)}</div>        
            <div className = 'secondaryTimerContent'>
                {!isActive && <button onClick = {addHour} className = 'timerButton' style = {{backgroundColor: fontColor, color: color}}>+ Hour</button>}
                {!isActive && <button onClick = {addMinute} className = 'timerButton' style = {{backgroundColor: fontColor, color: color}}>+ Min</button>}
                {!isActive && <button onClick = {addSecond} className = 'timerButton' style = {{backgroundColor: fontColor, color: color}}>+ Sec</button>}
                {timer > 0 && !isActive && <button onClick = {handleStart} className = 'timerButton' style = {{backgroundColor: fontColor, color: color}}>Start</button>}
                {timer > 0 && !isPaused && isActive && <button onClick = {handlePause} className = 'timerButton' style = {{backgroundColor: fontColor, color: color}}>Pause</button>}
                {timer > 0 && isPaused && isActive && <button onClick = {handleResume} className = 'timerButton' style = {{backgroundColor: fontColor, color: color}}>Resume</button>}
                {timer > 0 && isActive && <button onClick = {handleReset} className = 'timerButton' style = {{backgroundColor: fontColor, color: color}}>Reset</button>}
                {timer <= 0 && isActive && <button onClick = {handleDismiss} className = 'timerButton' style = {{backgroundColor: fontColor, color: color, fontSize: 25}}>×</button>}
            </div>
        </div>
    )
};

 

export default Timer;
