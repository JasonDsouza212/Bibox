import React, { useContext } from 'react';
import {useDispatch } from 'react-redux';
import speaker from '../Images/speaker.png';
import monitor from '../Images/monitor.png';
import cpu from '../Images/cpu.png';
import joystick from '../Images/joystick.png';
import keyboard from '../Images/keyboard.png';
import mouse from '../Images/mouse.png';
import { Link } from 'react-router-dom';
// import { useSelector,useDispatch } from 'react-redux';
import {cartActions} from './../store/cart-slice'
import { PartContext } from '../App';

const Finalprod = () => {
  const { finalprods, setFinalprods } = useContext(PartContext);
  // const cartItems = useSelector((state) => state.cart.partsList);
  const dispatch = useDispatch();

  const renderImage = (title, image) => {
    const cartItem = finalprods.find((item) => item.title === title);
    if (cartItem) {
      return <img src={image} alt={title} className={title} />;
    }
    return <img src="https://img.freepik.com/premium-vector/white-texture-round-striped-surface-white-soft-cover_547648-928.jpg"  style={{ filter: 'grayscale(100%) brightness(200%)' }} alt={title} className="product-image" />;
  };
  const reset=()=>{
    dispatch(cartActions.setReset())
    setFinalprods([])
  }

  return (
    <div className="image-section fin">
      <h1 className="product-header header">YOUR CUSTOM SETUP IS READY</h1>
      <div className='original_product'>
            <div className='original_row_1'>
              {renderImage('speaker', speaker)}
              {renderImage('monitor', monitor)}
              {renderImage('cpu', cpu)}
            </div>
            <div className="original_row_2">
            {renderImage('joystick', joystick)}
          {renderImage('keyboard', keyboard)}
          {renderImage('mouse', mouse)}
            </div>
        </div>
      <div className="start-button-container">
              <button className="start-button btn">
                <Link onClick={reset} className="link" to="/">
                  START NEW SETUP
                </Link>
              </button>
            </div>
       </div>
  );
};

export default Finalprod;

