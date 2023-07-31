import React from "react";

interface InputProps {
  placeholder?: string;
  bgColor?: string;
  border?: Boolean;
 
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  bgColor,
  border,
  value,
  type,
  disabled,
  label,

}) => {
  return (
    <div className="w-full flex flex-col gap-2">
{
  label&&<label htmlFor="" className="">
    {label}
  </label>
}
<div className="flex gap-[15px]">

      <input
        disabled={disabled}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`p-2
        w-full
        rounded-md
        ${border? "border border-1 border-gray-400":""
      }
      `}
      />
      </div>
    </div>
  );
};

export default Input;
