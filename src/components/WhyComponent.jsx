import React from 'react'

const WhyComponent = () => {
    return (
        <div className=' px-4 py-14 flex flex-col gap-10 lg:gap-14'>
            <h1 className='text-center font-bold text-3xl'>Why Front End Interview Handbook?</h1>
            <div className='flex flex-col gap-6 md:gap-8 justify-center items-center'>
                <div className='flex flex-col gap-6 md:flex-row'>
                    <div className='flex flex-col gap-4  md:w-60 md:px-2'>
                        <h2 className='text-xl font-semibold'>🔍 Front end interviews demystified</h2>
                        <p className='text-gray-700'>Front end interview preparation resources are scarce but no fret, we tell you what to expect and everything else you need to know!</p>
                        <a className='text-pink-600 font-bold' href="#">Learn More</a>
                    </div>
                    <div className='flex flex-col gap-4 md:w-60 md:px-2'>
                        <h2 className='text-xl font-semibold'>👩‍🎨 System design</h2>
                        <p className='text-gray-700'>What even is Front end system design?! Learn more about them and how to ace these interviews.</p>
                        <a className='text-pink-600 font-bold' href="#">Learn More</a>
                    </div>
                    <div className='flex flex-col gap-4 md:w-60 md:px-2'>
                        <h2 className='text-xl font-semibold'>👩‍💻 Coding questions</h2>
                        <p className='text-gray-700'>Coding questions are an entirely different ball game for Front End interviews. We tell you how to prepare for them (hint: not just LeetCode).</p>
                        <a className='text-pink-600 font-bold' href="#">Learn More</a>
                    </div>
                </div>
                <div className='flex flex-col gap-6 md:flex-row'>
                    <div className='flex flex-col gap-4 md:w-60 md:px-2'>
                        <h2 className='text-xl font-semibold'>💯 From zero to hero</h2>
                        <p className='text-gray-700'>Go from zero to front end interview hero with this handbook. No prior interview experience needed.</p>
                        <a className='text-pink-600 font-bold' href="#">Learn More</a>
                    </div>
                    <div className='flex flex-col gap-4 md:w-60 md:px-2'>
                        <h2 className='text-xl font-semibold'>🍼 Back to basics</h2>
                        <p className='text-gray-700'>Learn to walk before you learn to fly. While React, Vue and Angular are cool, make sure you also know your fundamentals.</p>
                        <a className='text-pink-600 font-bold' href="#">Learn More</a>
                    </div>
                    <div className='flex flex-col gap-4 md:w-60 md:px-2'>
                        <h2 className='text-xl font-semibold'>👨‍👩‍👦‍👦 Community effort</h2>
                        <p className='text-gray-700'>The best thing about Open Source is that the community vets the contents, so you can be sure the answers here have been proofread by many.</p>
                        <a className='text-pink-600 font-bold' href="#">Learn More</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhyComponent