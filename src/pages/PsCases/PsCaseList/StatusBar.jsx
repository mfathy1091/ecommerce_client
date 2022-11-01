import { useEffect, useRef, useState } from "react";

const StatusBar = (props) => {
  const {currentTab, tabs, onChangeTab} = props;
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

  const handleTabClick = (e) => {
    onChangeTab(e.target.value)
    setActiveTabIndex(e.target.key)
  }

  return (
    <div>
      <div className="relative">
        <div className="flex space-x-5 border-b text-sm border-black border-opacity-20 dark:border-white dark:border-opacity-20">
          {tabs?.map((tab, idx) => {
            return (
              <button
                key={idx}
                value={tab.status}
                ref={(el) => (tabsRef.current[idx] = el)}
                // Change the active tab on click.
                // onClick={handleTabClick(idx)}
                onClick={handleTabClick}
                className={`pt-2 pb-3 ${tab.status==currentTab ? 'text-teal-500 text-bold' : '' }` }
              >
                {tab.name}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block h-1 bg-teal-500 transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      
    </div>

  )
}

export default StatusBar