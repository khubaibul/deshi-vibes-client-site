import React from 'react';
import { useSelector } from 'react-redux';
import { useDeleteCartProductByIdMutation, useGetCartProductByEmailQuery } from '../../../features/products/productsSlice';
import Loader from '../../Shared/Loader/Loader';
import CartProduct from '../CartProduct/CartProduct';

const Cart = () => {

    const { user } = useSelector(state => state.auth)
    const { data: cartProducts, isLoading, isError } = useGetCartProductByEmailQuery(user?.email, { refetchOnMountOrArgChange: true, refetchOnFocus: true });

    const [deleteFromCart, { data }] = useDeleteCartProductByIdMutation();

    if (isLoading) {
        <div className='h-screen flex justify-center items-center'>
            <Loader />
        </div>
    }
    console.log(data);
    const deleteProductFromCart = (productId) => {

        deleteFromCart(productId);
    }

    return (
        <div className='mt-10'>
            <h3 className='text-center text-primary font-bebas text-2xl tracking-widest'>My Cart</h3>


            <div className='my-10 lg:px-60 grid gap-y-4'>
                {
                    cartProducts?.map(cartProduct =>
                        <CartProduct
                            key={cartProduct._id}
                            cartProduct={cartProduct}
                            deleteProductFromCart={deleteProductFromCart}
                        />
                    )
                }
            </div>


        </div>
    );
};

export default Cart;