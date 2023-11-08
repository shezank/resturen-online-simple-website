import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TopFood from './TopFood';

const TopFoods = () => {
    const [orders, setOrders]= useState([]);
    const currenPage = 0;
    const itemPerPages = 6;
    useEffect(()=>{
        axios.get(`https://kashmeri-resturent-server.vercel.app/orders?page=${currenPage}&size=${itemPerPages}`)
        .then(res => setOrders(res.data))
    },[])

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Top Selling Foods
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="9a29985a-fc16-419b-ae53-1670f5ca4491"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#9a29985a-fc16-419b-ae53-1670f5ca4491)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Now</span>
                    </span>{' '}
                    You Can See Our Most Orders Foods Items
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Check Our Food Items And get a Order As soon As possible. 24/7 Open Our Home Delivery. Just Order Your Favarite Foods Items
                </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-3 sm:mx-auto">
                
                {
                    orders.map(order => <TopFood key={order._id} order={order}></TopFood>)
                }
            </div>
            <div className="flex items-center sm:justify-center">
                <Link to={'/food'}>
                    <button
                        href="/"
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                    >
                        See All Food
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default TopFoods;