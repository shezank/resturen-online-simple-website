import React, { useEffect, useState } from 'react';
import './Food.css';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
import axios from 'axios';
const Food = () => {
    const {count} = useLoaderData();
    const [products, setproducts] = useState([]);
    const [itemPerPages, setItemPerPages] = useState(10);
    const [currenPage, setCurrenPage] = useState(0);
    console.log(count, currenPage)
    const totalPages = Math.ceil(count / itemPerPages);
    const pages = [...Array(totalPages).keys()];

    useEffect(() => {
        axios.get(`http://localhost:5000/products?page=${currenPage}&size=${itemPerPages}`)
            .then(res => setproducts(res.data))
    }, [currenPage, itemPerPages])

    const handleBack = ()=>{
        if(currenPage > 0){
            setCurrenPage(currenPage - 1)
        }
    }
    const handleNext = ()=>{
        if(currenPage < pages.length -1){
            setCurrenPage(currenPage + 1)
        }
    }


    const handeleSearch = e => {
        e.preventDefault()
        const form = e.target;
        const value = form.search.value;
        console.log(value)
        e.target.reset();
    }
    return (
        <div>
            <div className="min-h-min bg-gray-100 flex flex-col justify-center">
                <div className="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
                    <div className="overflow-hidden z-0 rounded-full relative p-3">
                        <form onSubmit={handeleSearch} role="form" className="relative flex z-50 bg-white rounded-full">
                            <input name='search' type="text" placeholder="enter your search here" className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none" />
                            <button type='submit' className="bg-black text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-600 duration-700 transition  focus:bg-indigo-600 focus:outline-none">Search</button>
                        </form>
                        <div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
                        <div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
                        <div className="glow glow-3 z-30 bg-yellow-400 absolute"></div>
                        <div className="glow glow-4 z-40 bg-red-400 absolute"></div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 m-20'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }

            </div>
            <div className="bg-white p-4 flex items-center justify-center flex-wrap">
                <nav aria-label="Page navigation">
                    <ul className="inline-flex">
                        <li><button onClick={handleBack} className="px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-r-0 border-green-600 rounded-l-lg focus:shadow-outline hover:bg-green-100">Prev</button></li>
                        {
                            pages.map(page=> 
                                <button onClick={()=> setCurrenPage(page)} className={currenPage === page ? "px-4 py-2 text-white transition-colors duration-150 bg-green-600 border border-green-600 focus:shadow-outline" : "px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-green-600 focus:shadow-outline hover:bg-green-100"}>{page}</button>
                            )
                        }
                        <li><button onClick={handleNext} className="px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-green-600 rounded-r-lg focus:shadow-outline hover:bg-green-100">Next</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Food;