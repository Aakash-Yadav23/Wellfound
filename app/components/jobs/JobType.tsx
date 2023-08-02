import React from "react";
import { FaInstagram } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import Button from "../inputs/Button";

// Define the prop types using TypeScript interface
interface JobTypesProps {
  jobRole: string;
  jobLocation: string;
  jobType: string;
  salary: number;
  equity: string;
}

const JobTypes: React.FC<JobTypesProps> = (props) => {
  const { jobRole, jobLocation, jobType, salary, equity } = props;

  return (
    <div className="flex  gap-[25px] items-center justify-between border px-[10px] rounded-md">
      {/* Now you can use the props in your component */}

      <div className="flex flex-col  w-full p-[10px]  justify-center  rounded-md">
        <div className="flex gap-[5px] flex-wrap items-center">
          <p className="font-bold">{jobRole}</p>
          <p className="text-sm">{jobLocation}</p>
          <p className="text-sm">{jobType}</p>
          <p className="text-sm">{salary}</p>

        </div>
        <div className="flex items-center ">
          <p className="text-[14px]"> {equity}</p>
        </div>
      </div>
      <div className="min-w-fit flex gap-3 items-center">
        <p className="min-w-fit text-sm text-gray-500">4 days ago</p>
        <Button text="save"  blue secondary />
        <Button text="apply" blue primary />

      </div>
    </div>
  );
};

export default JobTypes;
