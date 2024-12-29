import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul className='flex flex-1 bg-gray-200 py-3 w-full font-bold justify-evenly rounded-sm'>
                <li>Logo</li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to='/career'>Career</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Us</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </nav>
        // <div className='bg-white justify-center'>
        //     <ul className='flex justify-evenly text-center w-full py-3 font-bold'>
        //         <li className='hover:text-gray-500'>Logo</li>
        //         <li className='hover:text-gray-500 cursor-pointer '><a href='/home'>Home</a></li>
        //         <li className='hover:text-gray-500 cursor-pointer'>About Us</li>
        //         <li className='hover:text-gray-500 cursor-pointer'>Career</li>
        //         <li className='hover:text-gray-500 cursor-pointer'>Contact Us</li>
        //         <li className='hover:text-gray-500 cursor-pointer'>Login/Signup</li>
        //     </ul>
        // </div>
    )
}

export default Navbar