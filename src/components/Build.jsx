import React from 'react';
import { Link } from 'react-router-dom';
import speaker from '../Images/speaker.png';
import monitor from '../Images/monitor.png';
import cpu from '../Images/cpu.png';
import joystick from '../Images/joystick.png';
import keyboard from '../Images/keyboard.png';
import mouse from '../Images/mouse.png';
import { useSelector,useDispatch } from 'react-redux';
import Cartitem from './Cartitem';
import {cartActions} from './../store/cart-slice'

const Build = () => {
    const cartItems = useSelector((state) => state.cart.partsList);
    const dispatch = useDispatch();
    const handleDragOver=(id)=>{
      console.log("Inside")
      dispatch(cartActions.setActive({id}))
    }
    const isactive = (title) => {
      const item = cartItems.find((item) =>{
        return item.title == title});
      return item && item.isSelected===true;
    };
    
  return (
        <div className="select-parts-page">
          <div className="cards-container">
            <ul>
          {cartItems.map((item) => (
            <div 
            key={item.id}
            draggable
            onClick={handleDragOver(item.id)}
            >
                <li key={item.id}>
                <Cartitem
                    id={item.id}
                    image={item.image}
                    title={item.title}
                />
                </li>
            </div>
          ))}
          </ul>
          </div>
          <div className="image-section">
            <h1 className="product-header header">BIBOX PRODUCT HOUSE</h1>
            <div className="product-images">
              <img src={speaker} alt="Speaker" className="product-image"  style={isactive('speaker')===true  ? { border: '3px solid green' } : {}}  />
              <img src={monitor} alt="Monitor" className="product-image" style={isactive('monitor')===true  ? { border: '3px solid green' } : {}} />
              <img src={cpu} alt="CPU" className="product-image" style={isactive('cpu')===true  ? { border: '3px solid green' } : {}} />
              <img src={joystick} alt="Joystick" className="product-image" style={isactive('joystick')===true ? { border: '3px solid green' } : {}} />
              <img src={keyboard} alt="Keyboard" className="product-image" style={isactive('keyboard')===true  ? { border: '3px solid green' } : {}} />
              <img src={mouse} alt="Mouse" className="product-image" style={isactive('mouse')===true  ? { border: '3px solid green' } : {}} />
              
            </div>
            <div className="start-button-container">
              <button className="start-button">
                <Link className="link" to="/selectparts">
                  START
                </Link>
              </button>
            </div>
          </div>
        </div>
      );
    };
    

export default Build
