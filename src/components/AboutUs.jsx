import React from 'react'

const AboutUs = () => {
    return (
        <div className='h-screen bg-gradient-to-b from-black via-indigo-900 to-blue-800 '>
            <h1 className='font-bold text-3xl text-white p-10 '> About Us</h1>
            <h2 className='font-bold text-2xl text-gray-300 py-5 px-10'>Who we are</h2>
            <p className='text-xl px-10 text-gray-500 font-medium mr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error mollitia cum excepturi optio exercitationem consequuntur beatae dolores obcaecati repellendus. Magnam officiis sint odit incidunt eius velit molestiae illum fugiat aliquam.</p>
            <h2 className='font-bold text-2xl text-gray-300 py-10 px-10'>What we do</h2>
            <p className='text-xl px-10 text-gray-500 font-medium mr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error mollitia cum excepturi optio exercitationem consequuntur beatae dolores obcaecati repellendus. Magnam officiis sint odit incidunt eius velit molestiae illum fugiat aliquam.</p>
            <h2 className='font-bold text-2xl text-gray-300 py-10 px-10'> Our History</h2>
            <p className='text-xl px-10 text-gray-500 font-medium mr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error mollitia cum excepturi optio exercitationem consequuntur beatae dolores obcaecati repellendus. Magnam officiis sint odit incidunt eius velit molestiae illum fugiat aliquam.</p>

            <div className='flex flex-1 justify-center items-center py-5'>
                <a href='/' className='hover:underline text-white p-10 hover:text-gray-500'>
                    Home
                </a>
                <a href='/login' className='hover:underline text-white p-10 hover:text-gray-500'>
                    Join Us
                </a>
                <a href='/contact' className='hover:underline text-white p-10 hover:text-gray-500'>
                    Contact Us
                </a>
            </div>
        </div>
    )
}

export default AboutUs