import React from 'react';
import { useGetAllOrdersQuery, useSetCanceledInOrderMutation, useSetShippedInOrderMutation } from '../../../features/products/productsSlice';
import DashboardOrder from './DashboardOrder';
import Loader from '../../Shared/Loader/Loader';
import { toast } from 'react-hot-toast';

const DashboardOrders = () => {
    const { data: orders, isLoading, isError, error } = useGetAllOrdersQuery({ refetchOnMountOrArgChange: true, refetchOnFocus: true });
    const [updateShippingStatus, { data, isSuccess }] = useSetShippedInOrderMutation();
    const [updateCancelStatus, { }] = useSetCanceledInOrderMutation();


    if (isLoading) {
        return <Loader />
    }
    if (isError) {
        return <h4 className='text-red'>{error?.message}</h4>
    }

    const handleShipped = (_id) => {
        updateShippingStatus(_id)
            .then(result => {
                if (result.data.acknowledged > 0) {
                    toast.success("Status update to Shipped")
                }
            })
    }
    const handleCanceled = (_id) => {
        updateCancelStatus(_id)
            .then(result => {
                console.log(result);
                if (result.data.acknowledged > 0) {
                    toast.error("Status update to Canceled")
                }
            })
    }

    return (
        <div className='w-full mt-5'>
            <h3 className='text-center text-primary font-bebas text-2xl tracking-widest mb-4'>All Orders</h3>
            <div className='lg:px-40 md:px-20 px-4 grid gap-y-4 my-4'>
                {
                    orders?.map(order =>
                        <DashboardOrder
                            key={order._id}
                            order={order}
                            handleShipped={handleShipped}
                            handleCanceled={handleCanceled}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default DashboardOrders;