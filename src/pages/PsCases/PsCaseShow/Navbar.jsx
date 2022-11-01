import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import React from 'react'

const Navbar = ({beneficiaries, psCaseId}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      console.log(currentTab?.offsetLeft, currentTab?.clientWidth);
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);


  return (
    <div>
    <div className="relative">
      <div className="flex space-x-5 border-b  border-black border-opacity-20 dark:border-white dark:border-opacity-20">
        {/* Loop through tab data and render button for each. */}
        {beneficiaries?.map((beneficiary, idx) => {
          return (
            <NavLink
              key={idx}
              ref={(el) => (tabsRef.current[idx] = el)}
              className={`pt-2 pb-3 ${activeTabIndex === idx ? 'text-teal-500 text-bold' : ''}`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}
              to={`/ps-cases/${psCaseId}/beneficiaries/${beneficiary.id}`} 
              >
              <span className='text-sm'>{beneficiary.full_name}</span>
            </NavLink>
          );
        })}
      </div>
      <span
        className="absolute bottom-0 block h-1 bg-teal-500 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      />
    </div>
    {/* Show active tab content. */}
    <div>
      {/* <p>{tabsData[activeTabIndex].content}</p> */}
    </div>
  </div>
  )
}

export default Navbar

