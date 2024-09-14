import Navbar from "../components/Navbar";
import ParallaxBanners from "../components/ParallaxBanners"
import Footer from "../components/Footer";


export default function Home() {

    return (
        <>
            <div className="dark-overlay"></div>
            <Navbar />
            <ParallaxBanners />
            < Footer />
        </>
    )
}