import React from 'react';
import { Link } from 'react-router-dom';
import parts from '../Data/parts';
import SelectPartcard from './SelectPartcard';
import Cartitems from './Cartitems';

const Selectparts = () => {
  return (
    <>
        <h1 className='all_parts_header header'>CHOOSE THE PARTS YOU NEED FOR YOUR SETUP</h1>
        <div class="card-container">
        {parts.map((part)=>(
            <SelectPartcard
                id={part.id}
                image={part.image}
                title={part.title}
                data={part.data}
            />
            ))}
        </div>
        <Cartitems/>
        <div className='orginal_btn_cont '>
            <button className='original_product_btn btn'>
                <Link className='link_original' to="/build">WORK SHOP</Link>
            </button>
        </div>
    </>

  );
};

export default Selectparts;
