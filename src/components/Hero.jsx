import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import NASAImage1 from '../assets/testing-images/nasa-CpHNKNRwXps-unsplash.jpg'
import NASAImage2 from '../assets/testing-images/nasa-Q1p7bh3SHj8-unsplash.jpg'
import NASAImage3 from '../assets/testing-images/nasa-yZygONrUBe8-unsplash.jpg'
import Navbar from './Navbar';


export default function Hero() {
    return (
        <>
            <div className='relative'>
                <ParallaxBanner style={{ aspectRatio: '3 / 1', height: '1000px' }}>
                    <ParallaxBannerLayer image={NASAImage1} speed={-20}/>
                </ParallaxBanner>
                <div className="absolute top-0 w-full h-full">
                    <Navbar />
                    <div className="hero-container">
                        <div className='hero-title'>
                            <h1>Welcome to Dragon</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ParallaxBanner style={{ aspectRatio: '4 / 1', height: '500px' }}>
                <ParalwwlaxBannerLayer image={NASAImage2} speed={-20}/>
            </ParallaxBanner>
            <ParallaxBanner style={{ aspectRatio: '6 / 1', height: '300px' }}>
                <ParallaxBannerLayer image={NASAImage3} speed={-20}/>
            </ParallaxBanner> */}


        </>
    )
}