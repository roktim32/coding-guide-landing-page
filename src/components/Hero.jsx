import { AiOutlineGithub } from 'react-icons/ai'
import { BiRightArrowAlt } from 'react-icons/bi'
import React from 'react'

const Hero = () => {
    return (
        <div className='px-14 py-10 flex flex-col gap-6 justify-between'>
            <div className='flex justify-center'>
                <img className='max-w-[300px]' src="./assets/js.svg" alt="" />
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-bold text-5xl text-gray-700 text-center'>Hex Coding Guide</h1>
                <p className='text-2xl font-light lg:px-60  text-gray-600 text-center'>Front end interview preparation materials for busy engineers - trivias, coding, algorithms, front end system design and more!</p>
            </div>
            <div className='flex flex-col gap-5 justify-center items-center '>
                <button className='bg-pink-600 hover:bg-pink-700 px-10 text-lg py-2 rounded-lg text-white flex justify-between items-center gap-3'>Start reading<BiRightArrowAlt className='text-2xl' /></button>
                <p className='text-gray-500 font-light'>It's Completely free!</p>
                <div className='flex gap-1 '>
                    <button className='bg-gray-300 px-2 py-1 rounded-md flex justify-between items-center gap-2'><AiOutlineGithub />Stars</button>
                    <button className='bg-gray-300 px-4 py-1 rounded-md'>38,195</button>
                </div>
            </div>
        </div>
    )
}

export default Hero