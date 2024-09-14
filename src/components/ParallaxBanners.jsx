import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
// import NASAImage1 from '../assets/testing-images/nasa-CpHNKNRwXps-unsplash.jpg'
import NASAImage2 from '../assets/testing-images/nasa-Q1p7bh3SHj8-unsplash.jpg'
import NASAImage3 from '../assets/testing-images/nasa-yZygONrUBe8-unsplash.jpg'
import FrisbeeImage1 from '../assets/images/john-kofi-om3Cy5DvET0-unsplash.jpg'

export default function ParallaxBanners() {
    return (
        <>
            <div className='relative'>
                <ParallaxBanner style={{ aspectRatio: '3 / 1', height: '1000px' }}>
                    <ParallaxBannerLayer image={FrisbeeImage1} speed={-20}/>
                </ParallaxBanner>        
                <div className="absolute top-0 w-full h-full">
                    <div className="hero-container">
                        <div className='hero-title'>
                            <h1 className='text-8xl font-bold'>Welcome to DragonSlayers Ultimate Club</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <ParallaxBanner style={{ aspectRatio: '4 / 1', height: '600px' }}>
                    <ParallaxBannerLayer image={NASAImage2} speed={-20}/>
                </ParallaxBanner>
                <div className="absolute top-0 w-full h-full">
                    <div className="hero-container">
                        <div className='hero-title'>
                            <h2 className=' text-7xl font-bold'>Want to Play?</h2>
                            <p>2024 SEASON EOI OUT NOW</p>
                            <p>All announcements will be posted on our Facebook, Instagram and Website. Register your interest today! EOI the 2024 Season is out NOW!</p>
                        </div>
                    </div>
                </div>
            </div>
            <ParallaxBanner style={{ aspectRatio: '6 / 1', height: '300px' }}>
                <ParallaxBannerLayer image={NASAImage3} speed={-20}/>
            </ParallaxBanner>
        </>
    )
}