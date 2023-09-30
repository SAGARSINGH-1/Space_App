import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { destinationData } from '../Data/Data';

export default function DestinationMoon() {
  const [destinationKey, setdestinationKey] = useState(1);

  function destinationHandler(key) {
    setdestinationKey(key);
  }

  function displayDestination() {
    const destinationMember = destinationData.find((destination) => destination.key === destinationKey);

    if (!destinationMember) {
      return null; // Return null if no matching destination member found
    }

    return (
      <div className='h-[80vh]'>
        <div className='flex flex-row items-center justify-around'>
          <div className='pl-[135px] mt-[20px] w-[45%]'>
            <h1 className='text-white text-28 font-barlow-condensed font-normal uppercase tracking-wider leading-normal break-words text-lg mb-[30px]'><span className='text-gray-600 '>02</span> Pick your destination</h1>
            <img className='h-[378px] w-[378px]' src={destinationMember.imgSrc} alt="" />
          </div>

          {/*  */}

          <div className='w-[45%] flex justify-center items-start flex-col'>
            {destinationSwitcher()}
            <h1 className='w-[100%] text-left text-white text-[95px] font-Bellefair font-normal break-words'>{destinationMember.name}</h1>
            <p className='text-[#D0D6F9] w-[80%] text-base font-barlow font-normal leading-8 break-words'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam impedit esse eveniet hic recusandae labore, nisi unde. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>

            <div className='mt-2 flex flex-row justify-between w-[50%]'>
              <div className='flex flex-col gap-2'>
                <p className='text-blue-300 text-base font-barlow-condensed font-normal uppercase tracking-wide leading-normal break-words'>AVG. DISTANCE</p>
                <h1 className='text-white text-28 font-bellefair font-normal uppercase break-words'>{destinationMember.distance}</h1>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-blue-300 text-base font-barlow-condensed font-normal uppercase tracking-wide leading-normal break-words'>Est. travel time</p>
                <h1 className='text-white text-28 font-bellefair font-normal uppercase break-words'>{destinationMember.years}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function destinationSwitcher() {
    return (
      <ul className='w-[50%] flex flex-row justify-around items-center cursor-pointer '>
        {destinationData.map((destination) => (
          <li>
            <NavLink
              key={destination.key}
              to={'/destination'}
              onClick={() => destinationHandler(destination.key)}
              className={`${destination.key === destinationKey ? 'pb-2 border-b-2 border-transparent border-white' : 'border-none'}`}>
              {destination.name}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }

  return displayDestination();
}
