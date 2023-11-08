import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const {_id, foodName, foodImg, foodCategory, quantity, price, orderOwnerName, ownerEmail, country, description} = product;
    return (
        <div className="card card-compact border border-green-600 duration-500 hover:shadow-xl">
           <p className='absolute bg-orange-500 p-2 rounded-tl-xl rounded-br-xl run text-white font-semibold'>Price: ${price}</p>
            <figure><img className='h-72 w-full rounded-t-xl' src={foodImg} alt={foodName} /></figure>
            <div className="card-body mb-6">
                <h2 className="card-title">{foodName}
                <div className="badge badge-secondary">{foodCategory}</div>
                </h2>
                
                    <Link to={`/food/details/${_id}`}><button className="btn btn-outline btn-success absolute right-0 bottom-0">See Details</button></Link>
                
                
            </div>
        </div>
    );
};

export default Product;