import About from "@/components/About";
import Banner from "@/components/Banner";
import FreshProducts from "@/components/FreshProducts";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";

export default function Page() {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="w-[1080px] mx-auto">
                <FreshProducts></FreshProducts>
                <About></About>
                <Offer></Offer>
            </div>
        </>
    )
}