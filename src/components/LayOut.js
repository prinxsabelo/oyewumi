import React, { useState } from 'react'
import { Helmet } from "react-helmet"
import '../assets/css/main.scss';
import AboutMe from './AboutMe';
import { Companies } from './Companies';
import ContactMe from './ContactMe';
import Footer from './Footer';
import Hero from './Hero';
import HireMe from './HireMe';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Sidebar from './Sidebar';
import Testimonial from './Testimonial';

const LayOut = () => {
    const [isOPen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOPen);
    }



    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Oyewumi Olukunle</title>
                <link rel="canonical" href="https://apinpaper.io" />

                <link rel="shortcut icon" href="./../" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            </Helmet>
            <div className='layout bg-bg text-lg'>
                <header >
                    <Navbar toggleSidebar={toggleSidebar} isOpen={isOPen} />
                    <Sidebar toggleSidebar={toggleSidebar} isOpen={isOPen} />
                </header>
                <main className='flex flex-col space-y-5'>
                    <Hero />
                    {/* <Companies /> */}
                    <AboutMe />
                    <Testimonial />
                    <Portfolio />
                    <HireMe />
                    <ContactMe />
                    <Footer />
                </main>
            </div>
        </>
    )

}

export default LayOut