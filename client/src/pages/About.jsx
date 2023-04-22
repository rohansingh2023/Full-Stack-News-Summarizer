import React from 'react'

const About = () => {
    return (
        <div>
            {/* Stay informed in 60 words. */}
            <div className='flex flex-col gap-5 m-10'>
                <h1 className='text-5xl text-cyan-600 font-BraahOne'>Our Services</h1>
                <h2 className='text-3xl text-gray-600 font-Rampart'>We summarize long and boring news articles for your</h2>
                <h2 className='text-3xl text-gray-600 font-Rampart'>You can decide the length, </h2>
                <h2 className='text-3xl text-gray-600 font-Rampart'>We give you the news summary !! </h2>
            </div>
            <div className='m-10 font-Greatvibes'>
                Aur kuch nahi karte hum 
            </div>
        </div>
    )
}

export default About