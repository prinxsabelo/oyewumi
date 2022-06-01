import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className='flex flex-col md:flex-row space-y-4 md:space-y-0
                text-center md:text-left  w-full items-center justify-between 
                px-4 md:px-16 py-6'>
            <p>
                <img src={logo} className="h-10" alt="" />
            </p>
            <div className='flex space-x-4'>
                <i className=' p-2 rounded-full'>
                    <FaLinkedin className='w-4 h-4' />
                </i>
                <i className=' p-2 rounded-full'>
                    <FaFacebookF className='w-4 h-4' />
                </i>
                <i className=' p-2 rounded-full'>
                    <FaTwitter className='w-4 h-4' />
                </i>
                <i className=' p-2 rounded-full'>
                    <FaInstagram className='w-4 h-4' />
                </i>
            </div>
            <p className='text-sm tracking-wider'>
                © Oyetech {new Date().getFullYear()}. All Rights Reserved. All Rights Reserved
            </p>
        </footer>
    )
}

export default Footer