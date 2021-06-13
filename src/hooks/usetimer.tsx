import { useState, useContext, useRef } from 'react';
import { ColorContext } from '../context/ColorContext';
import { FontColorContext } from '../context/FontColorContext';

const UseTimer = () => {

    const {color, setColor} = useContext(ColorContext);
    const {fontColor, setFontColor} = useContext(FontColorContext);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(0);
    const countRef = useRef<null | number | any>(null);

    // start the timer
    const handleStart = (): void => {
            setIsActive(true);
            countRef.current = setInterval(() => {
                setTimer((timer) => timer - 1)}, 1000)
    };

    // pause the timer
    const handlePause = (): void => {
        clearInterval(countRef.current);
        setIsPaused(true);
    };

    // resume the timer
    const handleResume = () => {
        setIsPaused(false);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer - 1);
            }, 1000);
    };

    // reset the timer
    const handleReset = (): void => {
        clearInterval(countRef.current);
        setIsActive(false);
        setIsPaused(false);
        setTimer(0);
    };
    
    // stop the timer and all the intervals running 
    const handleDismiss = (): void => {
        clearInterval(countRef.current);
        setIsActive(false);
        setIsPaused(false);
        setTimer(0);
    };

    // format the time depending on how may seconds have passed
    const formatTime = (timer: number): string => {
        const getSeconds: string | number = `0${(timer % 60)}`.slice(-2);
        const minutes: string | number = `${Math.floor(timer / 60)}`;
        const getMinutes: string | number = `0${parseInt(minutes) % 60}`.slice(-2);
        const getHours: string | number = `0${Math.floor(timer / 3600)}`.slice(-2);
        if (timer > 0) {return `${getHours} : ${getMinutes} : ${getSeconds}`}
        else if (timer <=0 && isActive) {return 'TIMER DONE'}
        return '00 : 00 : 00';
       
    }

    // functions to increment the initial value of the timer
    const addSecond = (): void => {
        setTimer((timer) => timer + 1);
    };
    const addMinute = (): void => {
        setTimer((timer) => timer + 60);
    };
    const addHour = (): void => {
        setTimer((timer) => timer + 3600);
    };


    return {
        color, 
        fontColor,
        setColor,
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
    };

};

export default UseTimer;
