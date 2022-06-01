import React from 'react'
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className='flex flex-col md:flex-row  space-y-4 md:space-y-0
                text-center md:text-left  w-full items-center justify-between 
                px-4 md:px-16 py-6'>
            <p>
                <img src={logo} className="h-10" alt="" />
            </p>
            <div className='flex space-x-4'>
                <a href="https://www.linkedin.com/in/oyewumi-olukunle-10b07716a"
                    target="_blank" className=' p-2 rounded-full'>
                    <FaLinkedin className='w-4 h-4' />
                </a>
                <a href="https://www.behance.net/olukunleoyewumi"
                    target="_blank" className=' p-2 rounded-full'>
                    <FaBehance className='w-4 h-4' />
                </a>

            </div>
            <p className='text-sm tracking-wider'>
                © Oyetech {new Date().getFullYear()}. All Rights Reserved. All Rights Reserved
            </p>
        </footer>
    )
}

export default Footer