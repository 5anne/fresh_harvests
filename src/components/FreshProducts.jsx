import React from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
import leaf1 from "../images/leaf1.png";
import mushroom from "../images/mushroom.png";

const FreshProducts = () => {
    return (
        <div className='my-12'>
            <div className='flex justify-evenly'>
                <Image width={100} height={100} alt='Leaf' src={leaf1}></Image>
                <SectionTitle tag="Our Products" title="Our Fresh Products" description="We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients." />
                <Image width={100} height={100} alt='Leaf' src={leaf1} className='bg-white'></Image>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <button className='text-[#A6A6A6] border-2 border-[#A6A6A6] rounded-lg px-4 py-1 hover:bg-[#749B3F] hover:border-none hover:text-white'>All</button>
                <button className='text-[#A6A6A6] border-2 border-[#A6A6A6] rounded-lg px-4 py-1 hover:bg-[#749B3F] hover:border-none hover:text-white'>Fruit</button>
                <button className='text-[#A6A6A6] border-2 border-[#A6A6A6] rounded-lg px-4 py-1 hover:bg-[#749B3F] hover:border-none hover:text-white'>Vegetables</button>
                <button className='text-[#A6A6A6] border-2 border-[#A6A6A6] rounded-lg px-4 py-1 hover:bg-[#749B3F] hover:border-none hover:text-white'>Salad</button>
            </div>
            <div className='grid grid-cols-4 gap-8'>
                {
                    products.map((product, index) => (
                        <div key={index} className='shadow-xl rounded-lg space-y-1 p-4'>
                            <div className='flex justify-center items-center bg-[#F4F6F6] rounded-lg'>
                                <Image width={200} height={200} alt='Mushroom' src={mushroom}></Image>
                            </div>
                            <h1 className='text-center text-[#212337] font-bold'>{product.foodTitle}</h1>
                            <p className='text-center text-[#4A4A52]'>${product.price}/kg</p>
                            <div className='flex justify-center items-center'>
                                <button className='border-2 rounded-lg px-4 py-2 hover:border-none hover:bg-[#FF6A1A] hover:text-white'>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FreshProducts;

const products = [
    {
        id: 1,
        image: "",
        foodTitle: "Mushroom",
        price: 50
    },
    {
        id: 2,
        image: "",
        foodTitle: "Mushroom",
        price: 50
    },
    {
        id: 3,
        image: "",
        foodTitle: "Mushroom",
        price: 50
    },
    {
        id: 4,
        image: "",
        foodTitle: "Mushroom",
        price: 50
    },
    {
        id: 5,
        image: "",
        foodTitle: "Mushroom",
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
    }
]