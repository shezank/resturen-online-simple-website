import axios from 'axios';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Sharde/AuthProvider/AuthProvider';

const OrderFood = () => {
    const loader = useLoaderData();
    const { user } = useContext(AuthContext);
    const handleOrderProducts = e => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.foodName.value;
        const orderDate = form.date.value;
        const foodCategory = form.foodCategory.value;
        const price = form.price.value;
        const orderOwnerName = form.orderOwnerName.value;
        const ownerEmail = form.ownerEmail.value;

        const product = { orderDate, foodName, foodImg: loader.foodImg, foodCategory, price, orderOwnerName, ownerEmail, country: loader.country };


        axios.post(`https://kashmeri-resturent-server.vercel.app/orders`, product)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Order!",
                        text: "Successfully Order Your Food Items",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div>
            <div className="w-full max-w-5xl mx-auto my-10">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                        Order Now Your Product
                    </h3>
                    <form onSubmit={handleOrderProducts}>
                        <div className='flex gap-5 px-20'>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="foodName"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Food Name
                                </label>
                                <input
                                    placeholder="Kasmeri Grill"
                                    defaultValue={loader.foodName}
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="foodName"
                                    name="foodName"
                                />
                            </div>

                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="foodCategory"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Food Category
                                </label>
                                <input
                                    placeholder="Chiness"
                                    defaultValue={loader.foodCategory}
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="foodCategory"
                                    name="foodCategory"
                                />
                            </div>

                        </div>

                        <div className='flex gap-5 px-20'>

                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="price"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Price
                                </label>
                                <input
                                    placeholder="Price"
                                    defaultValue={loader.price}
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="price"
                                    name="price"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="orderOwnerName"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Booking Name
                                </label>
                                <input
                                    defaultValue={user.displayName}

                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="orderOwnerName"
                                    name="orderOwnerName"
                                />
                            </div>

                        </div>
                        <div className='flex gap-5 px-20'>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="yourEmail"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Your Email
                                </label>
                                <input
                                    defaultValue={user.email}
                                    required
                                    type="email"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="ownerEmail"
                                    name="ownerEmail"
                                />
                            </div>

                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="description"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Order Date
                                </label>
                                <input
                                    required
                                    type="date"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="date"
                                    name="date"
                                />
                            </div>

                        </div>

                        <div className="mt-4 mb-2 mx-20 sm:mb-4">
                            <button

                                type="submit"
                                className="inline-flex text-xl items-center justify-center w-full h-12 px-6 font-extrabold tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                            >
                                Order
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderFood;