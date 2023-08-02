import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="flex flex-col gap-[50px] py-[75px]">
        <div className="min-h-[40vh] gap-[45px] flex flex-col md:flex-row grow w-full justify-between ">
          <div className="flex flex-col gap-3">
            <p className="text-4xl font-bold">wellfound:</p>
            <div className="flex gap-3">
              <Link href="https://twitter.com/AakashK58906666">
                <FaTwitter size={30} />
              </Link>
              <Link href="https://www.linkedin.com/in/aakash-kumar-40b6b0249/">
                <FaLinkedinIn size={30} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[55px] md:flex-row">
            <div className="flex  w-full min-w-fit flex-col gap-3">
              <p className="font-semibold text-[20px] min-w-fit">
                For Candidates
              </p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">Overview</p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">Startup Jobs</p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">Web3 Jobs</p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">Featured</p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">Salary Calculator</p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">Startup Hiring Data</p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">Tech Startups</p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">Remote</p>
            </div>
            <div className="flex w-full flex-col min-w-fit gap-3">
              <p className="font-bold text-[20px]">For Recruiters</p>

              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">
                Overview
              </p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">
                Recruit Pro
              </p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">
                Curated
              </p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">
                RecruiterCloud
              </p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">
                Hire
              </p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">
                Developers
              </p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">
                Pricing
              </p>
            </div>
            <div className="flex w-full flex-col min-w-fit gap-3">
              <p className="font-semibold text-[20px]">Company</p>

              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">
                About
              </p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">
                AngelList
              </p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">
                Venture
              </p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">
                Help
              </p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">
                Blog
              </p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">
                Terms & Risks
              </p>
              <p className="text-[18px] hover:text-red-500 hover:underline cursor-pointer">
                Privacy & Cookies
              </p>
            </div>
          </div>
        </div>
        <div className="flex text-gray-600 justify-between gap-[30px] flex-col md:flex-row">
          <p>
            Copyright © 2023 Wellfound (formerly AngelList Talent). All rights
            reserved.
          </p>
          <p>
            Browse by: Jobs, Remote Jobs, Locations, Startups, Industries, Tech
            Hubs
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
