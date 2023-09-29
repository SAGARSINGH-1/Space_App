import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='mt-[30px] mx-[50px] flex flex-row justify-between  items-center h-[12vh]'>
            <Link to={''}>
                <img className='w-[35px] mt-[15px]' src="/src/imgAssests/shared/logo.svg" alt="" />
            </Link>
            <div className='w-[60%] h-[100%] flex justify-center items-center backdrop-blur-md bg-opacity-5'>
                <ul className='flex flex-row gap-10'>
                    <li className='cursor-pointer relative'>
                        <NavLink to={''} className={({isActive})=>`${isActive? "pb-3 border-b-2 border-transparent border-white":"border-none"}`}>
                       01 HOME
                       </NavLink> 
                    </li>
                    <li className='cursor-pointer relative'>
                    <NavLink to={'/destination/moon'} className={({isActive})=>`${isActive? "pb-3 border-b-2 border-transparent border-white":"border-none"}`}>
                       02 DESTINATION
                       </NavLink>
                    </li>
                    <li className='cursor-pointer relative'>
                    <NavLink to={'/crew'} className={({isActive})=>`${isActive? "pb-3 border-b-2 border-transparent border-white":"border-none"}`}>
                       03 CREW
                       </NavLink>
                    </li>
                    <li className='cursor-pointer relative'>
                    <NavLink to={'/technology'} className={({isActive})=>`${isActive? "pb-3 border-b-2 border-transparent border-white":"border-none"}`}>
                       04 TECHNOLOGY
                       </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
