import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <>
            <div style={{ backgroundColor: '#303947' }} className=' lg:flex lg:mx-auto lg:h-12 hidden'>
                <div style={{ width: '80vw' }} className='flex mx-auto justify-between '>
                    <div>
                        <h1 className='text-white mt-1 text-2xl font-semibold'>Firstbench</h1>
                    </div>
                    <div>
                        <p className='text-gray-300 mt-3'>FirstGuru</p>
                    </div>
                    <div>
                        <p className='text-gray-300 mt-3'>TownHall</p>
                    </div>
                    <div>
                        <p className='text-gray-300 mt-3'>AI Evaluation</p>
                    </div>
                    <div>
                        <p className='text-gray-300 mt-3'>Performance</p>
                    </div>
                    <div>
                        <p className='text-gray-300 mt-3'>Mock Test</p>
                    </div>
                    <div className='text-white mt-3'>
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className='bg-gray-700 mt-1'>
                        <p className='bg-pink-200 inline-block w-6 h-6 pl-2 mt-2 m-1 rounded-sm'>P</p>
                        <p className='inline-block text-white'>Profile </p>
                    </div>

                </div>
            </div>

            <div style={{ backgroundColor: '#303947' }} className='flex lg:hidden justify-between p-6'>
                {/* Logo */}
                <div>
                    <h1 className='text-white text-2xl font-semibold'>Firstbench</h1>
                </div>

                {/* Hamburger Menu Icon */}
                <div>
                    <FontAwesomeIcon icon={faBars} className='text-white text-xl' />
                </div>
            </div>
        </>
    )
}

export default Header
