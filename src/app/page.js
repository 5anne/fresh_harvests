
import About from "@/components/About";
import Banner from "@/components/Banner";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import FreshProducts from "@/components/FreshProducts";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Testimonial from "@/components/Testimonial";
import { auth } from "../../auth";

export default async function Page() {
    const session = await auth();
    console.log(session);
    return (
        <>
            <Navbar session={session}></Navbar>
            <Banner></Banner>
            <div className="lg:w-[1080px] mx-auto">
                <FreshProducts></FreshProducts>
                <About></About>
                <Offer></Offer>
                <Testimonial></Testimonial>
                <BlogSection></BlogSection>
            </div>
            <Footer></Footer>
        </>
    )
}