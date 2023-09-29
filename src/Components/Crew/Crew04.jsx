import { Link, NavLink } from 'react-router-dom'



export default function Crew04() {
    return (
        <div className='flex flex-row items-center justify-around h-[80vh]'>
            <div className='h-[100%] pl-[135px] mt-[20px] w-[60%] flex justify-center items-start flex-col'>
            <div className=''>
            <h1 className='text-white text-28 font-barlow-condensed font-normal uppercase tracking-wider leading-normal break-words text-lg mb-[30px]'><NavLink to={'/crew'} className='text-gray-600 '>03</NavLink> Meet Your Crew</h1>
                <h2 className='text-gray-400 pl-[10px] mb-[4px] text-lg font-bellefair font-normal uppercase break-words'>FLIGHT ENGINEER</h2>
                <h1 className='w-[100%] text-left text-white text-[55px] font-Bellefair font-normal break-words'>ANOUSHEH ANSARI</h1>
                <p className='text-[#D0D6F9] w-[80%] text-base font-barlow font-normal leading-8 break-words'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam impedit esse eveniet hic recusandae labore, nisi unde. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                </div>
                <div className='ml-8 mt-8 flex gap-5 h-[10%] items-center'>
                    <NavLink to={'/crew'} className='w-[15px] h-[15px] hover:bg-gray-400 cursor-pointer bg-white border-2
                     border-black rounded-full'></NavLink><NavLink to={'/crew/crew02'} className='w-[15px] h-[15px] hover:bg-gray-400 cursor-pointer bg-white border-2
                     border-black rounded-full'></NavLink><NavLink to={'/crew/crew03'} className='w-[15px] h-[15px] hover:bg-gray-400 cursor-pointer bg-white border-2
                     border-black rounded-full'></NavLink><NavLink to={'/crew/crew04'} className='w-[15px] h-[15px] hover:bg-gray-400 cursor-pointer bg-white border-2
                     border-black rounded-full'></NavLink>
                </div>
            </div>
            <div className='mt-5 mr-[100px] '>
                <img className='h-[445px] w-[448px]' src="/src/imgAssests/crew/crew04.png" alt="" />
            </div>
        </div>  
    )
}