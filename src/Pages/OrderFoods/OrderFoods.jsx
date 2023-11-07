import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Sharde/AuthProvider/AuthProvider';
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios';
import Swal from 'sweetalert2';
const OrderFoods = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to Deleted this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/orders/${id}`)
                    .then(res => {
                        if (res.data.deletedCount)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Food has been deleted.",
                                icon: "success"
                            });
                        const remaingFoods = orders.filter(order => order._id !== id);
                        setOrders(remaingFoods);
                    })
            }
        });



    }
    return (
        <div>
            <h1 className='text-center text-5xl font-semibold text-green-600 my-6'>Your Orderd Foods:- {orders.length}</h1>

            <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th>Booking Name</th>
                            <th>email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <>
                                {/* row 1 */}
                                <tr key={order._id}>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={order.foodImg} alt={order.foodName} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {order.foodName}
                                    </td>
                                    <td>${order.price}</td>
                                    <td>{order.orderName}</td>
                                    <td>{order.orderEmail}</td>
                                    <td>
                                        <button onClick={() => handleDelete(order._id)} className="text-3xl"><MdDeleteForever></MdDeleteForever></button>
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
        </div>
    );
};

export default OrderFoods;