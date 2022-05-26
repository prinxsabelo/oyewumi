import React from 'react'
import rimo from '../assets/images/rimo.jpeg'
import q from '../assets/images/q.jpeg'
import c from '../assets/images/c.png'
import d from '../assets/images/d.jpeg'

export const Companies = () => {


    return (
        <div className='md:px-4 pt-16 flex flex-col space-y-6 items-center justify-center'
            data-sal="fade-in"
            data-sal-easing="ease">
            <h3 className='text-3xl px-4 md:px-0'><span className='text-brand'>Companies Have</span> worked for</h3>
            <div className='w-full flex justify-center bg-gray-100 '>
                <div className="w-full flex justify-center grayscale flex-wrap space-y-4 md:space-y-0">
                    <div className='md:px-8'>
                        <img src={rimo} alt="" className="h-20 md:w-40 object-contain" />
                    </div>
                    <div className='md:px-8'>
                        <img src={q} alt="" className="h-20 md:w-40 object-contain" />
                    </div>
                    <div className='md:px-8'>
                        <img src={c} alt="" className="h-20 md:w-40 object-contain" />
                    </div>
                    <div className='md:px-8'>
                        <img src={d} alt="" className="h-20 md:w-40 object-contain" />
                    </div>

                </div>
            </div>

        </div>
    )
}
