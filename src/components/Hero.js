import React from 'react'
import { BsDownload } from 'react-icons/bs';
import heroIm from '../assets/images/hero-im.png'
const Hero = () => {
    return (
        <div className='bg-bg hero relative pt-2 top-8 md:top-16  md:pt-4 flex flex-col
                flex-col-reverse  md:flex-row px-4 md:px-28' >
            <div className='w-full md:w-2/5 flex flex-col space-y-4 md:space-y-8'>
                <h1 data-sal="fade-in"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    className='text-4xl tracking-wider md:text-6xl w-full md:w-10/12 leading-loose font-bold uppercase' >
                    Hello, I'm <span className='text-brand'>Oyewumi</span> <span className=''>Olukunle </span>
                </h1>
                <div className='flex space-x-4'>
                    <button
                        data-sal="fade-in"
                        data-sal-delay="200"
                        data-sal-easing="ease"
                        className='bg-btn btn w-40 py-2 rounded hover:bg-brand flex
                        space-x-1 items-center justify-center'>
                        <span> Download CV</span>
                        <i>
                            <BsDownload />
                        </i>
                    </button>
                    <button
                        data-sal="fade-in"
                        data-sal-delay="300"
                        data-sal-easing="ease"

                        className='px-4 btn w-40 py-2 border-2 rounded hover:border-brand'>Hire me</button>
                </div>
            </div>
            <div
                data-sal="fade-in"
                data-sal-delay="400"
                data-sal-easing="ease"
                className='w-10/12 md:w-3/5 flex justify-center pb-5  hero-bg'>
                <div className='w-full md:w-1/2'>
                    {/* <div className='hero-wrapper w-full border-2 p-4 rounded-full'> */}
                    <img src={heroIm} alt="" className="w-full" />
                    {/* </div> */}

                </div>

            </div>
        </div>
    )
}

export default Hero