import React, { ReactNode } from 'react';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset'; // optional prop with limited choices
  onClick?: () => void; // optional click event handler
  primary?: boolean; // optional boolean prop for primary style
  secondary?: boolean; // optional boolean prop for secondary style
icon?:ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type = 'button',
  onClick,
  primary,
  secondary,
  icon

}) => {
  // Determine the button class based on the props
  const buttonClass = `min-w-fit flex text-center items-center font-semibold gap-[15px] w-full p-2 rounded-md px-4 ${
    primary ? 'bg-black text-white   font-semibold hover:bg-red-600' : secondary ? 'bg-transparent border text-black  hover:bg-red-100 hover:text-red-300 hover:border-red-500 ' : ''
  }`;

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
     {
      icon&& icon
     }
      {text}
    </button>
  );
};

export default Button;
