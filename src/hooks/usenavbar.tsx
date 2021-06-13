import { colors } from '../components/colors';
import { ColorContext } from '../context/ColorContext';
import { FontColorContext } from '../context/FontColorContext';
import { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';

export const UseNavBar = () => {
    const {color, setColor} = useContext(ColorContext);
    const {fontColor, setFontColor} = useContext(FontColorContext);
    const {mode, setMode} = useContext(ModeContext);

    // colors for the background
    const colorMap= colors.map((color: string | any) => 
    <button onClick = {() => {setColor(color)}} className = 'colorButton' style = {{backgroundColor: color}}> </button>
    );

    // colors for the font
    const fontColorMap= colors.map((fontColor: string | any) => 
    <button onClick = {() => {setFontColor(fontColor)}} className = 'fontColorButton' style = {{backgroundColor: fontColor}}> </button>
    );

    // functions to change the mode when you click the mode buttons
    const changeModeClock = (): void => {
        setMode('clock');
    }
    const changeModeStopwatch = (): void => {
        setMode('stopwatch');
    }
    const changeModeTimer = (): void => {
        setMode('timer');
    }

    return {
        mode, 
        colorMap, 
        fontColorMap, 
        changeModeClock, 
        changeModeStopwatch, 
        changeModeTimer,
        color, 
        fontColor
    };
};
