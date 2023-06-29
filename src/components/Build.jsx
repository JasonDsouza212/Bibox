import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import speaker from '../Images/speaker.png';
import monitor from '../Images/monitor.png';
import cpu from '../Images/cpu.png';
import joystick from '../Images/joystick.png';
import keyboard from '../Images/keyboard.png';
import mouse from '../Images/mouse.png';
import { useSelector } from 'react-redux';
import Cartitem from './Cartitem';
import { PartContext } from '../App';

const Build = () => {
  const { finalprods, setFinalprods } = useContext(PartContext);
  const cartItems = useSelector((state) => state.cart.partsList);

  const handleSave = (id) => {
    const part = cartItems.find((item) => item.id === id);
    const existingPart = finalprods.find((item) => item.id === id);

    if (existingPart) {
      setFinalprods((prevFinalprods) => prevFinalprods.filter((item) => item.id !== id));
    } else {
      setFinalprods((prevFinalprods) => [...prevFinalprods, part]);
    }
  };

  const renderImage = (title, image) => {
    const finalItem = finalprods.find((item) => item.title === title);
    if (finalItem) {
      return <img src={image} alt={title} className="product-image" />;
    }
    return (
      <img
        src="https://img.freepik.com/premium-vector/white-texture-round-striped-surface-white-soft-cover_547648-928.jpg"
        style={{ filter: 'grayscale(100%) brightness(200%)' }}
        alt={title}
        className="product-image"
      />
    );
  };

  return (
    <div className="select-parts-page">
      <div className="cards-container">
        <ul>
          {cartItems.map((item) => (
            <div key={item.id} draggable onClick={() => handleSave(item.id)}>
              <li key={item.id}>
                <Cartitem id={item.id} image={item.image} title={item.title} />
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="image-section">
        <h1 className="product-header header">YOUR FINAL PRODUCT</h1>
        {finalprods.length === 0 && cartItems.length === 0 ? (
          <>
           <h2 className="message">Add PARTS TO CART</h2>
          <div className='orginal_btn_cont'>
            <button className='original_product_btn'>
                <Link className='link_original' to="/selectparts">SELECT PARTS</Link>
            </button>
        </div>
          </>
         
        ) : finalprods.length === 0 ? (
          <h2 className="message">Choose parts to create</h2>
        ) : (
          <div className="product-images">
            <div className="image-row">
              {renderImage('speaker', speaker)}
              {renderImage('monitor', monitor)}
              {renderImage('cpu', cpu)}
            </div>
            <div className="image-row">
              {renderImage('joystick', joystick)}
              {renderImage('keyboard', keyboard)}
              {renderImage('mouse', mouse)}
            </div>
          </div>
        )}
        <div className="start-button-container">
          <button className="start-button btn" >
            {finalprods.length===0 ? (
              <span className="link-disabled">BUILD</span>
            ) : (
              <Link className="link" to="/final">
                BUILD
              </Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};


export default Build;
