import frisbeeLogo from '../assets/logo/frisbee.png'

export default function Navbar() {

    return (
        <> 
            <header className='px-12 pt-12 z-10 w-screen absolute' >
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