import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import WindowFrame from './components/WindowFrame';
import EducationIcon from "./icons/mortarboard.png"
import WorkIcon from "./icons/briefcase.png";
import Icon from './components/Icon';

function App() {

  const [showEdPopup, setShowEdPopup] = useState(false);
  const [showWorkPopup, setShowWorkPopup] = useState(false);
  return (
    <>
    {showEdPopup &&
          <div className="windowFrame">
            <div onClick = {() => setShowEdPopup(false)}>x</div>
            <div className="box">
              <div>UCSD</div>
              <div>This is where I went to school.</div>
            </div>
          </div>
        }
    {showWorkPopup && 
        <WindowFrame setShowPopup={setShowWorkPopup}/>
    }
    <div className="App">
      <div className="icon-layout">
        <div>Projects</div>
        <div onClick = {() => setShowEdPopup(true)} className='icon'>
          <img src={EducationIcon} style={{width: 32, height: 32}}></img>
          <div>Education</div>
        </div>
        <Icon setShowPopup={setShowWorkPopup} text="Work History" src={WorkIcon}/>
        </div>
    </div>
    </>
  );
}

export default App;
