import React from 'react'
import '../styles/navbar.css';
import { UseNavBar } from '../hooks/usenavbar';



const NavBar: React.FC = () => {
 
    const { mode, 
        colorMap, 
        fontColorMap, 
        changeModeClock, 
        changeModeStopwatch, 
        changeModeTimer, 
        color, 
        fontColor
    } = UseNavBar();

    return (
        <div className = 'navBarContainer'>
            <div className = 'navBar'>
                <section className = 'Color'>Color</section>
                    <div className = 'colorDrop' style = {{backgroundColor: color}}>{colorMap}</div>
                <section className = 'fontColor'>Font Color</section>
                    <div className = 'fontColorDrop' style = {{backgroundColor: color}}>{fontColorMap}</div>
                <section className = 'mode'>Mode</section>
                    <div className = 'modeDrop' style = {{backgroundColor: color}}>
                        <button onClick = {changeModeClock} className = 'modeBtn' style = {{backgroundColor: fontColor, color: color }}>Clock</button>
                        <button onClick = {changeModeStopwatch} className = 'modeBtn' style = {{backgroundColor: fontColor, color: color }}>StopWatch</button>
                        <button onClick = {changeModeTimer} className = 'modeBtn' style = {{backgroundColor: fontColor, color: color }}>Timer</button>
                    </div>
            </div>
        </div>
    );
}

export default NavBar;
