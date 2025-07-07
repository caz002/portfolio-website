import React from 'react';
import '../App.css';

export default function WindowFrame({setShowPopup, innerComponent}: {setShowPopup: React.Dispatch<React.SetStateAction<boolean>>, innerComponent?: React.ElementType}){
    return(
        <div className="windowFrame">
            <div onClick = {() => setShowPopup(false)}>x</div>
            <div className="box">
                San Diego Supercomputer Center (SDSC)
            </div>
        </div>
    )
}