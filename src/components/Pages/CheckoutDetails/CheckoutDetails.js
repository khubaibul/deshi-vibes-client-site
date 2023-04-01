import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAddToPaymentMutation } from '../../../features/products/productsSlice';
import Spinner from '../../Shared/Spinner/Spinner';

const CheckoutDetails = () => {
    const [shippingAddress, setShippingAddress] = useState("");
    const { user } = useSelector(state => state.auth);
    const { checkedCartProducts } = useSelector(state => state.cart);
    const [addToPayment, { data, isError, error, isLoading, isSuccess }] = useAddToPaymentMutation();

    const prices = checkedCartProducts.map(product => product.productPrice);

    const total = prices.reduce((prev, curr) => prev + curr, 0);

    let shipping;
    if (total >= 200) {
        shipping = 0;
    }
    else {
        shipping = 19
    }


    const grandTotal = total + shipping;

    const orderDetails = {
        buyerEmail: user?.email,
        price: grandTotal,
        shippingAddress,
        products: checkedCartProducts
    }

    const handlePlaceOrder = () => {
        addToPayment(orderDetails).then(result => {
            console.log(result);
            if (result.data.redirectURL) {
                window.location.replace(result.data.redirectURL)
            }
            console.log(result);
        })

    }




    return (
        <div className='lg:px-28 md:px-10 px-2 mt-10 lg:flex md:flex gap-5'>
            <div className='bg-white shadow-lg lg:w-[65%] md:[55%] w-full p-4'>
                <h3 className='font-bebas tracking-widest text-lg text-primary'>Delivery Details</h3>
                <div className='flex flex-col'>
                    <label htmlFor="address" className='text-primary text-sm font-semibold'>Shipping address</label>
                    <input
                        onChange={(e) => setShippingAddress(e.target.value)}
                        type="text"
                        className='lg:w-1/2 py-2 px-4 focus:outline-primary bg-gray-light'
                        placeholder='Shipping address...'
                        required
                    />
                </div>
                <div className='flex flex-col mt-2'>
                    <label htmlFor="address" className='text-primary text-sm font-semibold'>Billing address</label>
                    <input
                        type="text"
                        className='lg:w-1/2 py-2 px-4 focus:outline-primary bg-gray-light'
                        placeholder='Billing address...'
                    />
                </div>
                <p className='mt-4 text-xs'>Please collect your product within 3days.</p>
            </div>
            <div className='border-primary flex-1 font-bebas text-primary px-2 w-full'>
                <div className='border p-2 px-4 flex flex-col gap-y-4'>
                    <h3 className='text-lg tracking-widest'>Order Summary</h3>
                    <div className='flex flex-col gap-y-2'>
                        <div className='flex justify-between'>
                            <p>Total items:</p>
                            <span>{checkedCartProducts?.length}</span>
                        </div>
                        <div className='flex justify-between'>
                            <p>Price:</p>
                            <span>{total}.00</span>
                        </div>
                        <div className='flex justify-between'>
                            <p>Shipping Fee:</p>
                            <span>${shipping}.00</span>
                        </div>
                        <div className='flex justify-between'>
                            <p>Subtotal:</p>
                            <span>${grandTotal}.00</span>
                        </div>
                    </div>
                    <button
                        onClick={handlePlaceOrder}
                        className='flex justify-center bg-primary hover:bg-secondary active:bg-opacity-80 transition-all duration-200 font-medium font-bebas tracking-widest text-white py-1'>
                        {
                            isLoading ? <Spinner borderColor={"primary"} /> : "Place Order"
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutDetails;