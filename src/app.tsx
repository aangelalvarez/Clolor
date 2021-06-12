import React from 'react';
import { useState, useEffect } from 'react';
import Clock from './components/clock';
import StopWatch from './components/stopwatch';
import NavBar from './components/navbar';
import Timer from './components/timer';
import { ColorContext } from './context/ColorContext';
import { FontColorContext} from './context/FontColorContext';
import { ModeContext } from './context/ModeContext';
import './app.css';



const App: React.FC = () => {

    const [color, setColor] = useState('mintcream');
    const [fontColor, setFontColor] = useState('darkslategray');
    const [mode, setMode] = useState('clock');

    return (
        <ColorContext.Provider value = {{color, setColor}}>
        <FontColorContext.Provider value = {{fontColor, setFontColor}}>
        <ModeContext.Provider value = {{mode, setMode}}>
            <div style = {{backgroundColor: color, color: fontColor}} className = 'app'>
                <NavBar />
                {mode === 'clock' && <Clock />}
                {mode === 'stopwatch' && <StopWatch />}
                {mode === 'timer' && <Timer />}
            </div>
        </ModeContext.Provider>
        </FontColorContext.Provider>
        </ColorContext.Provider>
    );
};

export default App;