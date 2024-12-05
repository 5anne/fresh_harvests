import React from 'react';
import SectionTitle from './SectionTitle';
import leaf1 from "../images/leaf1.png";
import leaf2 from "../images/leaf2.jpg";
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import customer from "../images/customer.jpg";
import pattern from "../images/pattern.jpg";


const Testimonial = () => {
    return (
        <div className='mt-24'>
            <div className='flex justify-evenly'>
                <Image width={150} height={100} alt='Leaf' src={leaf1} className='w-32 h-20'></Image>
                <SectionTitle tag="Testimonial" title="What Our Customers Say" description="Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:" />
                <Image width={150} height={100} alt='Leaf' src={leaf2}></Image>
            </div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="flex justify-center items-center gap-14 py-12">
                        <div className=''>
                            <Image alt='Customer' src={customer}></Image>
                        </div>
                        <div className='w-1/2 text-[#4A4A52] bg-[#F4F6F6] rounded-lg p-8 relative'>
                            <Image alt='pattern' src={pattern} className='absolute -top-[40%] -left-[10%]'></Image>
                            <p>"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</p>
                            <p className='text-[#212337] mt-4'><span className='font-semibold'>Jane Doe</span> - Professional chef</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center items-center gap-14 py-12">
                        <div className=''>
                            <Image alt='Customer' src={customer}></Image>
                        </div>
                        <div className='w-1/2 text-[#4A4A52] bg-[#F4F6F6] rounded-lg p-8 relative'>
                            <Image alt='pattern' src={pattern} className='absolute -top-[40%] -left-[10%]'></Image>
                            <p>"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</p>
                            <p className='text-[#212337] mt-4'><span className='font-semibold'>Jane Snow</span> - Professional chef</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center items-center gap-14 py-12">
                        <div className=''>
                            <Image alt='Customer' src={customer}></Image>
                        </div>
                        <div className='w-1/2 text-[#4A4A52] bg-[#F4F6F6] rounded-lg p-8 relative'>
                            <Image alt='pattern' src={pattern} className='absolute -top-[40%] -left-[10%]'></Image>
                            <p>"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</p>
                            <p className='text-[#212337] mt-4'><span className='font-semibold'>John Smith</span> - Professional chef</p>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    );
};

export default Testimonial;