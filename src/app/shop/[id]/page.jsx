import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';
import mushroom from "../../../images/mushroom.png";
import { Rating } from '@mui/material';
import { FaHeart } from 'react-icons/fa';
import { RiShoppingCartFill } from 'react-icons/ri';

const page = ({ params }) => {

    const { foodTitle, price } = foodProducts?.find((products) => params.id == products.id);

    return (
        <>
            <Navbar></Navbar>
            <div className='lg:flex justify-between gap-8 pt-36 px-4 lg:px-20'>
                <Image width={500} height={300} alt={foodTitle} src={mushroom} className='lg:w-1/2 lg:h-[400px] border-2 rounded-lg lg:px-20'></Image>
                <div className='lg:w-1/2 mt-8 lg:mt-0'>
                    <button className='text-[#749B3F] font-semibold bg-[#749B3F1A] px-4 py-1 rounded-2xl'>Fruits</button>
                    <h1 className='text-[#212337] text-2xl lg:text-4xl font-bold my-3'>{foodTitle}</h1>
                    <div className='flex items-center'><Rating value={5} /><span className='text-xl font-bold'>5.0 <span className='text-sm'>(1 review)</span></span></div>
                    <p className='text-[#FF6A1A] font-bold text-2xl my-3'>${price}/kg</p>
                    <p className='text-[#4A4A52]'>From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.</p>

                    <div className='font-bold my-4'>Quantity <span className='border-[1px] p-2 ml-4'>-</span><span className='border-y-[1px] p-2'>1</span><span className='border-[1px] p-2 mr-4'>+</span>/kg</div>

                    <div className='flex items-center gap-8 mt-3'>
                        <button className='flex items-center gap-2 border-2 rounded-lg px-4 py-2 text-sm lg:text-lg bg-[#F4F6F6] text-black hover:bg-[#F4F6F680]'><FaHeart />Favorites</button>
                        <button className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm lg:text-lg border-none bg-[#FF6A1A] text-white hover:bg-[#FF6A1A80]'><RiShoppingCartFill />Add to cart</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default page;

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