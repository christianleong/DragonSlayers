import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
// import HeroImage from '../assets/images/john-kofi-om3Cy5DvET0-unsplash.jpg'
import NASAImage1 from '../assets/testing-images/nasa-CpHNKNRwXps-unsplash.jpg'
import NASAImage2 from '../assets/testing-images/nasa-Q1p7bh3SHj8-unsplash.jpg'
import NASAImage3 from '../assets/testing-images/nasa-yZygONrUBe8-unsplash.jpg'

export default function Hero() {
    return (
        <>
            <ParallaxBanner style={{ aspectRatio: '3 / 1', height: '1000px' }}>
                <ParallaxBannerLayer image={NASAImage1} speed={-20}/>
            </ParallaxBanner>
            <ParallaxBanner style={{ aspectRatio: '4 / 1', height: '500px' }}>
                <ParallaxBannerLayer image={NASAImage2} speed={-20}/>
            </ParallaxBanner>
            <ParallaxBanner style={{ aspectRatio: '6 / 1', height: '300px' }}>
                <ParallaxBannerLayer image={NASAImage3} speed={-20}/>
            </ParallaxBanner>

                {/* <div className="dark-overlay"></div>
                <div className="content">
                    <span className="img-text">Welcome to DragonSlayers</span>
                </div> */}
        </>
    )
}