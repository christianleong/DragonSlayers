import { useEffect, useState } from "react"
import frisbeeLogo from '../assets/logo/frisbee.png'
import HamburgerMenu from './HamburgerMenu'


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    // Add or remove overflow-hidden class to prevent scrolling when the menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    return (
        <> 
            {/* hamburger menu */}
            {isOpen && 
            <div className='bg-black w-screen h-screen'>
                <header className='flex items-center px-12 py-2 z-10 w-full bg-black absolute sm:hidden'>
                    <div className="flex flex-1 justify-center">
                        <ul className='flex gap-6 flex-col left-1/2 -translate-x-1/2 absolute text-center mt-10'>
                            <li><a href="" className='text-white uppercase'>Home</a></li>
                            <li><a href="" className='text-white uppercase'>About Us</a></li>
                            <li><a href="" className='text-white uppercase'>Blog</a></li>
                            <li><a href="" className='text-white uppercase'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='absolute right-11 top-11'>
                        <HamburgerMenu handleClick={handleClick} isOpen={isOpen} />
                    </div>
                </header>
            </div>}

            {/* mobile navigation bar */}
            <header className='flex items-center px-12 py-2 z-10 w-full bg-black absolute sm:hidden'>
                <div className="flex flex-1 justify-center">
                    <a href="">
                        <img src={frisbeeLogo} alt="frisbee logo" className='h-24'/>
                    </a>
                </div>
                <HamburgerMenu handleClick={handleClick} isOpen={isOpen} />
            </header>

            {/* desktop navigation bar */}
            <header className='hidden px-12 pt-12 z-10 w-full absolute sm:block' >
                <nav className='flex justify-between items-center'>
                    <img src={frisbeeLogo} alt="frisbee logo" className='h-24' />
                    <ul className='flex gap-6'>
                        <li><a href="" className='text-white uppercase'>Home</a></li>
                        <li><a href="" className='text-white uppercase'>About Us</a></li>
                        <li><a href="" className='text-white uppercase'>Blog</a></li>
                        <li><a href="" className='text-white uppercase'>Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}