import React, { useContext } from 'react';
import { AuthContext } from '../../Sharde/AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddFood = () => {
    const {user} = useContext(AuthContext);
    console.log(user.uid)

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImg = form.foodImg.value;
        const foodCategory = form.foodCategory.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const orderOwnerName = form.orderOwnerName.value;
        const ownerEmail = form.ownerEmail.value;
        const country = form.country.value;
        const description = form.description.value;
        const product = {userProduct: user.uid, foodName, foodImg, foodCategory, quantity, price, orderOwnerName, ownerEmail, country, description};
        console.log(product)

        axios.post('http://localhost:5000/products', product)
        .then( res =>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    title: "Success!",
                    text: "Your Product Add To Your Website",
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
                        Add Your Products
                    </h3>
                    <form onSubmit={handleAddProduct}>
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
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="foodName"
                                    name="foodName"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="foodImg"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Food Image
                                </label>
                                <input
                                    placeholder="https://kasmeri-food.com/img"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="foodImg"
                                    name="foodImg"
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
                
                                    className="inline-block mb-1 font-medium"
                                >
                                    Quantity
                                </label>
                                <input
                                    placeholder="Quantity"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="quantity"
                                    name="quantity"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="price"
                                    className="inline-block mb-1 font-medium"
                                >
                                   Price
                                </label>
                                <input
                                    placeholder="Price"
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
                                    Your Name
                                </label>
                                <input
                                    readOnly
                                    defaultValue={user?.displayName ? user?.displayName : "Full Name"}
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
                                    readOnly
                                    defaultValue={user?.email ? user?.email : "emiil@.com"}
                                    required
                                    type="email"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="ownerEmail"
                                    name="ownerEmail"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="country"
                                    className="inline-block mb-1 font-medium"
                                >
                                   Food Origin 
                                </label>
                                <input
                                    placeholder="Bangladesh"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="country"
                                    name="country"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="description"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Food description
                                </label>
                                <input
                                    placeholder="Food Description"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="description"
                                    name="description"
                                />
                            </div>
                            
                        </div>

                        <div className="mt-4 mb-2 mx-20 sm:mb-4">
                            <button
                                type="submit"
                                className="inline-flex text-xl items-center justify-center w-full h-12 px-6 font-extrabold tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFood;