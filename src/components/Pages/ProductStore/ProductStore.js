import React, { useState } from 'react';
import { useGetProductsQuery } from '../../../features/products/productsSlice';
import Loader from '../../Shared/Loader/Loader';
import Product from '../Product/Product';

const ProductStore = () => {
    const [productFilter, setProductFilter] = useState("All");
    const { data: products, isLoading, isError, error } = useGetProductsQuery(null, { refetchOnMountOrArgChange: true });

    if (isLoading) {
        return <div className='h-screen flex items-center justify-center'>
            <Loader />
        </div>
    }

    let filteredProduct = [];
    if (productFilter === "All") {
        filteredProduct = products;
    }
    else {
        filteredProduct = products?.filter(product => product.category === productFilter);
    }

    const handleSearch = e => {
        e.preventDefault();
        filteredProduct = products?.filter(product => product.productName.includes(e.target.searchKeyword.value));
        e.target.reset();
    }


    return (
        <section className='mt-14'>
            <h3 className='text-center uppercase text-primary font-bebas text-2xl'>Best Deals Only For You</h3>
            {
                isError && <p className='text-sm text-red font-semibold'>{error}</p>
            }
            <div className='flex justify-end lg:px-40 md:px-10 px-6 mt-4'>
                <select
                    name="category"
                    onChange={(e) => setProductFilter(e.target.value)}
                    required className="p-2 border border-neutral focus:outline-neutral">
                    <option selected value={"All"}>All</option>
                    <option value={"Men"}>Men</option>
                    <option value={"Women"}>Women</option>
                    <option value={"Kids"}>Kids</option>
                    <option value={"Accessories"}>Accessories</option>
                </select>
            </div>
            {
                products &&
                <div className='grid lg:grid-cols-3  md:grid-cols-2 lg:px-40 md:px-10 px-6 gap-20 mb-20 mt-10'>
                    {
                        filteredProduct?.map(product => <Product key={product._id} product={product} />)
                    }
                </div>
            }
        </section>
    );
};

export default ProductStore;