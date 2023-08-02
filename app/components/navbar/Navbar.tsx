import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../inputs/Button";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-2">
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
    </header>
  );
};

export default Navbar;
