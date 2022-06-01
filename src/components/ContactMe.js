import React from 'react'

const ContactMe = () => {
    return (
        <>
            <div className='h-12 md:h-16' id='contact-me'></div>

            <div data-sal="fade-in"
                data-sal-easing="ease"
                className='flex flex-col mb-16  px-3 md:px-16 w-full'>
                <form className='w-full bg-contact rounded py-2 md:p-4 flex flex-wrap justify-between md:px-4 md:py-8'>
                    <div className="w-full md:w-1/2 px-3 mb-4 ">
                        <label className="block  tracking-widest text-gray-100 text-sm font-bold mb-2"
                            htmlFor="name" >
                            Name
                        </label>

                        <input className="contact-input appearance-none block w-full  text-gray-50
                        border-green-50 outline-none
                        rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
                        focus:text-gray-800
                        hover:outline-white
                        focus:bg-white focus:border-green-500" id="name"
                            type="text" placeholder="Name" />
                    </div>

                    <div className="w-full md:w-1/2 px-3 mb-4 ">
                        <label className="block  tracking-widest text-gray-100 text-sm font-bold mb-2"
                            htmlFor="name" >
                            Phone
                        </label>

                        <input className="contact-input appearance-none block w-full  text-gray-50
                        border-green-50 outline-none
                        hover:outline-white
                        focus:text-gray-800
                        rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                        focus:bg-white focus:border-green-500" id="phone"
                            type="tel" placeholder="Phone" />
                    </div>

                    <div className="w-full md:w-1/2 px-3 mb-4 ">
                        <label className="block  tracking-widest text-gray-100 text-sm font-bold mb-2"
                            htmlFor="email" >
                            Email
                        </label>

                        <input className="contact-input appearance-none block w-full  text-gray-50
                        border-green-50 outline-none
                        hover:outline-white
                        focus:text-gray-800
                        rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                        focus:bg-white focus:border-green-500" id="email"
                            type="email" placeholder="Email" />
                    </div>

                    <div className="w-full md:w-1/2 px-3 mb-4 ">
                        <label className="block  tracking-widest text-gray-100 text-sm font-bold mb-2"
                            htmlFor="purpose" >
                            Purpose
                        </label>

                        <input className="contact-input appearance-none block w-full  text-gray-50
                        border-green-50 outline-none
                        hover:outline-white
                        focus:text-gray-800
                        rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                        focus:bg-white focus:border-green-500" id="purpose"
                            type="text" placeholder="Purpose" />
                    </div>

                    <div className="w-full px-3 mb-4 ">
                        <label className="block  tracking-widest text-gray-100 text-sm font-bold mb-2"
                            htmlFor="purpose" >
                            Message
                        </label>

                        <textarea className="contact-input appearance-none block w-full  text-gray-50
                        border-green-50 outline-none
                        hover:outline-white
                        focus:text-gray-800
                        rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                        focus:bg-white focus:border-green-500" id="purpose"
                            type="text" placeholder="Purpose" />
                    </div>

                    <div className="w-full px-3 mb-2 ">

                        <button type="submit" className="bg-brand inline-flex items-center 
                        font-medium focus:outline-none cursor-pointer transition
                        flex items-center p-4 rounded hover:bg-green-600 ">
                            <span className="text-xl font-medium">Send Message</span>

                        </button>
                    </div>
                </form>
            </div>
            <div className='md:h-12'>

            </div>
        </>

    )
}

export default ContactMe