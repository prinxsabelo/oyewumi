import React from 'react'

const HireMe = () => {
    return (
        <div data-sal="fade-in"
            data-sal-delay="100"
            data-sal-easing="ease" className='flex flex-col space-y-4'>
            <div className='flex flex-col mb-2 items-center px-3 md:px-28 space-y-8 md:gap-4 w-full'>
                <div className='flex flex-col space-y-2'>
                    <h3 className='w-full flex justify-center text-3xl'>Hire Me</h3>
                    <p className='tracking-widder'>I am available for</p>
                </div>


                <div className='flex flex-col space-y-3 w-full'>
                    <div className='flex w-full items-center space-x-4 md:space-x-12'>
                        <div className="w-3/5 md:w-10/12 bg-gray-200 h-3 rounded-xl">
                            <div className="bg-green-600 h-3 rounded-xl" style={{ width: '96%' }}></div>
                        </div>
                        <div className=''>
                            Remote 96%
                        </div>
                    </div>

                    <div className='flex w-full items-center  space-x-4 md:space-x-12'>
                        <div className="w-3/5 md:w-10/12 bg-gray-200 h-3 rounded-xl">
                            <div className="bg-green-600 h-3 rounded-xl" style={{ width: '92%' }}></div>
                        </div>
                        <div className=''>
                            Contract 92%
                        </div>
                    </div>

                    <div className='flex w-full items-center  space-x-4 md:space-x-12'>
                        <div className="w-3/5 md:w-10/12 bg-gray-200 h-3 rounded-xl">
                            <div className="bg-green-600 h-3 rounded-xl" style={{ width: '92%' }}></div>
                        </div>
                        <div className=''>
                            Permanent 92%
                        </div>
                    </div>


                    <div className='flex w-full items-center  space-x-4 md:space-x-12'>
                        <div className="w-3/5 md:w-10/12 bg-gray-200 h-3 rounded-xl">
                            <div className="bg-green-600 h-3 rounded-xl" style={{ width: '75%' }}></div>
                        </div>
                        <div className=''>
                            Hybrid 75%
                        </div>
                    </div>

                </div>



            </div>
            <div className='flex flex-col md:flex-row px-4 md:px-28 space-y-2 md:space-y-0 md:space-x-8'>
                <div>Phone Number: (+234) 8102475422</div>
                <div>Email: oyewumi.olukunle@gmail.com</div>
            </div>
        </div>

    )
}

export default HireMe