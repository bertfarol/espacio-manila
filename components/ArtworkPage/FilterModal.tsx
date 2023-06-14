import { Icon } from "@iconify/react";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

interface MenuModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  filterMenu: string[];
  setFilter: Dispatch<SetStateAction<string>>;
}

 const FilterModal = ({
  isModalOpen,
  onClose,
  filterMenu,
  setFilter,
}: MenuModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleMenuClick = (filterDate: string) => {    
     setFilter(filterDate === "All Artist" ? "all" : filterDate);
    setActiveItem(filterDate);
  };

  const modalClass =
    (isModalOpen ? "translate-x-0" : "translate-x-[110%]") +
    " fixed top-[15%] right-[15px] bg-white z-30 w-2/3 duration-300 rounded-lg border border-[#E5E7EB] overflow-hidden shadow-modal max-w-[375px] pb-3.5";

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
      document.body.classList.remove("bg-overlay");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div className={modalClass} ref={modalRef}>
      <div className="flex min-h-[48px]">
        <div className="flex items-center grow">
          <div>
            <Icon
              icon="system-uicons:sort-alt"
              className="w-5 h-5 mr-[12px] ml-[16px]"
            />
          </div>
          <div className="pl-1 font-medium select-none ">Filter by Artist</div>
        </div>
        <div className="p-3">
          <Icon
            onClick={onClose}
            icon="iconamoon:close-light"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
      <div className="border-t border-[#dadce0] pt-1 select-none	">
        <div
          onClick={() => handleMenuClick("all")}
          className={`h-[60px] flex items-center px-4 pt-3.5 pb-[11px] cursor-pointer hover:bg-[#f4f4f4] relative after:content-[''] after:absolute after:bottom-0 after:left-[5%] after:w-11/12 after:h-[1px] after:bg-[#E5E7EB] last:after:content-[] ${
            activeItem === "all" ? "bg-[#f4f4f4]" : ""
          }`}
        >
          All Artist
        </div>
        {filterMenu &&
          filterMenu.map((item) => (
            <div
              key={item}
              onClick={() => handleMenuClick(item)}
              className={`h-[60px] flex items-center px-4 pt-3.5 pb-[11px] cursor-pointer hover:bg-[#f4f4f4] relative after:content-[''] after:absolute after:bottom-0 after:left-[5%] after:w-11/12 after:h-[1px] after:bg-[#E5E7EB] last:after:content-[] ${
                activeItem === item ? "bg-[#f4f4f4]" : ""
              }`}
            >
              {item}
            </div>
          ))}
      </div>
    </div>
  );
};


export default FilterModal;