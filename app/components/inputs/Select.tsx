'use client'

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface Option {
  name: string;
}

interface SelectProps {
  data?: Option[];
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  data,
  value,
  defaultValue,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const [selectValue, setSelectValue] = useState(defaultValue);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOptionClick = (optionValue: string) => {
    setSelectValue(optionValue);
     // Call the onChange callback with the selected value
    setOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="relative flex flex-col  justify-center min-w-fit ">

    <div className="select-container  min-w-fit   ">
      <div
        className="flex gap-1 border min-w-fit p-[10px] rounded-md cursor-pointer items-center justify-between"
        onMouseEnter={handleOpen}
        onClick={handleOpen}

        onMouseLeave={handleClose}
      >
        <p className="min-w-fit">{selectValue}</p>
        <FiChevronDown />
      </div>
    </div>
      <div
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      className={`overlay-div fixed top-[162px] p-[0px] max-w-fit   z-[100] bg-white  overflow-hidden ${
        open ? "max-h-[500px] overflow-y-auto border    transition-all duration-300 ease-in-out" : "max-h-0"
      }`}
      >
        {data?.map((item: Option, index: number) => (
          <p
            className="p-[15px] min-w-fit hover:bg-gray-300 transition w-full cursor-pointer"
            key={index + item.name}
            onClick={() => handleOptionClick(item.name)}
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>

  );
};

export default Select;
