"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import mushroom from "../../images/mushroom.png";
import Image from 'next/image';
import { Pagination, Stack } from '@mui/material';
import Link from 'next/link';

const Shop = () => {
    const [items, setItems] = useState(foodProducts);
    const [products, setProducts] = useState([]);

    const handleSearch = e => {
        e.preventDefault();

        const form = e.target;
        const search = form.search.value;

        const filteredProducts = foodProducts?.filter((data) => {
            const value = data.foodTitle;
            return value.toUpperCase() === search.toUpperCase();
        })
        setProducts(filteredProducts);
        setItems(filteredProducts)
    }
    return (
        <>
            <Navbar></Navbar>
            <div className='pt-28 mb-10 flex justify-center'>
                <form onSubmit={handleSearch} action="">
                    <label className="input input-bordered flex items-center gap-2 lg:w-[400px] mx-auto">
                        <input type="text" name="search" className="grow" placeholder="Search By Category: Mushroom, Ginger, Garlic, etc..." />
                        <button className=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
                    </label>
                </form>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 px-4 lg:px-14 '>
                {
                    items?.map((product, index) => (
                        <div key={index} className='shadow-xl rounded-lg space-y-1 p-4'>
                            <div className='flex justify-center items-center bg-[#F4F6F6] rounded-lg'>
                                <Image width={200} height={200} alt='Mushroom' src={mushroom}></Image>
                            </div>
                            <h1 className='text-center text-[#212337] font-bold'>{product?.foodTitle}</h1>
                            <p className='text-center text-[#4A4A52]'>${product.price}/kg</p>
                            <div className='flex justify-between items-center gap-4'>
                                <button className='border-2 rounded-lg px-2 py-2 text-sm lg:text-base hover:border-none hover:bg-[#FF6A1A] hover:text-white'>Add to cart</button>
                                <Link href={`/shop/${product.id}`}><button className='border-2 rounded-lg px-2 py-2 text-sm lg:text-base hover:border-none hover:bg-[#FF6A1A] hover:text-white'>View Details</button></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center mt-12'>
                <Stack spacing={2} className='flex justify-center'>
                    <Pagination count={10} color="primary" />
                </Stack>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Shop;

const foodProducts = [
    {
        id: 1,
        image: "",
        foodTitle: "Mushroom",
        price: 50
    },
    {
        id: 2,
        image: "",
        foodTitle: "Potato",
        price: 50
    },
    {
        id: 3,
        image: "",
        foodTitle: "Brocoli",
        price: 50
    },
    {
        id: 4,
        image: "",
        foodTitle: "Ginger",
        price: 50
    },
    {
        id: 5,
        image: "",
        foodTitle: "Garlic",
        price: 50
    },
    {
        id: 6,
        image: "",
        foodTitle: "Mushroom",
        price: 50
    },
    {
        id: 7,
        image: "",
        foodTitle: "Mushroom",
        price: 50
    },
    {
        id: 8,
        image: "",
        foodTitle: "Mushroom",
        price: 50
    },
    {
        id: 9,
        image: "",
        foodTitle: "Mushroom",
        price: 50
    },
    {
        id: 10,
        image: "",
        foodTitle: "Mushroom",
        price: 50
    },
    {
        id: 11,
        image: "",
        foodTitle: "Mushroom",
        price: 50
    },
    {
        id: 12,
        image: "",
        foodTitle: "Mushroom",
        price: 50
    }
]