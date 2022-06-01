import React from 'react'
import w1 from '../assets/images/w1.png'

import w2 from '../assets/images/w2.png'
import w3 from '../assets/images/w3.png'

import { FcLike } from 'react-icons/fc';

import { FiLock } from 'react-icons/fi';



const WebFigma = () => {
    return (
        <div className='w-full flex flex-col items-center space-y-4'>
            <h4 data-sal="fade-in"
                data-sal-delay="100"
                data-sal-easing="ease"
                className='text-center tracking-wide font-bold md:mt-0 text-2xl'>
                Web UI/UX Design
            </h4>
            <div className='w-full md:w-11/12 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 '>
                <div data-sal="fade-in"
                    data-sal-delay="200"
                    data-sal-easing="ease"
                    className='w-full md:w-1/3 figma-card  p-4 flex flex-col space-y-2 '>
                    <div className='card-img-wrapper f1 flex justify-center   space-x-2 rounded-xl '>
                        <img src={w1} alt="" className="w-full object-contain" />
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold'>
                            Figma
                        </p>
                        <span className='flex space-x-2 items-center'>
                            <FcLike className='w-6 h-6' />
                            <span>200</span>
                        </span>
                    </div>
                    <div className='text-sm flex justify-between tracking-wider items-center'>
                        <p className='w-9/12'> Picca is a platform where you  create & download an event.</p>
                        <FiLock className='w-6 h-6' />
                    </div>
                </div>
                <div data-sal="fade-in"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    className='w-full md:w-1/3 figma-card  p-4 flex flex-col space-y-2 '>
                    <div className='card-img-wrapper f1 flex justify-center   space-x-2 rounded-xl '>
                        <img src={w2} alt="" className="w-full object-contain" />

                    </div>
                    <div className='flex justify-between'>
                        <p className='font-semibold'>
                            Figma
                        </p>
                        <span className='flex space-x-2 items-center'>
                            <FcLike className='w-6 h-6' />
                            <span>600</span>
                        </span>
                    </div>
                    <div className='text-sm flex justify-between tracking-wider items-center'>
                        <p className='w-9/12'> WritersGig is a unique marketplace for freelance writers. www.writersgig.com  </p>
                        {/* <FiLock className='w-6 h-6' /> */}
                    </div>
                </div>
                <div data-sal="fade-in"
                    data-sal-delay="400"
                    data-sal-easing="ease"
                    className='w-full md:w-1/3 figma-card  p-4 flex flex-col space-y-2 '>
                    <div className='card-img-wrapper f1 flex justify-center space-x-2 rounded-xl '>
                        <img src={w3} alt="" className="w-full  object-contain" />
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
                        <p className='w-9/12'> Mobile dating app where you
                            meet your love ones</p>
                        {/* <FiLock className='w-6 h-6' /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebFigma