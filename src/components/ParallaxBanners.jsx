import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
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
                    <div className="flex h-full items-center justify-center flex-col">
                        <div className='w-9/12 z-10'>
                            <h1 className='text-9xl font-bold font-title text-white uppercase text-center'>Welcome to DragonSlayers Ultimate Club</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <ParallaxBanner style={{ aspectRatio: '4 / 1', height: '600px' }}>
                    <ParallaxBannerLayer image={NASAImage2} speed={-20}/>
                </ParallaxBanner>
                <div className="absolute top-0 w-full h-full">
                    <div className="flex h-full items-center justify-center flex-col">
                        <div className='w-9/12 z-10'>
                            <h2 className='text-7xl font-bold text-white text-center'>Want to Play?</h2>
                        </div>
                        <p className='text-white z-10'>2024 SEASON EOI OUT NOW</p>
                        <p className='text-white z-10'>All announcements will be posted on our Facebook, Instagram and Website. Register your interest today! EOI the 2024 Season is out NOW!</p>
                        <button className='border-white border-2 px-6 py-3 text-3xl uppercase text-white z-10'>Join us</button>
                    </div>
                </div>
            </div>
            <ParallaxBanner style={{ aspectRatio: '6 / 1', height: '300px' }}>
                <ParallaxBannerLayer image={NASAImage3} speed={-20}/>
            </ParallaxBanner>
        </>
    )
}