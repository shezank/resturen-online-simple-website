import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Sharde/AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from 'react-icons/fa';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Register = () => {
    const { createUser, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userName = form.userName.value;
        const photourl = form.photourl.value;
        const user = { email, password, userName, user_Img: photourl };
        setError('');
        if (userName.length < 5) {
            return setError("User Name Use less than 5 characters")
        }
        else if (password.length < 6) {
            return setError("Password less than 6 characters")
        }
        else if (password.search(/^(?=.*[A-Z]).*$/)) {
            return setError("Don't have a capital letter")

        }
        else if (password.search(/^(?=.*[!@#$%&?]).*$/)) {
            return setError("don't have a special character")
        }
        createUser(email, password)
            .then(res => {
                console.log(res.user)
                updateProfile(res.user, {
                    displayName: userName, photoURL: photourl
                })

                axios.post('https://kashmeri-resturent-server.vercel.app/users', user)
                    .then(res => {
                        console.log(res.data)
                        if (res.data?.insertedId) {

                            Swal.fire(
                                'Register!',
                                'Successfully Register Your Account!',
                                'success'
                            )
                        }
                    })

            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.result)
                if (res.result) {
                    Swal.fire({
                        title: "Successfully!",
                        text: "Login Your Account",
                        icon: "success"
                    });
                }
                navigate('/')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Register Your Accounts</title>
                </Helmet>
                <div className="relative -top-20">
                    <img
                        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        className="absolute inset-0 object-cover w-full h-full"
                        alt=""
                    />
                    <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
                        <svg
                            className="absolute inset-x-0 bottom-0 text-white"
                            viewBox="0 0 1160 163"
                        >
                            <path
                                fill="currentColor"
                                d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                            />
                        </svg>
                        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="flex flex-col items-center justify-center xl:flex-row">

                                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                    <div className="glass rounded shadow-2xl p-7 sm:p-10">
                                        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                            Register Your Account
                                        </h3>
                                        <form onSubmit={handleRegister}>
                                            <div className="mb-1 sm:mb-2">
                                                <label
                                                    htmlFor="firstName"
                                                    className="inline-block mb-1 font-medium"
                                                >
                                                    User Name
                                                </label>
                                                <input
                                                    placeholder="username"
                                                    required
                                                    type="text"
                                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                    id="userName"
                                                    name="userName"
                                                />
                                            </div>

                                            <div className="mb-1 sm:mb-2">
                                                <label
                                                    htmlFor="lastName"
                                                    className="inline-block mb-1 font-medium"
                                                >
                                                    Photo URL
                                                </label>
                                                <input
                                                    placeholder="Photo URL"
                                                    required
                                                    type="text"
                                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                    id="photourl"
                                                    name="photourl"
                                                />
                                            </div>
                                            <div className="mb-1 sm:mb-2">
                                                <label
                                                    htmlFor="email"
                                                    className="inline-block mb-1 font-medium"
                                                >
                                                    E-mail
                                                </label>
                                                <input
                                                    placeholder="email@example.com"
                                                    required
                                                    type="text"
                                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                    id="email"
                                                    name="email"
                                                />
                                            </div>
                                            <div className="mb-1 sm:mb-2">
                                                <label
                                                    htmlFor="email"
                                                    className="inline-block mb-1 font-medium"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    placeholder="Password"
                                                    required
                                                    type="password"
                                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                    id="password"
                                                    name="password"
                                                />
                                            </div>
                                            <div className="mt-4 mb-2 sm:mb-4">
                                                <p className='text-red-600'>{error}</p>
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-bold text-lg tracking-wide duration-1000 text-green-500 transition rounded shadow-md bg-black hover:bg-white focus:shadow-outline focus:outline-none"
                                                >
                                                    Register
                                                </button>
                                            </div>
                                            <p className="text-xl text-gray-600 sm:text-sm">
                                                Hava A Account Please <Link to='/login'><span className='text-red-500'>Login</span></Link>
                                            </p>
                                        </form>
                                        <hr />
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <button
                                                onClick={handleGoogleLogin}
                                                type="submit"
                                                className="inline-flex text-xl font-extrabold items-center justify-center w-full h-12 px-6 tracking-wide text-white transition duration-500 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                            >
                                                <FaGoogle className='mr-1'></FaGoogle>
                                                Google
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </HelmetProvider>
    );
};

export default Register;