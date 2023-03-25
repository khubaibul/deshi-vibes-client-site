import React from 'react';
import { FaTrash } from "react-icons/fa";
import { useSelector } from 'react-redux';

const CartProduct = ({ cartProduct, deleteProductFromCart, handleCheckedCartProduct }) => {
    const { productId, productImage, productName, productPrice } = cartProduct;
    const { checkedCartProducts } = useSelector(state => state.cart);
    const checked = checkedCartProducts?.find(p => p._id === cartProduct._id)
    console.log(checked);
    return (
        <div className="w-full border cursor-pointer border-primary">
            <label className="cursor-pointer w-full ">
                <div className="flex items-center gap-x-5">
                    <input
                        onClick={() => handleCheckedCartProduct(cartProduct)}
                        className="peer sr-only"
                        value="Online service"
                        type="checkbox" />
                    <div className={`flex items-center justify-between lg:px-7 w-full ${checked && "bg-primary"}`}>
                        <div className='flex-1'>
                            <img className="p-2 w-20 h-24" src={productImage} alt="product" />
                        </div>
                        <div className='flex-1'>
                            <h2 className="font-semibold text-neutral">{productName}</h2>
                            <p className='lg:text-base text-sm'>${productPrice}.00</p>
                        </div>
                        <div className='flex gap-x-4 items-center pr-2'>
                            <button
                                onClick={() => deleteProductFromCart(productId)}
                                className='w-8 h-8 rounded-full flex justify-center items-center text-red bg-secondary hover:bg-gray-dark active:bg-opacity-80'>
                                <FaTrash className='opacity-90' />
                            </button>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default CartProduct;