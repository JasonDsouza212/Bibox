import React from 'react';
import { useSelector } from 'react-redux';
import Cartitem from './Cartitem';


const Cartitems = () => {
  const cartItems = useSelector((state) => state.cart.partsList);
  return (
    <div className="cart-container">
      <h1 className='cart_header header'>SELECTED PARTS</h1>
      {cartItems.length === 0 ? (
        <h2 className='header'>No Parts Selected</h2>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <Cartitem
                id={item.id}
                image={item.image}
                title={item.title}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cartitems;
