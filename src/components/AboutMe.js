import React from 'react'
import hero from "../assets/images/hero.png"
const AboutMe = () => {
    return (
        <>
            <div className='h-12 md:h-16' id='about-me'></div>
            <div data-sal="fade-in"
                data-sal-easing="ease"
                className='flex flex-col mb-12 sm:mb-24 md:flex-row items-center px-3 md:px-16 md:gap-16'>

                <div className='bg-gray-700 w-full p-2 md:p-6 rounded-3xl'>
                    <div
                        data-sal="fade-in"
                        data-sal-delay="100"
                        data-sal-easing="ease"
                        className='w-full h-80  md:w-80 md:h-80 bg-green-300 rounded-3xl pt-4 '>
                        <img src={hero} alt=""
                            className="rounded-3xl object-none object-top bg-green-300 w-full h-full" />
                    </div>
                </div>
                <div className='flex flex-col space-y-2'>
                    <h3 className='text-3xl  mt-4 md:mt-0 '
                        data-sal="fade-in"
                        data-sal-delay="200"
                        data-sal-easing="ease">
                        About Me
                    </h3>
                    <div className='flex flex-col space-y-2 tracking-wide w-full md:w-11/12 '
                        data-sal="fade-in"
                        data-sal-delay="300"
                        data-sal-easing="ease">
                        <p>
                            Hi there! 👋🏻
                        </p>
                        <p>
                            I'm Oyewumi Olukunle - I'm a professional UI/UX Designer, instructor based in Nigeria, Lagos. My passion is in creating human-centered designs that can improve our daily lives while creating a cross-cultural impact.
                        </p>
                        <p>
                            My past experience lends me the ability to communicate effectively across multiple divisions and collaborate efficiently in an agile working environment. That's why I would love to work with the next product team to design solutions that we are all proud of.
                        </p>
                        <p>
                            Let's connect!
                        </p>
                    </div>
                </div>

            </div>
        </>

    )
}

export default AboutMe