import React from 'react';

const OrderGuide = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Home Delivery
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
                                    id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Read</span>
                    </span>{' '}
                    How To Order Our Website
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    First Time Read Our Guid Then Order Kasmeri Food. Now You Can Easily order Your Food In Online and Get Home Delivery.
                </p>
            </div>
            <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-2xl font-bold">Step 1</p>
                        <svg
                            className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <line
                                fill="none"
                                strokeMiterlimit="10"
                                x1="2"
                                y1="12"
                                x2="22"
                                y2="12"
                            />
                            <polyline
                                fill="none"
                                strokeMiterlimit="10"
                                points="15,5 22,12 15,19 "
                            />
                        </svg>
                    </div>
                    <p className="text-gray-600">
                    <span className='font-bold'>Browse the Menu:</span> Start by browsing the online menu of your favorite restaurant. Explore a variety of dishes, from appetizers to desserts, and choose what you'd like to order.
                    </p>
                </div>
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-2xl font-bold">Step 2</p>
                        <svg
                            className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <line
                                fill="none"
                                strokeMiterlimit="10"
                                x1="2"
                                y1="12"
                                x2="22"
                                y2="12"
                            />
                            <polyline
                                fill="none"
                                strokeMiterlimit="10"
                                points="15,5 22,12 15,19 "
                            />
                        </svg>
                    </div>
                    <p className="text-gray-600">
                    <span className='font-bold'>Add to Cart:</span> Select your desired food items and add them to your cart. You can customize your order, specify quantities, and make any special requests, such as dietary preferences or extra toppings.
                    </p>
                </div>
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-2xl font-bold">Step 3</p>
                        <svg
                            className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <line
                                fill="none"
                                strokeMiterlimit="10"
                                x1="2"
                                y1="12"
                                x2="22"
                                y2="12"
                            />
                            <polyline
                                fill="none"
                                strokeMiterlimit="10"
                                points="15,5 22,12 15,19 "
                            />
                        </svg>
                    </div>
                    <p className="text-gray-600">
                    <span className='font-bold'>Review and Confirm:</span> Before finalizing your order, review your cart to ensure it's accurate. Check the total cost, delivery or pickup options, and any applicable discounts or promotions.
                    </p>
                </div>
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-2xl font-bold">Success</p>
                        <svg
                            className="w-8 text-gray-600"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <polyline
                                fill="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                points="6,12 10,16 18,8"
                            />
                        </svg>
                    </div>
                    <p className="text-gray-600">
                    <span className='font-bold'>Place Your Order:</span> Once you're satisfied with your selections, proceed to checkout. Provide your delivery address or select a pickup location, enter payment details, and confirm your order. You'll receive an order confirmation, and your delicious meal will be on its way!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderGuide;