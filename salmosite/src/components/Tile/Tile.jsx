import React from 'react'
import './tile.css'

function Tile({logo, deals, url}) {
  return (
    <div className='tileContainer'>
        <div className='tileImage-container'>
            <a href={url} target='_blank' rel="noreferrer"><img src= {logo} alt='' /></a>
        </div>
        <div className='tile-body'>
            {
                deals
            }
        </div>
    </div>
  )
}

export default Tile