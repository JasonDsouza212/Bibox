import React from 'react'
import mouse from '../Images/mouse.png'
import keyboard from '../Images/keyboard.png'
import speaker from '../Images/speaker.png'
import monitor from '../Images/monitor.png'
import joystick from '../Images/joystick.png'
import cpu from '../Images/cpu.png'

const Originalproduct = () => {
  return (
    <>
        <h1 className='original_product_header'>BIBOX PRODUCT HOUSE</h1>
        <div className='original_product'>
            <div className='original_row_1'>
                <img src={speaker} alt="speaker" className='speaker'/>
                <img src={monitor} alt="monitor" className='monitor'/>
                <img src={cpu} alt="cpu" className='cpu'/>
            </div>
            <div className="original_row_2">
                <img src={joystick} alt="joystick" className='joystick'/>
                <img src={keyboard} alt="keyboard" className='keyboard'/>
                <img src={mouse} alt="mouse" className='mouse'/>
            </div>
        </div>
    </>
  )
}

export default Originalproduct
