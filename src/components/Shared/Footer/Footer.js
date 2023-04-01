import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import paypal from "../../../assets/paypal.png";
import googlePay from "../../../assets/Google Pay.png";
import applePay from "../../../assets/Apple Pay.png";
import shopPay from "../../../assets/Shop Pay.png";
import visa from "../../../assets/visa.png";
import masterCard from "../../../assets/mastercard.png";
import americanExpress from "../../../assets/american-express.png";
import discover from "../../../assets/discover.png";
import ssl from "../../../assets/ssl-certificate.png";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-slate-50 flex flex-col mt-10">
            <div className='grid lg:grid-cols-3 w-full md:grid-cols-3 sm:grid-cols-1 grid-cols-1 mx-auto'>
                <div className='text-neutral mt-4'>
                    <div className='flex items-center gap-x-2 font-bold uppercase'>
                        <h3 className='text-xl font-bebas text-secondary tracking-wide'>Explore</h3>
                    </div>
                    <div className='w-[53px] h-[0.5px] opacity-50 bg-primary'></div>
                    <div className='flex flex-col gap-y-2 mt-4'>
                        <Link className="link link-hover text-sm text-primary opacity-70">Returns & Exchange</Link>
                        <Link className="link link-hover text-sm text-primary opacity-70">Privacy & Policy</Link>
                        <Link className="link link-hover text-sm text-primary opacity-70">Contact</Link>
                        <Link to="/sign-up" className="link link-hover text-sm text-primary opacity-70">Be A Seller</Link>
                    </div>
                </div>
                <div className='text-neutral mt-4'>
                    <div className='flex items-center gap-x-2 font-bold uppercase'>
                        <h3 className='text-xl font-bebas text-secondary tracking-wide'>About</h3>
                    </div>
                    <div className='w-[39px] h-[0.5px] opacity-50 bg-primary'></div>
                    <p className='text-sm opacity-70 pr-36 mt-4'>
                        Deshi Vibes is a well known brand that makes meticulously crafted circular apparel for adventurous lifestyles.
                    </p>
                </div>
                <div className='mt-4'>
                    <div className='flex items-center gap-x-2 font-bold uppercase'>
                        <h3 className='text-xl font-bebas text-secondary tracking-wide'>Stay Connected</h3>
                    </div>
                    <div className='w-[103px] h-[0.5px] opacity-50 bg-primary'></div>
                    <div className="flex flex-col gap-4">
                        <p className='text-sm opacity-70 pr-28 mt-4'>
                            Join the L/L Community for first access to new releases, event invites and the latest from the crew.
                        </p>
                        <div className='flex items-center'>
                            <input
                                type="email"
                                className='text-sm border border-black rounded-none focus:outline-none focus:shadow-lg h-12 px-6 w-[250px]'
                                placeholder='Join our mailing list'
                            />
                            <button className='bg-primary hover:bg-secondary active:bg-opacity-80 transition-all h-[48px] px-6 font-bebas text-white'>JOIN</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[0.5px] mt-28 mb-10 opacity-50 bg-primary'></div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='flex gap-x-3 text-2xl mb-10'>
                    <FaFacebookF className='text-gray-dark hover:text-primary' />
                    <FaInstagram className='text-gray-dark hover:text-primary' />
                    <FaTwitter className='text-gray-dark hover:text-primary' />
                </div>
                <div className='lg:flex md:flex sm:flex gap-x-5 items-center m-0 p-0'>
                    <div className='flex items-center justify-center gap-5'>
                        <img src={googlePay} className="w-12 aspect-[3/2] object-contain mix-blend-color-burn" alt="" />
                        <img src={applePay} className="w-12 aspect-[3/2] object-contain mix-blend-color-burn" alt="" />
                        <img src={shopPay} className="w-12 aspect-[3/2] object-contain mix-blend-color-burn" alt="" />
                    </div>
                    <div className='flex items-center justify-center gap-5'>
                        <img src={masterCard} className="w-12 aspect-[3/2] object-contain mix-blend-color-burn" alt="" />
                        <img src={americanExpress} className="w-12 aspect-[3/2] object-contain mix-blend-color-burn" alt="" />
                        <img src={visa} className="w-12 aspect-[3/2] object-contain mix-blend-color-burn" alt="" />
                    </div>
                    <div className='flex items-center justify-center gap-5'>
                        <img src={paypal} className="w-12 aspect-[3/2] object-contain mix-blend-color-burn" alt="" />
                        <img src={discover} className="w-12 aspect-[3/2] object-contain mix-blend-color-burn" alt="" />
                        <img src={ssl} className="w-12 aspect-[3/2] object-contain mix-blend-color-burn" alt="" />
                    </div>
                </div>
                <p className='m-0 p-0 text-xs'>Copyright © 2023 - All right reserved by <span className='font-bold text-primary'>Deshi Vibes</span></p>
            </div>
        </footer>
    );
};

export default Footer;