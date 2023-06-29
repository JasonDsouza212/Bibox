import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const SelectPartcard = ({ id, image, title, data }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.partsList);
  const isPresent = cartItems.some((item) => item.id === id);

  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        id,
        image,
        title,
        data,
      })
    );
  };

  return (
    <div className="card" key={id}>
      <img src={image} alt={title} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-paragraph">{data}</p>
        {isPresent ? (
          <button className="card-button" onClick={addToCart}>
            -
          </button>
        ) : (
          <button className="card-button" onClick={addToCart}>
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default SelectPartcard;
