import Facebook from '../assets/icons/icons8-facebook2.svg'
import Instagram from '../assets/icons/icons8-instagram1.svg'
import Email from '../assets/icons/icons8-gmail-logo.svg'

export default function Footer() {

    return (
        <div className="footer-container">
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
    )
}