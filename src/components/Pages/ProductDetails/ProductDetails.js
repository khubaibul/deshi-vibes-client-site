import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../../features/products/productsSlice';
import Loader from '../../Shared/Loader/Loader';

const ProductDetails = () => {
    const { _id } = useParams();
    const { data: product, isLoading, isError, error } = useGetProductByIdQuery(_id);

    console.log(product);

    if (isLoading) {
        return <div className='h-screen flex items-center justify-center'>
            <Loader />
        </div>
    }
    return (
        <div>
            <p>{product?.name}</p>
            <img src={product?.image} className="w-96" alt="" />
        </div>
    );
};

export default ProductDetails;