import React from 'react';
import { useSelector } from 'react-redux';
import { useGetOrdersByEmailQuery } from '../../../features/products/productsSlice';
import Loader from '../../Shared/Loader/Loader';
import Order from './Order';

const UserProfile = () => {
    const { user, logOut } = useSelector(state => state.auth);

    const { data: orders, isLoading, isError } = useGetOrdersByEmailQuery(user?.email, { refetchOnMountOrArgChange: true, refetchOnFocus: true });

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className='mt-10'>
            <h3 className='text-center text-primary font-bebas text-2xl tracking-widest mb-4'>My Orders</h3>
            {
                orders?.length < 1 && <p className='text-center font-medium'>No orders found</p>
            }
            <div>
                {
                    orders?.map(order => <Order key={order._id} order={order} />)
                }
            </div>
        </div>
    );
};

export default UserProfile;