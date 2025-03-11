import React from 'react'
import './InfoCardPopup.css'

export default function InfoCardPopup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>x </button>
                {props.children}
            </div>
        </div>
    ) : null;
}

