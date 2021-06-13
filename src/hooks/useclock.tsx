import { useState, useEffect } from 'react';

export const useClock = () => {

    const [time, setTime] = useState<Date | string>(noAMPM(new Date()));
    const [ampm, setAMPM] = useState<Date | string>(isAmPm(new Date()));
    
    // update hours and minutes
    useEffect (() => {
        let interval = setInterval(() => updateTime(), 1000);

        return () => {
            clearInterval(interval);
        };
    }, [time]);

    // update AM/PM
    useEffect (() => {
        let interval = setInterval(() => updateAMPM(), 1000);
        
        return () => {
            clearInterval(interval);
        };
    }, [ampm]);

    function updateAMPM(): void {
        setAMPM(isAmPm(new Date()));
    }

    // check if the time should display AM or PM
    function isAmPm(date: Date): string {
        let currAMPM: number | string = date.getHours();
        currAMPM = currAMPM < 12 ? 'AM' : 'PM';
        return currAMPM;
    }

    // get the time formatted
    function updateTime(): void {
        setTime(noAMPM(new Date()));
    }

    // format time
    function noAMPM(date: Date): string {
        let hours: number | string = date.getHours();
        let minutes: number | string = date.getMinutes();
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        let simpleTime: number | string = hours + ':' + minutes; 
        return simpleTime;
    }
    return {
        time,
        ampm,
        updateAMPM,
        updateTime,
        isAmPm,
        noAMPM,
    };
};
