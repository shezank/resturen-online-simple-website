import { Link, useLoaderData } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';


const ProductDetails = () => {
    const product = useLoaderData();
    const { _id, foodName, foodImg, foodCategory, price, orderOwnerName, ownerEmail, country, description } = product;

    return (

        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Food Details</title>
                </Helmet>
                <div className="min-w-screen min-h-screen bg-red-500 flex items-center p-5 lg:p-10 overflow-hidden relative">
                    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                        <div className="md:flex items-center -mx-10">
                            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                                <div className="relative">
                                    <img src={foodImg} className="w-full relative rounded-md z-10" alt="" />
                                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-10">
                                <div className="mb-10">
                                    <h1 className="font-bold uppercase text-2xl mb-5">{foodName}</h1>
                                    <p className="text-sm">{description}</p>
                                </div>
                                <div className="mb-10 flex justify-between">
                                    <p className="border p-3 rounded-lg border-green-200 bg-orange-200 font-semibold text-green-600">Catagory: {foodCategory}</p>
                                    <p className="border p-3 rounded-lg border-green-200 bg-orange-100 font-semibold text-green-500">Food Origin: {country}</p>
                                </div>
                                <p className="border text-center my-8 p-3 rounded-lg border-green-300 bg-orange-100 font-semibold text-green-500">Made By:  {orderOwnerName}</p>

                                <div>
                                    <div className="inline-block align-bottom mr-5">
                                        <span className="text-2xl leading-none align-baseline">$</span>
                                        <span className="font-bold text-5xl leading-none align-baseline">{price}</span>

                                    </div>
                                    <div className="inline-block align-bottom">
                                        <Link to={`/order/${_id}`}><button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i> Order Now</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>


    );
};

export default ProductDetails;