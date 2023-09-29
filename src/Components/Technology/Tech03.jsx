import { Link, NavLink } from 'react-router-dom'



export default function Tech03() {
    return (
        <div className='flex flex-row items-center justify-around'>
            <div className='pl-[135px] w-[45%]'>
                <h1 className='text-white text-28 font-barlow-condensed font-normal uppercase tracking-wider leading-normal break-words text-lg mb-[30px]'><span className='text-gray-600 '>04</span> Pick your destination</h1>

                <div className='h-[68vh] w-[100%] flex items-center'>
                    <div className='data flex flex-row gap-12'>
                        <div className='flex flex-col gap-5'>
                            <Link to={'/technology'} className='bg-transparent text-white border-2 flex justify-center items-center font-semibold text-xl p-5 rounded-full w-[60px] h-[60px]'>1</Link>
                            <Link to={'/technology/tech02'} className='bg-transparent text-white border-2 flex justify-center items-center font-semibold text-xl p-5 rounded-full w-[60px] h-[60px]'>2</Link>
                            <Link to={'/technology/tech03'} className='bg-white text-black flex justify-center items-center font-semibold text-xl p-5 rounded-full w-[60px] h-[60px]'>3</Link>

                        </div>
                        <div>
                            <h2 className='text-[#D0D6F9]'>THE TERMINOLOGY…</h2>
                            <h1 className='text-4xl font-semibold my-2'>SPACE CAPSULE</h1>
                            <p className='text-[#D0D6F9]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam blanditiis veritatis tempore ut. Ex necessitatibus vitae nemo aspernatur aliquid aliquam fugit quam omnis quidem, vero voluptates quaerat fuga dolorum maxime.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}

            <div className='w-[45%] mt-[30px] flex justify-end items-center flex-col '>
                <img className='rounded-3xl' width={'380rem'} src="/src/imgAssests/technology/tech03.jpg" alt=""/>
            </div>
        </div>
    )
}