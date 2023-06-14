import React, { Dispatch, SetStateAction, useState } from "react";

interface TabeMenuProps {
  setCategory: Dispatch<SetStateAction<string>>;
}

const TabMenu = ({ setCategory }: TabeMenuProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);

    if (index === 0) setCategory("all");
    if (index === 1) setCategory("painting");
    if (index === 2) setCategory("sculpture");
  };

  const activeStyle = "border-black text-black";

  const tabItems = [
    { id: 0, name: "All" },
    { id: 1, name: "Painting" },
    { id: 2, name: "Sculpture" },
  ];

  return (
    <>
      <ul className="tab-menu grid grid-cols-3 select-none cursor-pointer text-center leading-none text-sm text-[#747474] lg:flex lg:gap-5">
        {tabItems.map((tabItem) => (
          <li
            key={tabItem.id}
            className={
              (activeTab === tabItem.id ? activeStyle : "lg:border-white") +
              " border-b-2  py-[0.7rem] lg:py-[0.3rem] hover:border-[#E6EAED]"
            }
            onClick={() => {
              handleTabClick(tabItem.id);
            }}
          >
            {tabItem.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TabMenu;
