import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

const Practice = () => {
    return (
        <div className='flex flex-col bg-indigo-700 px-6 py-14 justify-between gap-5 items-center'>
            <div>
                <p className='text-white lg:px-48 md:px-44 font-bold text-2xl text-center'>
                    Want to practice front end questions and reference answers from experienced ex-FAANG senior engineers? Top front end interview practice platform <a className='underline' href="#">GreatFrontEnd</a> is now offering 25% off their lifetime plan! Try out their free questions today:
                </p>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row gap-3'>
                <button className='bg-gray-300 flex items-center justify-center px-4 py-2 text-xl font-bold rounded-md'>System Design Questions<BiRightArrowAlt className='text-3xl' /></button>
                <button className='bg-gray-300 flex items-center justify-center px-4 py-2 text-xl font-bold rounded-md'>Coding Question<BiRightArrowAlt className='text-3xl' /></button>
            </div>
        </div>
    )
}

export default Practice