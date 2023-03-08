import React from 'react';
import menImage from "../../../assets/Men.png"
import womenImage from "../../../assets/Women.png"
import kidsImage from "../../../assets/kids2.png"
import { Link } from 'react-router-dom';

const Category = () => {
    const categories = [
        {
            id: 1,
            name: "MENS",
            image: menImage
        },
        {
            id: 2,
            name: "WOMENS",
            image: womenImage
        },
        {
            id: 3,
            name: "KIDS",
            image: kidsImage
        },
    ]
    return (
        <section className='px-11'>

            <div data-aos="slide-up" data-aos-duration="600">
                <h1 className='uppercase font-bebas text-3xl text-center mt-28'><span className='text-primary'>Deshi Vibes</span> Supply Latest Apparel Products.</h1>
                <dl className='text-center lg:w-[45%] md:w-[70%] mx-auto italic text-sm opacity-60 mt-12 lg:leading-6'>
                    At Desi Vibes we are revolutionizing quality apparel, delivering sustainability and brand-level quality products for our customers. We also make premium quality in-house clothes for our community, crafted with the entire lifecycle of the product in mind.
                </dl>
            </div>

            <div className='mt-36 grid lg:grid-cols-3 grid-cols-1 gap-14' data-aos="slide-up" data-aos-duration="1400">

                {
                    categories?.map(category => {
                        return <Link to="/store" key={category.id}>
                            <img src={category.image} alt="" />
                            <h3 className='text-3xl text-primary font-bebas mt-4'>{category.name}</h3>
                        </Link>
                    })
                }

            </div>

        </section>
    );
};

export default Category;