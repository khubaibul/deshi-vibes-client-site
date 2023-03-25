import React from 'react';
import { useSelector } from 'react-redux';

const CheckoutDetails = () => {
    const { user } = useSelector(state => state.auth)
    return (
        <div>
            <p>This is CheckoutDetails Page</p>
        </div>
    );
};

export default CheckoutDetails;