import React, { useState } from 'react'
import img from '../assets/img2.png'

const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='h-screen bg-gradient-to-b from-black via-indigo-900 to-blue-800 flex'  >
            {/* LEFT  */}
            <div className="flex-1 bg-cover bg-center p-10">
                <button onClick={toggleMenu} className='bg-cyan-300 flex justify-center items-center flex-1 rounded-md hover:bg-cyan-100 align-middle p-5'>What you will experience</button>
                {isOpen && (
                    <div
                        className="bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg w-20"

                    >
                        <div className="py-1">
                            <a
                                href="login"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                            >
                                Profile
                            </a>
                            <a
                                href="career"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                            >
                                Careers
                            </a>
                        </div>
                    </div>
                )}

                <p className='font-medium text-white p-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa labore corrupti dicta dolor placeat vel asperiores ab facere recusandae in ipsam, deleniti consequuntur nam inventore ad totam natus vitae!</p>
                <p className='font-medium text-white p-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa labore corrupti dicta dolor placeat vel asperiores ab facere recusandae in ipsam, deleniti consequuntur nam inventore ad totam natus vitae!</p>
                <p className='font-medium text-white p-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa labore corrupti dicta dolor placeat vel asperiores ab facere recusandae in ipsam, deleniti consequuntur nam inventore ad totam natus vitae!</p>

            </div>

            {/* RIGHT */}
            <div className="flex-1 bg-cover bg-center h-screen flex flex-col p-10">
                <div className='h-1/2 flex items-center justify-center flex-col my-10'>
                    <img src={img} alt="Hero" className="h-4/5 max-w-full max-h-full w-80 my-10" />
                </div>

                <div className=' h-1/2 flex-1 bg-cover bg-center'>
                    <p className='justify-center  align-middle items-center flex font-bold text-3xl text-gray-300 my-10'>"Empowering Your Finances, Securing Your Future."</p>
                </div>
            </div>
        </div >
    )
}

export default Hero