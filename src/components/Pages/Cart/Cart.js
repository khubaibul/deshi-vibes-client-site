import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectedCartProducts } from '../../../features/cart/cartSlice';
import { useDeleteCartProductByIdMutation, useGetCartProductByEmailQuery } from '../../../features/products/productsSlice';
import Loader from '../../Shared/Loader/Loader';
import CartProduct from '../CartProduct/CartProduct';

const Cart = () => {
    const [disable, setDisable] = useState(false);
    const { user } = useSelector(state => state.auth);
    const { checkedCartProducts } = useSelector(state => state.cart);
    const { data: cartProducts, isLoading, isError } = useGetCartProductByEmailQuery(user?.email, { refetchOnMountOrArgChange: true, refetchOnFocus: true });
    const [deleteFromCart, { data }] = useDeleteCartProductByIdMutation();

    const dispatch = useDispatch();

    if (isLoading) {
        <div className='h-screen flex justify-center items-center'>
            <Loader />
        </div>
    };

    const deleteProductFromCart = (productId) => {
        deleteFromCart(productId);
    };


    const handleCheckedCartProduct = (cartProduct) => {
        dispatch(selectedCartProducts(cartProduct))
    }

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

    return (
        <div className='mt-6'>
            <h3 className='text-center text-primary font-bebas text-2xl tracking-widest mb-4'>My Cart</h3>

            {
                cartProducts?.length < 1 &&
                <h5 className='text-center mt-10 text-lg'>Your cart is empty. Please <Link to="/store" className='underline font-medium text-blue'>add to cart</Link> something.</h5>
            }

            <div className='flex lg:pl-28 lg:flex-row md:flex-row flex-col-reverse gap-y-10'>
                <div className='grid gap-y-4 px-2 lg:w-[60%] md:w-[60%]'>
                    {
                        cartProducts?.map(cartProduct =>
                            <CartProduct
                                key={cartProduct._id}
                                cartProduct={cartProduct}
                                deleteProductFromCart={deleteProductFromCart}
                                handleCheckedCartProduct={handleCheckedCartProduct}
                            />
                        )
                    }
                </div>
                <div className='border-primary flex-1 font-bebas text-primary px-2'>
                    <div className='border lg:w-1/2 md:w-2/3 p-2 px-4 flex flex-col gap-y-4'>
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
                            <div className='flex items-center'>
                                <input
                                    type="text"
                                    className='w-full py-0.5 px-2 focus:outline-primary bg-gray-light'
                                    placeholder='Enter your voucher'
                                />
                                <button className='bg-primary hover:bg-secondary active:bg-opacity-80 transition-all py-0.5 text-white px-5 tracking-wider'>Apply</button>
                            </div>
                            <div className='flex justify-between'>
                                <p>Subtotal:</p>
                                <span>${grandTotal}.00</span>
                            </div>
                        </div>
                        {
                            checkedCartProducts.length > 0
                                ?
                                <Link
                                    to="/checkout-details"
                                    className='flex justify-center bg-primary hover:bg-secondary active:bg-opacity-80 transition-all duration-200 font-medium font-bebas tracking-widest text-white py-1'
                                >
                                    Proceed To Checkout
                                </Link>
                                :
                                <p>Please select</p>
                        }
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Cart;