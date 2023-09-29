import { Link, NavLink } from 'react-router-dom'



export default function DestinationTitan() {
    return (
        <div className='flex flex-row items-center justify-around'>
            <div className='pl-[135px] mt-[20px] w-[45%]'>
                <h1 className='text-white text-28 font-barlow-condensed font-normal uppercase tracking-wider leading-normal break-words text-lg mb-[30px]'><span className='text-gray-600 '>02</span> Pick your destination</h1>
                <img className='h-[378px] w-[378px]' src="/src/imgAssests/destination/image-titan.png" alt="" />
            </div>

            {/*  */}
            
            <div className='w-[45%] flex justify-center items-start flex-col'>
                <ul className='w-[50%] flex flex-row justify-around items-center cursor-pointer '>
                    <NavLink to={'/destination/moon'}  className={({isActive})=>`${isActive? "pb-2 border-b-2 border-transparent border-white":"border-none"}`}>MOON
                    </NavLink>
                    <NavLink to={'/destination/mars'}  className={({isActive})=>`${isActive? "pb-2 border-b-2 border-transparent border-white":"border-none"}`}>MARS
                    </NavLink>
                    <NavLink to={'/destination/europa'}  className={({isActive})=>`${isActive? "pb-2 border-b-2 border-transparent border-white":"border-none"}`}>EUROPA
                    </NavLink>
                    <NavLink to={'/destination/titan'}  className={({isActive})=>`${isActive? "pb-2 border-b-2 border-transparent border-white":"border-none"}`}>TITAN
                    </NavLink>
                </ul>
                <h1 className='w-[100%] text-left text-white text-[95px] font-Bellefair font-normal break-words'>TITAN</h1>
                <p className='text-[#D0D6F9] w-[80%] text-base font-barlow font-normal leading-8 break-words'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam impedit esse eveniet hic recusandae labore, nisi unde. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                

                <div className='mt-2 flex flex-row justify-between w-[50%]'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-blue-300 text-base font-barlow-condensed font-normal uppercase tracking-wide leading-normal break-words'>AVG. DISTANCE</p>
                        <h1 className='text-white text-28 font-bellefair font-normal uppercase break-words'>1.6 BIL. km</h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-blue-300 text-base font-barlow-condensed font-normal uppercase tracking-wide leading-normal break-words'>Est. travel time</p>
                        <h1 className='text-white text-28 font-bellefair font-normal uppercase break-words'>7 years</h1>
                    </div>
                </div>
            </div>
        </div>  
    )
}