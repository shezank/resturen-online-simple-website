import React from 'react';
import { Link } from 'react-router-dom';

const TopFood = ({ product }) => {
    const { foodName, foodImg, price, foodCategory } = product;
    return (
        <div className="card bg-base-100 border duration-500  hover:-mt-5 hover:shadow-xl">
            <p className='absolute bg-orange-600 p-2 rounded-r-md text-white font-semibold'>Price: ${price}</p>
            <figure><img className='h-52 w-full' src={foodImg} alt={foodName} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {foodName}
                    <div className="badge badge-secondary">{foodCategory}</div>
                </h2>
            </div>
            <Link className='btn bg-orange-700 text-white duration-500 hover:bg-black rounded-t-none' to='/food'><button>Details</button></Link>
        </div>
    );
};

export default TopFood;