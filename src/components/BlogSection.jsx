import React from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
import leaf from "../images/leaf2.jpg";
import blogImg from "../images/blogImg1.jpg";
import { FaLongArrowAltRight } from 'react-icons/fa';

const BlogSection = () => {
    return (
        <div className='mt-24'>
            <div className='relative'>
                <SectionTitle tag="Our Blog" title="Fresh Harvest Blog" description="Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration." />
                <Image alt='Leaf' src={leaf} className='absolute bottom-[10%] left-[90%]'></Image>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 my-8 px-4 lg:px-0'>
                <div className='space-y-2 font-semibold'>
                    <Image width={500} height={500} alt="Blog" src={blogImg} />
                    <p className='text-[#4A4A52]'>May 23, 2024</p>
                    <p className=''>Exploring Seasonal Delights: A Guide to What's Fresh Right Now</p>
                    <button className='text-[#FF6A1A] flex items-center gap-2'>Read More <FaLongArrowAltRight /></button>
                </div>
                <div className='space-y-2 font-semibold'>
                    <Image width={500} height={500} alt="Blog" src={blogImg} />
                    <p className='text-[#4A4A52]'>May 23, 2024</p>
                    <p className=''>Exploring Seasonal Delights: A Guide to What's Fresh Right Now</p>
                    <button className='text-[#FF6A1A] flex items-center gap-2'>Read More <FaLongArrowAltRight /></button>
                </div>
                <div className='space-y-2 font-semibold'>
                    <Image width={500} height={500} alt="Blog" src={blogImg} />
                    <p className='text-[#4A4A52]'>May 23, 2024</p>
                    <p className=''>Exploring Seasonal Delights: A Guide to What's Fresh Right Now</p>
                    <button className='text-[#FF6A1A] flex items-center gap-2'>Read More <FaLongArrowAltRight /></button>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;