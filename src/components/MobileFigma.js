import React from 'react'
import m1 from '../assets/images/m1.svg'
import m2 from '../assets/images/m2.svg'
import m3 from '../assets/images/m3.svg'


import { FcLike } from 'react-icons/fc';

import { FiLock } from 'react-icons/fi';


const MobileFigma = () => {
    return (
        <div className='w-full flex flex-col items-center space-y-4'>
            <h4 data-sal="fade-in"
                data-sal-delay="100"
                data-sal-easing="ease" className='text-center tracking-wide font-bold md:mt-0 text-2xl'>
                Mobile UI/UX Design
            </h4>
            <div className='w-full md:w-11/12 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 '>
                <div data-sal="fade-in"
                    data-sal-delay="200"
                    data-sal-easing="ease"
                    className='w-full md:w-1/3 figma-card  p-4 flex flex-col space-y-2 '>
                    <div className='card-img-wrapper f1 flex  h-52 justify-center   space-x-2 rounded-xl '>
                        <img src={m1} alt="" className="w-full rounded-xl object-cover" />

                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold'>
                            Figma
                        </p>
                        <span className='flex space-x-2 items-center'>
                            <FcLike className='w-6 h-6' />
                            <span>500</span>
                        </span>
                    </div>
                    <div className='text-sm flex justify-between tracking-wider items-center'>
                        <p className='w-9/12'> Mobile chatting app for
                            scheduling message.</p>
                        <FiLock className='w-6 h-6' />
                    </div>
                </div>
                <div data-sal="fade-in"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    className='w-full md:w-1/3 figma-card  p-4 flex flex-col space-y-2 '>
                    <div className='card-img-wrapper f1   h-52 flex justify-center  space-x-2 rounded-xl '>
                        <img src={m2} alt="" className="w-full rounded-xl object-cover" />

                    </div>
                    <div className='flex justify-between'>
                        <p className='font-semibold'>
                            Figma
                        </p>
                        <span className='flex space-x-2 items-center'>
                            <FcLike className='w-6 h-6' />
                            <span>400</span>
                        </span>
                    </div>
                    <div className='text-sm flex justify-between tracking-wider items-center'>
                        <p className='w-9/12'> Mobile fintech app for
                            exchanging currency.</p>
                        <FiLock className='w-6 h-6' />
                    </div>
                </div>
                <div data-sal="fade-in"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    className='w-full md:w-1/3 figma-card  p-4 flex flex-col space-y-2 '>
                    <div className='card-img-wrapper h-52 f1 flex justify-center space-x-2 rounded-xl '>
                        <img src={m3} alt="" className="w-full  rounded-xl object-cover" />

                    </div>
                    <div className='flex justify-between'>
                        <p className='font-semibold'>
                            Figma
                        </p>
                        <span className='flex space-x-2 items-center '>
                            <FcLike className='w-6 h-6' />
                            <span>800</span>
                        </span>
                    </div>
                    <div className='text-sm flex justify-between tracking-wider items-center'>
                        <p className='w-9/12'> Mobile dating app where you
                            meet your love ones.</p>
                        <FiLock className='w-6 h-6' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileFigma