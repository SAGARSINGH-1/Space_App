import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { techData } from '../Data/Data';

export default function Tech01() {
  const [techKey, settechKey] = useState(1);

  function techHandler(key) {
    settechKey(key);
  }

  function displaytech() {
    const techMember = techData.find((tech) => tech.key === techKey);

    if (!techMember) {
      return null; // Return null if no matching tech member found
    }

    return (
      <div className='flex flex-row items-center justify-around'>
        <div className='pl-[135px] w-[45%]'>
          <h1 className='text-white text-28 font-barlow-condensed font-normal uppercase tracking-wider leading-normal break-words text-lg mb-[30px]'>
            <span className='text-gray-600 '>04</span> Pick your destination
          </h1>

          <div className='h-[68vh] w-[100%] flex items-center'>
            <div className='data flex flex-row gap-12'>
              {techSwitch()}
              <div>
                <h2 className='text-[#D0D6F9]'>THE TERMINOLOGY…</h2>
                <h1 className='text-4xl font-semibold my-2'>{techMember.tittle}</h1>
                <p className='text-[#D0D6F9]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam blanditiis veritatis tempore ut. Ex necessitatibus vitae nemo aspernatur aliquid aliquam fugit quam omnis quidem, vero voluptates quaerat fuga dolorum maxime.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[45%] mt-[30px] flex justify-end items-center flex-col '>
          <img className='rounded-3xl' width={'380rem'} src={techMember.imgSrc} alt="" />
        </div>
      </div>
    );
  }

  function techSwitch() {
    return (
      <div className='flex flex-col gap-5'>
        {techData.map((tech) => (
          <NavLink
            key={tech.key}
            onClick={() => techHandler(tech.key)}
            to={`/technology`} // Specify the correct route for each technology
            className={`${
              tech.key === techKey
                ? 'bg-white text-black flex justify-center items-center font-semibold text-xl p-5 rounded-full w-[60px] h-[60px]' // Apply this style when active
                : 'bg-transparent text-white border-2'
            } flex justify-center items-center font-semibold text-xl p-5 rounded-full w-[60px] h-[60px]`}
          >
            {tech.key}
          </NavLink>
        ))}
      </div>
    );
  }

  return displaytech();
}
