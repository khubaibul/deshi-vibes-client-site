import React from 'react';

const Product = ({ product }) => {
    console.log(product);
    const { _id, img, name, price } = product;
    return (
        <div className='bg-gray hover:shadow-lg hover:-translate-y-2 transition-all duration-500'>
            <img className='h-96' src={img} alt="" />
            <div className='flex justify-between p-2 mt-4'>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default Product;