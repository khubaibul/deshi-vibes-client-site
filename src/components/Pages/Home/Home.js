import React from 'react';
import Category from '../Category/Category';
import ProductLineup from '../ProductLineup/ProductLineup';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Hero />
            <Category />
            <ProductLineup />
        </div>
    );
};

export default Home;