import React from 'react';
import { toast } from 'react-hot-toast';
import { useDeleteProductByIdMutation, useGetProductsQuery } from '../../../features/products/productsSlice';
import Loader from '../../Shared/Loader/Loader';
import DashboardProduct from './DashboardProduct';

const DashboardProducts = () => {
    const { data: products, isLoading, isError, error } = useGetProductsQuery(null, { refetchOnMountOrArgChange: true });
    const [deleteProductFromDB, { isSuccess }] = useDeleteProductByIdMutation();

    if (isLoading) {
        return <div className='h-screen flex items-center justify-center'>
            <Loader />
        </div>
    }

    const deleteProduct = _id => {
        deleteProductFromDB(_id);
        if (isSuccess) {
            toast.success("Product Deleted")
        }
    }


    return (
        <div className='mt-5 lg:px-40'>
            <h3 className='text-center text-primary font-bebas text-2xl tracking-widest'>All Products</h3>
            <div className='lg:px-40 md:px-20 px-4 grid gap-y-4 my-4'>
                {
                    products?.map(product =>
                        <DashboardProduct
                            key={product._id}
                            product={product}
                            deleteProduct={deleteProduct}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default DashboardProducts;