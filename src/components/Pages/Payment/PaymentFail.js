import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const PaymentFail = () => {

    useEffect(() => {
        toast.error("Something went wrong... Please try again")
    }, [])


    return (
        <div className='text-red mt-10 text-center'>
            <h2 className='font-medium'>Something went wrong... Please try again</h2>
        </div>
    );
};

export default PaymentFail;