import Facebook from '../assets/icons/icons8-facebook2.svg'
import Instagram from '../assets/icons/icons8-instagram1.svg'
import Email from '../assets/icons/icons8-gmail-logo.svg'

export default function Footer() {

    return (
        <>
            <div className="bg-black w-full h-full py-8">
                <div className="social-links text-white flex justify-center items-center gap-1.5">
                    <a href="" className='z-10'>
                        <img className='h-10' src={Facebook} alt="Facebook link" />
                    </a>
                    <a href="" className='z-10'>
                        <img className='h-10' src={Instagram} alt="Instagram link" />
                    </a>
                    <a href="" className='z-10'>
                        <img className='h-10' src={Email} alt="Email link" />
                    </a>
                </div>
            <p className='text-white text-center mt-4'>&copy; Christian Leong 2024</p>
            </div>
        </>
    )
}