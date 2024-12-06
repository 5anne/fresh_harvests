import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "../images/logo.png";
import { FaHeart } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";

const Navbar = () => {
    return (
        <header className='fixed z-10 '>
            <div className='container flex justify-evenly items-center h-20 lg:min-w-[1250px] mx-auto'>
                <Link
                    href='/'
                    rel='noopener noreferrer'
                    aria-label='Back to homepage'
                    className='flex items-center gap-2 p-2'
                >
                    <Image width={40} height={40} alt='Logo' src={logo}></Image>
                    <h2 className='text-2xl lg:text-3xl text-[#212337] font-bold'>
                        Fresh Harvests
                    </h2>
                </Link>
                <ul className='items-stretch hidden space-x-3 font-medium text-[#212337CC] lg:flex'>
                    <li className='flex '>
                        <Link
                            rel='noopener noreferrer'
                            href='/'
                            className='flex items-center px-4 -mb-1 hover:underline'
                        >
                            Home
                        </Link>
                    </li>
                    <li className='flex'>
                        <Link
                            rel='noopener noreferrer'
                            href='/shop'
                            className='flex items-center px-4 -mb-1 hover:underline'
                        >
                            Shop
                        </Link>
                    </li>
                    <li className='flex'>
                        <Link
                            rel='noopener noreferrer'
                            href='/about'
                            className='flex items-center px-4 -mb-1 hover:underline'
                        >
                            About Us
                        </Link>
                    </li>
                    <li className='flex'>
                        <Link
                            rel='noopener noreferrer'
                            href='/blog'
                            className='flex items-center px-4 -mb-1 hover:underline'
                        >
                            Blog
                        </Link>
                    </li>
                </ul>
                <div className='flex items-center gap-4 text-[#FFFFFF]'>
                    <button className='flex items-center gap-2'><FaHeart />Favorites</button>
                    <button className='flex items-center gap-2'><RiShoppingCartFill />Cart</button>
                    <button className='border-2 border-[#FFFFFF] rounded-lg px-4 py-2'>Sign In</button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;