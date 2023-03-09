import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAddToCartMutation, useGetProductByIdQuery } from '../../../features/products/productsSlice';
import Loader from '../../Shared/Loader/Loader';
import Spinner from '../../Shared/Spinner/Spinner';

const ProductDetails = () => {
    const [loading, setLoading1] = useState(false);
    const { _id } = useParams();

    const { user } = useSelector(state => state.auth);
    const { data: product, isLoading, isError, error } = useGetProductByIdQuery(_id);
    const [addToCart, { data, isSuccess }] = useAddToCartMutation();

    useEffect(() => {
        if (data?.message === "Already in your cart") {
            toast.error(data.message, { id: "addProduct" });
        }
        if (data?.acknowledged) {
            toast.success("Added Into Your Cart", { id: "addProduct" });
        }
    }, [data?.message, data?.acknowledged]);

    console.log(user);

    if (isLoading) {
        return <div className='h-screen flex items-center justify-center'>
            <Loader />
        </div>
    }


    const { name, image, category, description, lineup, material, price, quantity, sell, size, } = product;

    const availability = quantity - sell;


    const handleAddToCart = (product) => {

        const addToCartInfo = {
            buyerEmail: user?.email,
            productId: product._id,
            productName: product.name,
            productImage: product.image,
            productPrice: product.price
        }
        addToCart(addToCartInfo);

    }



    return (
        <section className='lg:flex md:flex lg:flex-row md:flex-row flex-col md:px-12 px-4 my-10 gap-x-40 justify-center'>
            <div className='flex flex-col gap-y-8 lg:w-[40%] md:w-[40%]'>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img
                            className="lg:w-[500px] w-96 lg:h-[550px] md:h-[300px]"
                            src={image}
                            alt="food-card-img"
                        />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className='lg:w-[30%] md:w-[60%] flex flex-col justify-between md:mt-0 lg:mt-0'>
                <h3 className="text-3xl tracking-widest text-neutral font-bebas">{name}</h3>
                <div className='flex flex-col gap-y-4'>
                    <span className='text-lg font-bebas'>Category: {lineup}</span>
                    <span className='bg-primary px-2 text-sm text-white w-40 text-center'>Availability:
                        {
                            parseInt(availability) > 0 ? " In stock" : "Out of stock"
                        }
                    </span>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <p className='text-lg font-bebas'>Material: {material}</p>
                    <p className='text-lg font-bebas'>Size
                        <br />
                        <span className='bg-primary px-3 py-0.5 text-white'>
                            {size}
                        </span>
                    </p>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <p className='text-lg font-bebas'>Price: ${price}.00</p>
                    <div className='mt-2'>
                        <p className='text-lg font-bebas'>Description</p>
                        <span className='text-xs font-sans text-justify font-medium'>{description}</span>
                    </div>
                </div>
                <div className='flex gap-x-10'>
                    <button
                        onClick={() => handleAddToCart(product)}
                        className={`w-full bg-primary hover:bg-secondary active:bg-opacity-80 text-white font-medium py-2 text-center font-bebas tracking-wide transition-all ${availability < 1 && "opacity-25"}`}>
                        {
                            isLoading ? <Spinner /> : "Add To Cart"
                        }
                    </button>
                </div>
            </div>
        </section >
    );
};

export default ProductDetails;