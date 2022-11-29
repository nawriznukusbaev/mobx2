import './App.css';
import React from 'react';
import mouseEvents from "./store";
import {observer} from 'mobx-react-lite'
const App = observer(() => {
    mouseEvents.total();
    return (
        <div style={{display:"flex", flexDirection:"column", width:"120px"}}
             onMouseEnter={()=>{mouseEvents.mouseOver()}} onMouseLeave={()=>{mouseEvents.mouseOut()}}>
            <div style={{display:"flex", flexDirection:"column"}} onClick={()=>{mouseEvents.mouseClicks()}}>
                <span>{`{`}</span>
                <span>{`clicks:${mouseEvents.mouseObj.clicks}`}</span>
                <span>{`MouseOver:${mouseEvents.mouseObj.MouseOver}`}</span>
                <span>{`MouseOut:${mouseEvents.mouseObj.MouseOut}`}</span>
                <span>{`timeStamp:${mouseEvents.mouseObj.timeStamp}`}</span>
                <span>{`Total:${mouseEvents.mouseObj.total}`}</span>
                <span>{`}`}</span>

            </div>
            <button onClick={()=>{mouseEvents.reset()}}>Reset</button>
            <button onClick={()=>{mouseEvents.setTimeStamp()}}>Timer</button>
        </div>
    );
});

export default App;
