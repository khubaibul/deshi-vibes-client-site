import React from 'react';
import errorImage from "../../../assets/Error-Message.jpg";
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <img className='lg:w-[55%]' src={errorImage} alt="" />
            <h1 className='lg:text-4xl md:text-4xl 3xl'>Oops! An Error Ocurred!</h1>
            {error && (
                <div className='flex mt-4 items-center text-2xl mb-2'>
                    <p className='font-bold mr-3 text-lg'>{error.status}</p>
                </div>
            )}
            <button className='rounded-none bg-red px-4 py-1.5 text-white font-semibold hover:opacity-80 active:opacity-75'><Link to="/">Back To Homepage</Link></button>
        </div>
    );
};

export default ErrorPage;