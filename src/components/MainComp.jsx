import React from 'react';
import scale from './scale.png'

function MainComp() {
    return (
        <div className='flex flex-col lg:flex-row w-[80vw] mx-auto gap-4 m-3'>
            {/* Left Section */}
            <div className='w-full lg:w-1/4 h-[65vh] lg:h-[90vh] bg-blue-50 rounded-xl p-4'>
                {/* Header Section */}
                <div className='text-center mb-4'>
                    <div className='h-24 flex justify-center items-center'>
                        {/* Placeholder for Image */}
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Result Illustration"
                            className='h-20'
                        />
                    </div>
                    <h1 className="text-2xl font-semibold text-purple-700">Your Result!</h1>
                    <p className='text-gray-600 text-sm'>All your insights & details in one place</p>
                </div>

                {/* Merged Result Card */}
                <div className='bg-white p-4 border-2 border-gray-300 rounded-lg'>
                    {/* Top Section */}
                    <div className='flex justify-between items-center mb-2'>
                        <div className='text-center'>
                            <p className='bg-violet-800 text-[10px] px-2 py-1 rounded-xl text-white inline-block '>YOU'VE PASSED</p>
                            <p className='text-2xl font-semibold text-gray-800'><strong className='text-3xl'>136</strong> <span className='text-gray-500 text-xl'>/ 240</span></p>
                        </div>
                        <div className='text-center'>
                            <p className='text-2xl font-bold text-teal-600'>76%</p>
                            <p className='text-sm text-teal-600'>ACCURACY</p>
                        </div>
                    </div>
                    {/* <div className='h-0.5 w-full bg-gray-300'></div> */}

                    {/* Middle Section */}
                    <h2 className='text-center bg-teal-600 rounded-lg text-white mb-1'>Top Scorer</h2>
                    <div className='flex items-center mb-2'>
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Top Scorer"
                            className='w-10 h-10 rounded-full mr-3'
                        />
                        <div>
                            <p className='text-gray-800 font-semibold'>Parth Akotkar</p>
                            <p className='text-teal-600 text-[12px] font-semibold'>92% ACCURACY</p>
                        </div>
                        <div className='text-center'>
                            {/* <p className='text-2xl font-semibold text-gray-800'><strong className='text-xl'>136</strong> <span className='text-gray-500 text-xl'>/ 240</span></p> */}
                            <p className='ml-3'><strong className='text-2xl'>230</strong>/240</p>
                        </div>
                    </div>
                    <div className='h-0.5 w-full bg-gray-300'></div>


                    {/* Bottom Section */}
                    <div className='text-center'>
                        <p className='text-gray-600 text-sm'>Improve your Marks</p>
                        <button className='bg-violet-700 text-white px-4 py-2 w-full mt-2 rounded-lg text-sm'>Practice more</button>
                    </div>
                </div>

                {/* Revisit Paper Section */}
                <div className='bg-white p-4 mt-4 border-2 border-gray-300 rounded-lg'>
                    <h2 className='text-gray-800 font-semibold text-sm mb-2'>Revisit Paper</h2>
                    <p className='text-gray-600 text-sm mb-4'>Challenge your friends by simply sharing a link to this test</p>
                    <button className='bg-violet-700 text-white px-4 py-2 rounded-lg text-sm w-full'>Visit</button>
                    <p className='text-gray-400 text-xs mt-2 text-center'>
                        Instructions for how to upload your handwritten material is given
                    </p>
                </div>
            </div>

            {/* Right Section (Placeholder for further content) */}
            <div className='w-full lg:flex-1 mt-20 sm:mt-0 h-[60vh] lg:h-[90vh]  rounded-xl flex-col'>
                <div className='flex gap-4 justify-between h-1/3'>
                    <div className='bg-white border-2 border-gray-300 w-1/3 h-full p-2 rounded-lg'>
                        <p className='text-md text-gray-500'>company Accuracy</p>
                    </div>
                    <div className='bg-white border-2 border-gray-300 w-1/3 h-full p-2 rounded-lg'>
                        <p className='text-md text-gray-500'>company Accuracy</p>
                    </div>
                    <div className='bg-white border-2 border-gray-300 w-1/3 h-full p-2 rounded-lg'>
                        <p className='text-md text-gray-500'>company Accuracy</p>
                    </div>
                </div>

                <div className=' mt-2 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 h-full md:h-full lg:h-1/4'>
                    <div className=' bg-white border-2 border-gray-300 rounded-lg '>
                        <h2 className='text-gray-500 p-1 text-md'>Improvements</h2>
                        <p className='p-1 text-sm font-semibold '>Subject Understanding </p>
                        <p className='bg-[#abede9] inline-block  text-[10px]  lg:text-[12px] text-gray-black mx-1 rounded-lg p-0.5'>Geography</p>
                        <p className='bg-yellow-500 inline-block text-[10px]  lg:text-[12px] text-gray-black mx-1 rounded-lg p-0.5'>Politics</p>
                        <p className='bg-[#abede9] inline-block text-[10px]  lg:text-[12px] text-gray-black mx-1 rounded-lg p-0.5'>Current Affairs</p>
                        <p className='bg-red-600 inline-block text-[10px]  lg:text-[12px] text-gray-black mx-1 rounded-lg p-0.5'>General Studies</p>
                        <p className='bg-[#abede9] inline-block text-[10px]  lg:text-[12px] text-gray-black mx-1 rounded-lg p-0.5'>Mathematics</p>
                        <p className='bg-gray-300 inline-block text-[10px]  lg:text-[12px] text-gray-black mx-1 rounded-lg p-0.5'>Social Studies</p>
                        <p className='bg-red-600 inline-block text-[10px]  lg:text-[12px] text-gray-black mx-1 rounded-lg p-0.5'>English Literatre</p>
                        <p className='bg-yellow-400 inline-block text-[10px]  lg:text-[12px] text-gray-black mx-1 rounded-lg p-0.5'>Indian History</p>
                        <p className='bg-[#abede9] inline-block  text-[10px] tlg:ext-[12px] text-gray-black mx-1 rounded-lg p-0.5'>Economics</p>
                    </div>
                    <div className=' bg-white border-2 border-gray-300 rounded-lg '>
                        <h2 className='text-gray-500 p-1 text-md'>Response Time</h2>
                        <div className='text-sm text-gray-500 bg-blue-50 px-2 py-1 inline-block rounded mb-4'>
                            Std Time - 2min
                        </div>

                        {/* Response Time Info */}
                        <div className='mx-1 mb-1 flex items-center justify-between bg-purple-50 border-dashed border-2 border-purple-400 rounded p-1 '>
                            <p className='text-3xl font-bold text-green-600 inline-block'>60%</p><span className='text-gray-500'>Ans took</span>
                            <div className='flex items-center'>
                                <span className='text-red-600 text-3xl font-bold mr-1'>↑</span>
                                <span className='text-gray-700 text-sm'>2min</span>
                            </div>
                        </div>

                        {/* Status Message */}
                        <hr className='border-gray-300' />
                        <p className='text-center text-gray-700 font-bold'>You are <span className='underline text-red-600'>slow </span>!</p>
                    </div>
                    <div className=' bg-white border-2 border-gray-300 rounded-lg '>
                        <h2 className='text-gray-500 p-1 text-md'>Approach Data</h2>
                        <div className='h-7 mx-1 mb-1  border-2 border-indigo-400'>
                            <p className='text-sm bg-indigo-300 inline-block px-1 mx-1 font-semibold'>25%</p>
                            <p className='inline-block text-[10px] xl:text-sm'> Based On</p><span className='text-blue-800 font-bold text-[12px]'> Facts</span>
                        </div>
                        <div className='h-7 mx-1 mb-1 border-2 border-indigo-400'>
                            <p className='text-sm bg-indigo-300 inline-block px-1 mx-1 font-semibold'>32%</p>
                            <p className='inline-block text-[10px] xl:text-sm'> Based On</p><span className='text-blue-800 font-bold text-[12px]'> Analysis</span>
                        </div>
                        <div className='h-7 mx-1 mb-1 border-2 border-indigo-400'>
                            <p className='text-sm bg-indigo-300 inline-block px-1 mx-1 font-semibold'>19%</p>
                            <p className='inline-block text-[10px] xl:text-sm'> Based On</p><span className='text-blue-800 font-bold text-[12px]'> Elimination</span>
                        </div>
                        <div className='h-7 mx-1 border-2 border-indigo-400'>
                            <p className='text-sm bg-indigo-300 inline-block px-1 mx-1 font-semibold'>24%</p>
                            <p className='inline-block text-[10px] xl:text-sm'> Based On</p><span className='text-blue-800 font-bold text-[12px]'> Guess</span>
                        </div>
                    </div>
                    <div className=' bg-white border-2 border-gray-300 rounded-lg '>
                        <h2 className='text-gray-500 p-1 text-md'>Suggestions</h2>
                        <div className='grid grid-cols-3 gap-2'>
                            {/* Easy Section */}
                            <div className='text-center rounded-lg p-1'>
                                <p className='bg-violet-600 text-white font-bold text-[10px] rounded px-2 py-1 mb-1 inline-block'>
                                    Q. 1-12
                                </p>
                                <p className='text-gray-700 font-bold text-sm border-2 border-dashed border-purple-400 py-3 bg-indigo-50 mb-2'>40sec</p>
                                <p className='text-teal-500 font-semibold text-sm'>Easy</p>
                            </div>

                            {/* Medium Section */}
                            <div className='text-center rounded-lg p-1'>
                                <p className='bg-violet-600 text-white font-bold text-[10px] rounded px-2 py-1 mb-1 inline-block'>
                                    Q. 12-32
                                </p>
                                <p className='text-gray-700 font-bold text-sm border-2 border-dashed border-purple-400 py-3 bg-indigo-50 mb-2'>1.5min</p>
                                <p className='text-yellow-500 font-semibold text-sm'>Medium</p>
                            </div>

                            {/* Hard Section */}
                            <div className='text-center rounded-lg p-1'>
                                <p className='bg-violet-600 text-white font-bold text-[10px] rounded px-2 py-1 mb-1 inline-block '>
                                    Q. 32-40
                                </p>
                                <p className='text-gray-700 font-bold text-sm border-2 border-dashed border-purple-400 py-3 bg-indigo-50 mb-2'>3min</p>
                                <p className='text-red-500 font-semibold text-sm'>Hard</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-1 mt-20 sm:mt-0 md:grid-cols-2 gap-4 h-[36vh] w-full my-2'>
                    <div className='bg-white border-2 w-full border-gray-300 rounded-lg p-4'>
                        {/* Title */}
                        <h2 className='text-gray-500 font-semibold text-md mb-4 flex items-center'>
                            {/* <span className='material-icons text-purple-500 mr-1'>analytics</span> */}
                            Compare Accuracy
                        </h2>

                        {/* Time Slots */}
                        <div className='flex gap-5 items-center mb-4'>
                            <div className='text-center'>
                                <p className='bg-gray-200 text-gray-600 rounded-lg text-xs px-3 py-1'>10MIN</p>
                            </div>
                            <div className='text-center'>
                                <p className='bg-teal-500 text-white rounded-lg text-xs px-3 py-1'>15MIN</p>
                            </div>
                            <div className='text-center'>
                                <p className='bg-gray-200 text-gray-600 rounded-lg text-xs px-3 py-1'>30MIN</p>
                            </div>
                            <div className='text-center'>
                                <p className='bg-gray-200 text-gray-600 rounded-lg text-xs px-3 py-1'>45MIN</p>
                            </div>
                        </div>


                        {/* Chart */}
                        <div className='relative'>
                            <div className='absolute -left-5 top-16 flex items-center' style={{ transform: 'rotate(-90deg)' }}>
                                <p className='text-sm text-gray-500 '>Accuracy</p>
                            </div>

                            {/* Y-axis Labels */}
                            <div className='absolute left-6 top-0 h-full flex flex-col justify-between items-center'>
                                <p className='text-[13px] text-gray-600 '>100%</p>
                                <p className='text-[13px] text-gray-600 '>75%</p>
                                <p className='text-[13px] text-gray-600 '>50%</p>
                                <p className='text-[13px] text-gray-600'>25%</p>
                                <p className='text-[13px] text-gray-600 '>0%</p>
                            </div>

                            {/* Bar Chart */}
                            {/* Bar Chart */}
                            <div className='ml-12 grid grid-cols-7 gap-4 items-end h-40'>
                                <div className='flex flex-col items-center'>
                                    <div className='bg-purple-400 w-3 h-32 rounded-t-md'></div>
                                    <p className='text-sm text-gray-600 '>1</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className='bg-purple-400 w-3 h-16 rounded-t-md'></div>
                                    <p className='text-sm text-gray-600 '>2</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className='bg-purple-400 w-3 h-24 rounded-t-md'></div>
                                    <p className='text-sm text-gray-600 '>3</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className='bg-purple-400 w-3 h-28 rounded-t-md'></div>
                                    <p className='text-sm text-gray-600 '>4</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className='bg-purple-400 w-3 h-20 rounded-t-md'></div>
                                    <p className='text-sm text-gray-600 '>5</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className='bg-purple-400 w-3 h-24 rounded-t-md'></div>
                                    <p className='text-sm text-gray-600 '>6</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className='bg-purple-400 w-3 h-32 rounded-t-md'></div>
                                    <p className='text-sm text-gray-600'>7</p>
                                </div>
                            </div>

                        </div>

                        {/* X-axis Label */}
                        <p className='text-center text-gray-500 text-sm'>Slots</p>
                    </div>

                    <div className=' w-full h-full bg-white border-2 border-gray-300 rounded-lg relative'>
                        <h2 className='text-gray-500 p-1 text-md'>Time Taken</h2>

                        {/* Scale image container */}
                        <div className='relative'>
                            <img className='h-20 mx-auto' src={scale} alt="Scale" />

                            {/* Colorful lines on the scale */}
                            <div className='absolute top-0 left-4 h-16 w-[50%]'>
                                <div className='absolute top-10 left-0 h-2 bg-red-500 ' style={{ width: '100%' }}></div>
                                <div className='absolute top-14 left-0 h-2 bg-green-500 ' style={{ width: '50%' }}></div>
                                <div className='absolute top-0  left-[7vw] h-20 bg-violet-500 opacity-70 ' style={{ width: '4%' }}></div>
                            </div>
                        </div>

                        <p className='text-[13px] px-3 py-2 text-gray-500'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        </p>
                        <img className='h-20 mx-auto' src={scale} alt="Scale" />
                    </div>
                </div>


            </div>
        </div>
    );
}

export default MainComp;
