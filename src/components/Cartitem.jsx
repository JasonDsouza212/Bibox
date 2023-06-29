import React from 'react'

const Cartitem = ({id,title,image}) => {
  return (
    <div className="cartItem">
      <img className='cart_img' src={image} alt={title}/>
      <h3> {title}</h3>
    </div>
  )
}

export default Cartitem
