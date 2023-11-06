import React from 'react';
import './Food.css';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
const Food = () => {
    const products = useLoaderData();
    const handeleSearch = e => {
        e.preventDefault()
        const form = e.target;
        const value = form.search.value;
        console.log(value)
        e.target.reset();
    }
    return (
        <div>
            <div class="min-h-min bg-gray-100 flex flex-col justify-center">
                <div class="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
                    <div class="overflow-hidden z-0 rounded-full relative p-3">
                        <form onSubmit={handeleSearch} role="form" class="relative flex z-50 bg-white rounded-full">
                            <input name='search' type="text" placeholder="enter your search here" class="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"/>
                                <button type='submit' class="bg-black text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-600 duration-700  focus:bg-indigo-600 focus:outline-none">Search</button>
                        </form>
                        <div class="glow glow-1 z-10 bg-pink-400 absolute"></div>
                        <div class="glow glow-2 z-20 bg-purple-400 absolute"></div>
                        <div class="glow glow-3 z-30 bg-yellow-400 absolute"></div>
                        <div class="glow glow-4 z-40 bg-red-400 absolute"></div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 m-20'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Food;