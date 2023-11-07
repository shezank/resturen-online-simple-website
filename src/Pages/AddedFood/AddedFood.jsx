import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Sharde/AuthProvider/AuthProvider';
import { GrUpdate } from "react-icons/gr";
import { Link } from 'react-router-dom';
const AddedFood = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://kashmeri-resturent-server.vercel.app/products/${user?.uid}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            {products.length > 0 ?
                <>
                    <h1 className='text-center font-bold text-3xl my-10'>See Your Added Products {products.length}</h1>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Food Name</th>
                                    <th>Price</th>
                                    <th>Details</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(product => <>
                                        {/* row 1 */}
                                        <tr key={product._id}>

                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={product.foodImg} alt={product.foodName} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {product.foodName}
                                            </td>
                                            <td>${product.price}</td>
                                            <td>
                                                <button className="btn btn-ghost btn-xs">details</button>
                                            </td>
                                            <td>
                                                
                                                <Link to={`/products/${user?.uid}`}><button className="text-2xl ml-5"><GrUpdate></GrUpdate></button></Link>
                                            </td>
                                        </tr>
                                    </>)

                                }
                            </tbody>
                            {/* foot */}
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </> :
                <h1 className='text-5xl text-center font-bold my-40'> Not Added Any Products </h1>

            }
        </div>
    );
};

export default AddedFood;