import React, { useState } from 'react';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import heroBg1 from "../../../assets/Hero1.png";
import heroBg2 from "../../../assets/Hero2.png";
import heroBg3 from "../../../assets/Hero3.png";

const Hero = () => {
    const [heroSection, setHeroSection] = useState(0);
    return (
        <>
            {
                heroSection === 0 &&
                <section className='flex justify-start items-center bg-cover bg-center lg:h-[1000px] md:h-[800px] h-[400px] relative' style={{ backgroundImage: `url(${heroBg1})` }
                }>
                    <button
                        onClick={() => setHeroSection(2)}
                        className='absolute left-0 transition-all duration-1000'>
                        <FaCaretLeft className='text-6xl text-primary opacity-50 hover:opacity-100' />
                    </button>
                    <div className='flex flex-col gap-y-4 text-white pl-40'>
                        <h1 className='text-4xl font-bebas'>NEW WOMEN APPAREL</h1>
                        <h4 className='font-semibold opacity-80'>Introducing you to the new collection for <span className='text-primary text-xl italic font-bold'>WOMEN...</span></h4>
                        <Link to="/store" className='bg-primary hover:bg-secondary active:opacity-80 w-[150px] text-center py-3 rounded font-bebas tracking-wide'>
                            SHOP
                        </Link>
                    </div>
                    <button
                        onClick={() => setHeroSection(1)}
                        className='absolute right-0 transition-all duration-1000'>
                        <FaCaretRight className='text-6xl text-primary opacity-90 hover:opacity-100' />
                    </button>
                </section >
            }
            {
                heroSection === 1 &&
                <section section className='flex justify-start items-center bg-cover bg-center  lg:h-[1000px] md:h-[800px] h-[400px] relative' style={{ backgroundImage: `url(${heroBg2})` }
                }>
                    <button
                        onClick={() => setHeroSection(0)}
                        className='absolute left-0 transition-all duration-1000'>
                        <FaCaretLeft className='text-6xl text-primary opacity-50 hover:opacity-100' />
                    </button>
                    <div className='flex flex-col gap-y-4 text-white pl-40'>
                        <h1 className='text-4xl font-bebas'>NEW MEN APPAREL</h1>
                        <h4 className='font-semibold opacity-80'>Introducing you to the new collection for <span className='text-gray-light text-xl italic font-bold'>MEN...</span></h4>
                        <Link to="/store" className='bg-primary hover:bg-secondary active:opacity-80 w-[150px] text-center py-3 rounded font-bebas tracking-wide'>
                            SHOP
                        </Link>
                    </div>
                    <button
                        onClick={() => setHeroSection(2)}
                        className='absolute right-0 transition-all duration-1000'>
                        <FaCaretRight className='text-6xl text-primary opacity-90 hover:opacity-100' />
                    </button>
                </section >
            }
            {
                heroSection === 2 &&
                <section section className='flex justify-start items-center bg-cover bg-center  lg:h-[1000px] md:h-[800px] h-[400px] relative transition-all duration-1000' style={{ backgroundImage: `url(${heroBg3})` }
                }>
                    <button
                        onClick={() => setHeroSection(1)}
                        className='absolute left-0 transition-all duration-1000'>
                        <FaCaretLeft className='text-6xl text-primary opacity-50 hover:opacity-100' />
                    </button>
                    <div className='flex flex-col gap-y-4 text-white pl-40'>
                        <h1 className='text-4xl font-bebas'>NEW ACCESSORIES APPAREL</h1>
                        <h4 className='font-semibold opacity-80'>Introducing you to the new collection for <span className='text-primary text-xl italic font-bold'>ACCESSORIES...</span></h4>
                        <Link to="/store" className='bg-primary hover:bg-secondary active:opacity-80 w-[150px] text-center py-3 rounded font-bebas tracking-wide'>
                            SHOP
                        </Link>
                    </div>
                    <button
                        onClick={() => setHeroSection(0)}
                        className='absolute right-0 transition-all duration-1000'>
                        <FaCaretRight className='text-6xl text-primary opacity-90 hover:opacity-100' />
                    </button>
                </section >
            }
        </>
    );
};

export default Hero;