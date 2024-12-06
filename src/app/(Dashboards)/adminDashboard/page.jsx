"use client"
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "../../../images/logo.png";
import { useParams } from 'next/navigation';

const AdminProfile = () => {

    const info = useParams();
    console.log(info);

    return (
        <>
            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar justify-evenly bg-base-300 w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
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
                        <ul className="hidden lg:flex items-center gap-8">
                            {/* Sidebar content here */}
                            <li ><Link href="" className='hover:underline'>Profile</Link></li>
                            <li><a className='hover:underline'>Add Product</a></li>
                        </ul>
                        <div className="flex-none lg:block">
                            <button className='hidden lg:flex border-2 border-black text-black rounded-lg px-4 py-2' >Log Out</button>
                        </div>
                    </div>
                    {/* Page content here */}
                    Content
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full p-4">
                        {/* Sidebar content here */}
                        <li><a className='hover:underline'>Profile</a></li>
                        <li><a className='hover:underline'>Add Product</a></li>
                        <button className='border-t-2 border-black text-black font-bold hover:bg-black hover:text-white py-2' >Log Out</button>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AdminProfile;