import React from 'react'
import mouse from '../Images/mouse.png'
import keyboard from '../Images/keyboard.png'
import speaker from '../Images/speaker.png'
import monitor from '../Images/monitor.png'
import joystick from '../Images/joystick.png'
import cpu from '../Images/cpu.png'
import { Link } from 'react-router-dom';

const Selectparts = () => {
    const parts=[
        {
            id:1,
            image:{speaker}
        },
        {
            id:2,
            image:{monitor}
        },
        {
            id:3,
            image:{cpu}
        },
        {
            id:4,
            image:{joystick}
        },
        {
            id:5,
            image:{keyboard}
        },
        {
            id:6,
            image:{mouse}
        }
]
  return (
    <div>
      
    </div>
  )
}

export default Selectparts
