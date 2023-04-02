import React, { useState } from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';

const DashboardOrder = ({ order, handleShipped, handleCanceled }) => {
    const [showMore, setShowMore] = useState(false);
    const { _id, buyerEmail, shippingAddress, transactionId, paidAt, products } = order;

    return (
        <div className='w-full pt-6 pb-2 lg:px-7 px-3 border text-xs border-primary tracking-wider'>
            <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col gap-y-3 items-center justify-between">
                <div className='flex flex-col gap-y-1'>
                    <div className='flex text-xs items-center justify-center gap-x-2'>
                        <h2>Transaction ID :</h2>
                        <h2 className='font-medium'>{transactionId}</h2>
                    </div>
                    <div className='flex text-xs items-center lg:justify-start md:justify-start sm:justify-start justify-center gap-x-2'>
                        <h2>Paid At :</h2>
                        <h2 className='font-medium'>{paidAt?.substring(0, 10)}</h2>
                    </div>
                </div>
                <div className=''>
                    <h2>Customer Email</h2>
                    <h2 className='font-medium'>{buyerEmail}</h2>
                </div>
                <div className=''>
                    <h2>Shipping Location</h2>
                    <h2 className='font-medium'>{shippingAddress}</h2>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <button
                        disabled={order?.status === "Canceled"}
                        onClick={() => handleShipped(_id)}
                        className={`w-20 py-1 rounded-full flex justify-center items-center font-medium bg-secondary/10 hover:bg-gray-dark/5 active:bg-secondary ${order?.status === "Canceled" && "opacity-20"}`}>
                        Shipped
                    </button>
                    <button
                        disabled={order?.status === "Shipped"}
                        onClick={() => handleCanceled(_id)}
                        className={`w-20 py-1 rounded-full flex justify-center items-center font-medium text-white bg-red hover:bg-red/5 hover:text-gray-dark active:bg-secondary ${order?.status === "Shipped" && "opacity-20"}`}>
                        Cancel
                    </button>
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

export default DashboardOrder;