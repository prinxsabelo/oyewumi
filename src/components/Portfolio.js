import React from 'react'
import MobileFigma from './MobileFigma'
import WebFigma from './WebFigma'

const Portfolio = () => {
    return (
        <>
            <div className='h-12 md:h-16' id='my-portfolio'></div>

            <div
                className='flex flex-col mb-16 items-center px-3 md:px-28 space-y-8 md:gap-4 w-full'>
                <h3 data-sal="slide-in"
                    data-sal-easing="ease"
                    className='w-full text-center  text-3xl font-bold'>
                    Visit My Portfolio  <span className='text-brand'>And Give Your Feedback</span>
                </h3>

                <MobileFigma />
                <WebFigma />

                <a data-sal="fade-in"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    href="/" className='bg-btn btn px-4 py-2 rounded-xl hover:bg-brand '>Connect with me</a>
            </div>
        </>

    )
}

export default Portfolio