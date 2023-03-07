import React from 'react';
import { useGetProductsQuery } from '../../../features/products/productsSlice';
import Loader from '../../Shared/Loader/Loader';
import Product from '../Product/Product';

const ProductStore = () => {
    const { data: products, isLoading, isError, error } = useGetProductsQuery();


    if (isLoading) {
        return <div className='h-screen flex items-center justify-center'>
            <Loader />
        </div>
    }


    return (
        <section className='mt-14'>
            <h3 className='text-center uppercase text-primary font-bebas text-2xl'>Best Deals Only For You</h3>
            {
                isError && <p className='text-sm text-red font-semibold'>{error}</p>
            }
            {
                products &&
                <div className='grid grid-cols-3 px-60 gap-7 my-20'>
                    {
                        products?.map(product => <Product key={product._id} product={product} />)
                    }
                </div>
            }
        </section>
    );
};

export default ProductStore;