import React from "react";
import { FaInstagram } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import JobTypes from "./JobType";

// Define the prop types using TypeScript interface
interface JobLayoutProps {
  jobRole: string;
  jobLocation: string;
  jobType: string;
  companyName: string;
  companyLogo: string;
  companyEmployee: string;
  activeHiring: boolean;
  growingFast: boolean;
  salary: number;
  equity: string;
  companyDescription: string;
}

const JobLayout: React.FC<JobLayoutProps> = (props) => {
  const {
    jobRole,
    jobLocation,
    jobType,
    companyName,
    companyLogo,
    companyEmployee,
    activeHiring,
    growingFast,
    salary,
    equity,
    companyDescription,
  } = props;

  return (
    <div className="flex flex-col gap-3 border p-[25px] rounded-md">
      {/* Now you can use the props in your component */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-[25px] items-start ">
          <div className="flex rounded-md justify-center h-[50px] w-[50px] bg-black  items-center">
            <FaInstagram size={30} className="text-white" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[18px]">{companyName}</p>
            <p className="text-sm pb-[8px]">{companyDescription}</p>

            <div className="flex gap-1 items-center text-gray-400">
              <IoIosPeople />
              <p className="text-[12px]">
                {companyEmployee} <span>Employee</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-[18px]">
          {activeHiring && (
            <div className="flex p-[3px] px-[8px] gap-[10px] items-center rounded-full bg-green-100">
              <div className="flex items-center rounded-full bg-black w-[20px] h-[20px] justify-center">
                <MdDone className="text-white" />
              </div>
              <p className="text-[11px] uppercase">
                {activeHiring ? "Active Hiring" : "Not Hiring"}
              </p>
            </div>
          )}
          {growingFast && (
            <div className="flex p-[3px] px-[8px] gap-[10px] items-center rounded-full bg-blue-100">
              <div className="flex items-center rounded-full   w-[20px] h-[20px] justify-center">
                <SlGraph className="text-blue-500" />
              </div>
              <p className="text-[11px] uppercase text-blue-500">
                Growing Fast
              </p>
            </div>
          )}
        </div>

        {/* <img src={companyLogo} alt="Company Logo" /> */}
      </div>
      <JobTypes
      jobRole={jobRole}
      jobLocation={jobLocation}
      salary={salary}
      equity={equity}
      jobType={jobType}
      />
        <JobTypes
      jobRole={jobRole}
      jobLocation={jobLocation}
      salary={salary}
      equity={equity}
      jobType={jobType}
      />
    </div>
  );
};

export default JobLayout;
