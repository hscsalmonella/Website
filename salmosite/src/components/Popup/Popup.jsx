import React from 'react'
import './popuppp.css'

export default function popup(props) {
    return (props.trigger) ? (
        <div className='pup'>
            <div className='pup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>x </button>
                {props.children}
            </div>
        </div>
    ) : null;
}