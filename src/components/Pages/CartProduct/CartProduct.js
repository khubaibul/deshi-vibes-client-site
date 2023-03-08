import React from 'react';
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CartProduct = ({ cartProduct, deleteProductFromCart }) => {
    const { productId, productImage, productName, productPrice } = cartProduct;
    return (
        <div className="w-full h-[100px] flex items-center justify-between lg:px-7 px-3 border cursor-pointer border-primary">
            <div className='flex-1'>
                <img className="p-2 w-20 h-24" src={productImage} alt="product" />
            </div>
            <div className='flex-1'>
                <h2 className="font-semibold text-neutral">{productName}</h2>
                <p className='lg:text-base text-sm'>${productPrice}.00</p>
            </div>
            <div className='flex-1'>
                {
                    cartProduct?.paid ? <p className='bg-green p-1 w-1/2 mx-auto font-semibold'>Paid ✅</p>
                        :
                        <Link to={`/dashboard/payment/${productId}`}>
                            <button
                                className='bg-primary hover:bg-secondary text-neutral transition-all duration-200 font-medium font-bebas tracking-widest text-white px-8 py-1'>
                                Pay
                            </button>
                        </Link>
                }
            </div>
            <div className='flex gap-x-4 items-center'>
                <button
                    onClick={() => deleteProductFromCart(productId)}
                    className='w-8 h-8 rounded-full flex justify-center items-center text-red bg-secondary hover:bg-gray-dark active:bg-opacity-80'>
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default CartProduct;