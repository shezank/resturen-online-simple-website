import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const {_id, foodName, foodImg, foodCategory, quantity, price, orderOwnerName, ownerEmail, country, description} = product;
    return (
        <div className="card card-compact border border-green-600 duration-500 hover:shadow-xl">
            <figure><img className='h-72 w-full' src={foodImg} alt={foodName} /></figure>
            <div className="card-body">
                <h2 className="card-title">{foodName}
                <div className="badge badge-secondary">{foodCategory}</div>
                </h2>
                <div>
                    <p className="card-title">Price: ${price}</p>
                </div>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/food/details/${_id}`}><button className="btn btn-outline btn-success">See Details</button></Link>
                </div>
                
            </div>
        </div>
    );
};

export default Product;