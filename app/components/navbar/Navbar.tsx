"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../inputs/Button";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  return (
    <header className="flex  w- p-[10px] justify-between items-center py-2">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={150} height={50} />
      </Link>

      <nav className="hidden md:flex gap-4 items-center">
        <Link
          href="/role/jobs"
          className="border-b border-b-2   border-red-600 border-opacity-0 p-2 transition hover:text-red-600 hover:border-opacity-100 "
        >
          Discover
        </Link>
        <Link
          href="/role/jobs"
          className="border-b border-b-2   border-red-600 border-opacity-0 p-2 transition hover:text-red-600 hover:border-opacity-100 "
        >
          For Job Seekers
        </Link>
        <Link
          href="/role/jobs"
          className="border-b border-b-2   border-red-600 border-opacity-0 p-2 transition hover:text-red-600 hover:border-opacity-100 "
        >
          For Companies
        </Link>

        <Link href="">
          <Button text="Log in" type="button" secondary />
        </Link>
        <Link href="">
          <Button text="sign up" type="button" primary />
        </Link>
      </nav>
      <div className="md:hidden relative">
        <NavbarMobile />
      </div>
    </header>
  );
};

const NavbarMobile = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div className="flex z-[1000] justify-end min-w-fit relative  flex-col gap-[10px]">
      {/* Mobile menu content */}
      <div className="flex w-full justify-end">
        {mobileMenuOpen ? (
          <GrClose className='cursor-pointer' onClick={toggleMobileMenu} />
        ) : (
          <HiOutlineMenuAlt1 className='cursor-pointer' onClick={toggleMobileMenu} />
        )}
      </div>
      <div className={` flex flex-col bg-white fixed top-[65px]  p-[15px]   right-0  border gap-[10px] transition ${mobileMenuOpen? "right-0":"right-[500px]"} `}>
        <Link href="/role/jobs" className="block p-2">
          Discover
        </Link>
        <Link href="/role/jobs" className="block p-2">
          For Job Seekers
        </Link>
        <Link href="/role/jobs" className="block p-2">
          For Companies
        </Link>
        <Link href="">
          <Button text="Log in" type="button" secondary />
        </Link>
        <Link href="">
          <Button text="Sign up" type="button" primary />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
