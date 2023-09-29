import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const crewData = [
  {
    key: 1,
    name: "Douglas Hurley",
    post: "Commander",
    imgSrc: "/src/imgAssests/crew/crew01.png"
  },
  {
    key: 2,
    name: "MARK SHUTTLEWORTH",
    post: "MISSION SPECIALIST",
    imgSrc: "/src/imgAssests/crew/crew02.png"
  },
  {
    key: 3,
    name: "VICTOR GLOVER",
    post: "PILOT",
    imgSrc: "/src/imgAssests/crew/crew03.png"
  },
  {
    key: 4,
    name: "ANOUSHEH ANSARI",
    post: "FLIGHT ENGINEER",
    imgSrc: "/src/imgAssests/crew/crew04.png"
  }
];

export default function Crew01() {
  const [crewKey, setcrewKey] = useState(1);

  function crewHandler(key) {
    setcrewKey(key);
  }

  function displayCrew() {
    const crewMember = crewData.find((crew) => crew.key === crewKey);

    if (!crewMember) {
      return null; // Return null if no matching crew member found
    }

    return (
      <div className='flex flex-row items-center justify-around h-[80vh]'>
        <div className='h-[100%] pl-[135px] mt-[20px] w-[60%] flex justify-center items-start flex-col'>
          <div key={crewMember.key} className=''>
            <h1 className='text-white text-28 font-barlow-condensed font-normal uppercase tracking-wider leading-normal break-words text-lg mb-[30px]'><NavLink to={'/crew'} className='text-gray-600 '>03</NavLink> Meet Your Crew</h1>
            <h2 className='text-gray-400 pl-[10px] mb-[4px] text-lg font-bellefair font-normal uppercase break-words'>{crewMember.post}</h2>
            <h1 className='w-[100%] text-left text-white text-[55px] font-Bellefair font-normal break-words'>{crewMember.name}</h1>
            <p className='text-[#D0D6F9] w-[80%] text-base font-barlow font-normal leading-8 break-words'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam impedit esse eveniet hic recusandae labore, nisi unde. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          {crewSwitch()}
        </div>
        <div className='mt-5 mr-[100px] '>
          <img className='h-[445px] w-[448px]' src={crewMember.imgSrc} alt="" />
        </div>
      </div>
    );
  }

  function crewSwitch() {
    return (
      <div className='ml-8 mt-8 flex gap-5 h-[10%] items-center'>
        {crewData.map((crew) => (
          <NavLink
            key={crew.key}
            to={`/crew`}
            onClick={() => crewHandler(crew.key)}
            className={`w-[15px] h-[15px] hover:bg-gray-400 cursor-pointer bg-white border-2
                       border-black rounded-full ${crewKey === crew.key ? 'bg-gray-400' : ''}`}
          ></NavLink>
        ))}
      </div>
    );
  }

  return displayCrew();
}
