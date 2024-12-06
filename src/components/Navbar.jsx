"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from "../images/logo.png";
import { FaHeart } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";

const Navbar = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);

    const toggleModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };

    return (
        <div className='navbar flex justify-evenly items-center bg-[#749B3F80] h-20 fixed z-10 w-screen'>
            <Link
                href='/'
                rel='noopener noreferrer'
                aria-label='Back to homepage'
                className='flex items-center gap-2 p-2'
            >
                <Image width={40} height={40} alt='Logo' src={logo} className='w-8 lg:w-10'></Image>
                <h2 className='text-xl lg:text-3xl text-[#212337] font-bold'>
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
                <button className='hidden lg:flex items-center gap-2'><FaHeart />Favorites</button>
                <button className='flex items-center gap-2 ml-10 lg:ml-0'><RiShoppingCartFill /><span className='hidden lg:flex'>Cart</span></button>

                <button className='hidden lg:flex border-2 border-[#FFFFFF] rounded-lg px-4 py-2' onClick={() => document.getElementById('my_modal_3').showModal()}>Sign In</button>
                {
                    isLoginModalOpen ?
                        <>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box card rounded-none bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
                                    </form>
                                    <form method="card-body">
                                        <h1 className='text-center text-3xl text-black font-extrabold my-4'>Login</h1>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password" placeholder="Enter Your Password" className="input input-bordered" required />
                                            <label className="label my-4">
                                                <div className='flex items-center gap-2 text-[#FF6A1A] text-sm'>
                                                    <input type="checkbox" className="checkbox" />
                                                    <p> Remember me</p>
                                                </div>
                                                <a href="#" className="label-text-alt link link-hover underline">Forgot password?</a>
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <button className="btn bg-[#FF6A1A] text-white text-lg">Login</button>
                                        </div>
                                    </form>
                                    <div className='flex justify-center items-center gap-2 text-black font-bold mt-4'>
                                        <p className='border-[1px] w-full'></p>
                                        <span>Or</span>
                                        <p className='border-[1px] w-full'></p>
                                    </div>
                                    <p className='font-bold text-center text-black my-4'>Don’t have an account? <button className='text-[#FF6A1A]' onClick={toggleModal}>Sign up</button></p>
                                </div>
                            </dialog>
                        </> :
                        <>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box card rounded-none bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
                                    </form>
                                    <form method="card-body">
                                        <h1 className='text-center text-3xl text-black font-extrabold my-4'>Register</h1>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Full Name</span>
                                            </label>
                                            <input type="text" placeholder="Enter Your Full Name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password" placeholder="Enter Your Password" className="input input-bordered" required />
                                            <label className="label my-4">
                                                <div className='flex items-center gap-2 text-[#FF6A1A] text-sm'>
                                                    <input type="checkbox" className="checkbox" />
                                                    <p> Remember me</p>
                                                </div>
                                                <a href="#" className="label-text-alt link link-hover underline">Forgot password?</a>
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <button className="btn bg-[#FF6A1A] text-white text-lg">Register</button>
                                        </div>
                                    </form>
                                    <div className='flex justify-center items-center gap-2 text-black font-bold mt-4'>
                                        <p className='border-[1px] w-full'></p>
                                        <span>Or</span>
                                        <p className='border-[1px] w-full'></p>
                                    </div>
                                    <p className='font-bold text-center text-black my-4'>Already have an account? <button className='text-[#FF6A1A]' onClick={toggleModal}>Log In </button></p>
                                </div>
                            </dialog>
                        </>
                }

            </div>
            <div className='dropdown dropdown-end lg:hidden'>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-28 p-2 shadow">
                    <li className='flex '>
                        <Link
                            rel='noopener noreferrer'
                            href='/'
                            className='flex items-center px-4 -mb-1 hover:underline'
                        >
                            Home
                        </Link>
                    </li>
                    <li className='flex '>
                        <Link
                            rel='noopener noreferrer'
                            href='/shop'
                            className='flex items-center px-4 -mb-1 hover:underline'
                        >
                            Shop
                        </Link>
                    </li>
                    <li className='flex '>
                        <Link
                            rel='noopener noreferrer'
                            href='/about'
                            className='flex items-center px-4 -mb-1 hover:underline'
                        >
                            About Us
                        </Link>
                    </li>
                    <li className='flex '>
                        <Link
                            rel='noopener noreferrer'
                            href='/blog'
                            className='flex items-center px-4 -mb-1 hover:underline'
                        >
                            Blog
                        </Link>
                    </li>
                    <button className='border-t-2 mt-2 px-4 py-2 text-start' onClick={() => document.getElementById('my_modal_3').showModal()}>Sign In</button>
                    {
                        isLoginModalOpen ?
                            <>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box card rounded-none bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
                                        </form>
                                        <form method="card-body">
                                            <h1 className='text-center text-3xl text-black font-extrabold my-4'>Login</h1>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" placeholder="Enter Your Password" className="input input-bordered" required />
                                                <label className="label my-4">
                                                    <div className='flex items-center gap-2 text-[#FF6A1A] text-sm'>
                                                        <input type="checkbox" className="checkbox" />
                                                        <p> Remember me</p>
                                                    </div>
                                                    <a href="#" className="label-text-alt link link-hover underline">Forgot password?</a>
                                                </label>
                                            </div>
                                            <div className="form-control">
                                                <button className="btn bg-[#FF6A1A] text-white text-lg">Login</button>
                                            </div>
                                        </form>
                                        <div className='flex justify-center items-center gap-2 text-black font-bold mt-4'>
                                            <p className='border-[1px] w-full'></p>
                                            <span>Or</span>
                                            <p className='border-[1px] w-full'></p>
                                        </div>
                                        <p className='font-bold text-center text-black my-4'>Don’t have an account? <button className='text-[#FF6A1A]' onClick={toggleModal}>Sign up</button></p>
                                    </div>
                                </dialog>
                            </> :
                            <>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box card rounded-none bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
                                        </form>
                                        <form method="card-body">
                                            <h1 className='text-center text-3xl text-black font-extrabold my-4'>Register</h1>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Full Name</span>
                                                </label>
                                                <input type="text" placeholder="Enter Your Full Name" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" placeholder="Enter Your Password" className="input input-bordered" required />
                                                <label className="label my-4">
                                                    <div className='flex items-center gap-2 text-[#FF6A1A] text-sm'>
                                                        <input type="checkbox" className="checkbox" />
                                                        <p> Remember me</p>
                                                    </div>
                                                    <a href="#" className="label-text-alt link link-hover underline">Forgot password?</a>
                                                </label>
                                            </div>
                                            <div className="form-control">
                                                <button className="btn bg-[#FF6A1A] text-white text-lg">Register</button>
                                            </div>
                                        </form>
                                        <div className='flex justify-center items-center gap-2 text-black font-bold mt-4'>
                                            <p className='border-[1px] w-full'></p>
                                            <span>Or</span>
                                            <p className='border-[1px] w-full'></p>
                                        </div>
                                        <p className='font-bold text-center text-black my-4'>Already have an account? <button className='text-[#FF6A1A]' onClick={toggleModal}>Log In </button></p>
                                    </div>
                                </dialog>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;