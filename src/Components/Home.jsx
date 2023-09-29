import { Link, NavLink } from 'react-router-dom'



export default function Home() {
    return (
        <div className='relative flex flex-row w-[100%] justify-between h-[78vh]'>
            <div className='pl-[165px] mt-6 w-[485px] flex justify-center items-start flex-col h-[100%]'>
                <h1 className="text-[#D0D6F9] p-[-40px] w-[110%] text-md mb-[-15px] font-BarlowCondensed tracking-[4.72px] text-left ml-[12px]">
                    SO, YOU WANT TO TRAVEL
                </h1>
                <h1 className='w-[100%] text-center text-white text-[110px] font-Bellefair font-normal break-words'>SPACE</h1>
                <p className='text-[#D0D6F9] w-[130%] text-base font-barlow font-normal leading-8 break-words'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam impedit esse eveniet hic recusandae labore, nisi unde. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
            </div>
            <div className='relative h-[100%] w-[50%] flex justify-center items-end pb-[40px] pr-[180px] '>
                <NavLink to={'/destination/moon'} className='cursor-pointer w-[200px] h-[200px] rounded-full flex items-center justify-center text-center text-black bg-white hover:outline outline-gray-800 outline-[20px] transition-all ease-linear delay-75 duration-400'>
                    <p className='text-2xl'>Explore</p>
                </NavLink>
            </div>
        </div>
    )
}