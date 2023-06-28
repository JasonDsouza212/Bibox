import React from 'react';
import { Link } from 'react-router-dom';
import parts from '../Data/parts';

const Selectparts = () => {
  return (
    <>
        <h1 className='all_parts_header header'>ALL PARTS</h1>
        <div class="card-container">
        {parts.map((part)=>(
            <div class="card" key={part.id}>
            <img src={part.image} alt={part.title} />
            <div class="card-content">
                <h3 class="card-title">{part.title}</h3>
                <p class="card-paragraph">{part.data}</p>
                <button class="card-button">+</button>
            </div>
            </div>
            ))}
        </div>
        <div className='orginal_btn_cont'>
            <button className='original_product_btn'>
                <Link className='link_original' to="/selectparts">BUILD</Link>
            </button>
        </div>
    </>

  );
};

export default Selectparts;
