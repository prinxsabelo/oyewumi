import React from 'react'
import f1a from '../assets/images/f1a.png'
import f1b from '../assets/images/f1b.png'
import f1c from '../assets/images/f1c.png'

import f2a from '../assets/images/f2a.png'
import f2b from '../assets/images/f2b.png'
import f2c from '../assets/images/f2c.png'

import f3a from '../assets/images/f3a.png'
import f3b from '../assets/images/f3b.png'
import f3c from '../assets/images/f3c.png'

import { FcLike } from 'react-icons/fc';

import { FiLock } from 'react-icons/fi';


const MobileFigma = () => {
    return (
        <div className='w-full flex flex-col space-y-4'>
            <h4 className='text-center tracking-wide font-bold md:mt-0 text-2xl'>
                Mobile UI/UX Design
            </h4>
            <div className='w-full md:w-11/12 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 '>
                <div data-sal="fade-in"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    className='w-full md:w-1/3 figma-card  p-4 flex flex-col space-y-2 '>
                    <div className='card-img-wrapper f1 flex justify-center p-4  space-x-2 rounded-xl '>
                        <img src={f1a} alt="" className="w-16  h-36 object-contain" />
                        <img src={f1b} alt="" className="w-16  h-36 object-contain" />
                        <img src={f1c} alt="" className="w-16  h-36 object-contain" />
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
                    data-sal-delay="200"
                    data-sal-easing="ease"
                    className='w-full md:w-1/3 figma-card  p-4 flex flex-col space-y-2 '>
                    <div className='card-img-wrapper f1 flex justify-center p-4  space-x-2 rounded-xl '>
                        <img src={f2a} alt="" className="w-16  h-36 object-contain" />
                        <img src={f2b} alt="" className="w-16  h-36 object-contain" />
                        <img src={f2c} alt="" className="w-16  h-36 object-contain" />
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
                        <p className='w-9/12'> Mobile chatting app for
                            scheduling message.</p>
                        <FiLock className='w-6 h-6' />
                    </div>
                </div>
                <div data-sal="fade-in"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    className='w-full md:w-1/3 figma-card  p-4 flex flex-col space-y-2 '>
                    <div className='card-img-wrapper f1 flex justify-center p-4 space-x-2 rounded-xl '>
                        <img src={f3a} alt="" className="w-16 h-36  object-contain" />
                        <img src={f3b} alt="" className="w-16  h-36 object-contain" />
                        <img src={f3c} alt="" className="w-16  h-36 object-contain" />
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
                        <p className='w-9/12'> Mobile chatting app for
                            scheduling message.</p>
                        <FiLock className='w-6 h-6' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileFigma