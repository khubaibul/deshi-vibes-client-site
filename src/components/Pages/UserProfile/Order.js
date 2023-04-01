import React, { useState } from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

const Order = ({ order }) => {
    const [showMore, setShowMore] = useState(false);
    console.log(order);
    const { transactionId, paidAt, products, price } = order;
    return (
        <div className='max-w-4xl mx-auto bg-gray shadow-lg py-4 px-8'>
            <div className='flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between'>
                <div>
                    <div className='flex text-sm items-center justify-center gap-x-2'>
                        <h2>Transaction ID :</h2>
                        <h2 className='font-medium'>{transactionId}</h2>
                    </div>
                    <div className='flex text-sm items-center lg:justify-start md:justify-start sm:justify-start justify-center gap-x-2'>
                        <h2>Placed On :</h2>
                        <h2 className='font-medium'>{paidAt.substring(0, 10)}</h2>
                    </div>
                </div>
                <div className='text-sm text-center'>
                    <h2>Quantity</h2>
                    <h2 className='font-medium'>{products.length}</h2>
                </div>
                <div className='text-sm text-center'>
                    <h2>Total Price</h2>
                    <h2 className='font-medium'>${price}</h2>
                </div>
                <div className='text-sm text-center'>
                    <h2>Status</h2>
                    <h2 className='font-medium px-2 rounded-full bg-gray-dark/10'>Pending</h2>
                </div>
            </div>

            {
                showMore &&
                <div className='mt-4'>
                    {
                        products?.map(product => (
                            <div className='flex items-center justify-between lg:px-8 p-2 border my-1'>
                                <div>
                                    <img src={product?.productImage} className='w-10 h-14' alt="" />
                                </div>
                                <div>
                                    <h3 className='font-medium'>{product?.productName}</h3>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <h3>Price: </h3>
                                    <h3 className='font-medium'>${product?.productPrice}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }

            <div className='flex justify-center mt-2 font-medium'>
                <button
                    onClick={() => setShowMore(!showMore)}
                    className='text-sm flex items-center gap-1'
                >
                    {
                        showMore ? <BsArrowUpCircle /> : <BsArrowDownCircle />
                    }
                    {showMore ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
    );
};

export default Order;