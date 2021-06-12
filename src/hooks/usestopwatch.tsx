import { useState, useRef, useContext } from 'react';
import { ColorContext } from '../context/ColorContext';
import { FontColorContext } from '../context/FontColorContext';

export const useStopWatch = () => {
    const {color, setColor} = useContext(ColorContext);
    const {fontColor, setFontColor} = useContext(FontColorContext);

    const [timer, setTimer] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const countRef = useRef<null | number | any>(null);

    const handleStart = ():void => {
        setIsActive(true);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)}, 1000)
    };

    const handlePause = ():void => {
        clearInterval(countRef.current);
        setIsPaused(true);
    };

    const handleResume = (): void => {
        setIsPaused(false);
        countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1);
        }, 1000);
    };

    const handleReset = (): void => {
        clearInterval(countRef.current);
        setIsActive(false);
        setIsPaused(false);
        setTimer(0);
    };



    const formatTime = (timer: number): string => {
        const getSeconds: string | number = `0${(timer % 60)}`.slice(-2);
        const minutes: string | number = `${Math.floor(timer / 60)}`;
        const getMinutes: string | number = `0${parseInt(minutes) % 60}`.slice(-2);
        const getHours: string | number = `0${Math.floor(timer / 3600)}`.slice(-2);
        return `${getHours} : ${getMinutes} : ${getSeconds}`;
    };

    const buttonStyle = {
        color: color,
        backgroundColor: fontColor,
    };

    return {timer, 
        isActive, 
        isPaused, 
        countRef, 
        handleStart, 
        handlePause, 
        handleResume, 
        handleReset, 
        formatTime, 
        buttonStyle};
};


