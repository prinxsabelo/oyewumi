import React from 'react'
import PageLinks from '../constants/PageLinks';
import { FaAlignRight, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
const Navbar = ({ toggleSidebar, isOpen }) => {
    return (
        <nav className='navbar bg-bg'>
            <div className="nav-center py-1 pb-3 flex items-center" >
                <div className="nav-header flex items-center py-4  px-4 md:px-16">

                    <span className=' tracking-widest flex items-center 
                            text-xl space-x-2 font-semibold '>
                        <img src={logo}  alt="" className="w-10 h-10" />

                    </span>


                    <button type="button" className="toggle-btn" onClick={toggleSidebar}>
                        {isOpen ?
                            <FaTimes></FaTimes> :
                            <FaAlignRight ></FaAlignRight>

                        }

                    </button>
                </div>
                <PageLinks styleClass="nav-links text-xl" />
            </div>
        </nav>
    )
}

export default Navbar