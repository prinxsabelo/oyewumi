import React from 'react'
import t1 from '../assets/images/t1.png'
import t2 from '../assets/images/t2.png'
import t3 from '../assets/images/t3.png'

import rating from '../assets/images/rating.png';
const Testimonial = () => {
    return (
        <div className='w-full flex justify-center'>
            <div

                className='sm:pt-8 mb-16  md:w-11/12  flex flex-col items-center  px-4 md:px-16 justify-center space-y-4 md:space-y-4'>
                <h4 className='text-3xl md:text-4xl text-center'
                    data-sal="fade-in"
                    data-sal-easing="ease">
                    Here are Few Testimony <span className='text-brand'> about my work</span></h4>
                <p
                    data-sal="fade-in"
                    data-sal-delay="100"
                    data-sal-easing="ease" className='text-xl font-bold text-center tracking-wide'>Testimonial</p>
                <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-12 pt-8'>
                    <div className='t-card bg-gray-900 w-full md:w-1/3 space-y-2  p-6'
                        data-sal="fade-in"
                        data-sal-delay="200"
                        data-sal-easing="ease">
                        <div className='img-wrapper'>
                            <img src={t1} alt="" className='tm' />

                        </div>
                        <p className=''>
                            Courtney Henry
                        </p>
                        <div className='flex  space-x-2'>
                            <img src={rating} alt="" className="w-4 h-4" />
                            <img src={rating} alt="" className="w-4 h-4" />
                            <img src={rating} alt="" className="w-4 h-4" />
                            <img src={rating} alt="" className="w-4 h-4" />
                            <img src={rating} alt="" className="w-4 h-4" />
                        </div>
                        <p className='pt-2 text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mi nulla
                        </p>
                    </div>
                    <div className='t-card bg-gray-900 w-full md:w-1/3 space-y-2  p-6'
                        data-sal="fade-in"
                        data-sal-delay="200"
                        data-sal-easing="ease">
                        <div className='img-wrapper'>
                            <img src={t2} alt="" className='tm' />

                        </div>
                        <p className=''>
                            Courtney Henry
                        </p>
                        <div className='flex  space-x-2'>
                            <img src={rating} alt="" className="w-4 h-4" />
                            <img src={rating} alt="" className="w-4 h-4" />
                            <img src={rating} alt="" className="w-4 h-4" />
                            <img src={rating} alt="" className="w-4 h-4" />
                            <img src={rating} alt="" className="w-4 h-4" />
                        </div>
                        <p className='pt-2 text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mi nulla
                        </p>
                    </div>

                    <div className='t-card bg-gray-900 w-full md:w-1/3 space-y-2  p-6'
                        data-sal="fade-in"
                        data-sal-delay="300"
                        data-sal-easing="ease">
                        <div className='img-wrapper'>
                            <img src={t3} alt="" className='tm' />

                        </div>
                        <p className=''>
                            Courtney Henry
                        </p>
                        <div className='flex  space-x-2'>
                            <img src={rating} alt="" className="w-4 h-4" />
                            <img src={rating} alt="" className="w-4 h-4" />
                            <img src={rating} alt="" className="w-4 h-4" />
                            <img src={rating} alt="" className="w-4 h-4" />
                            <img src={rating} alt="" className="w-4 h-4" />
                        </div>
                        <p className='pt-2 text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mi nulla
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Testimonial