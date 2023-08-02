import React from "react";
import JobLayout from "./JobLayout";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const Job = () => {
  return (
    <div className="py-[30px] md:p-[100px] md:py-[75px] flex flex-col gap-[30px]">
      <JobLayout
        jobRole="Software Engineer"
        jobLocation="New York, NY"
        jobType="Full-time"
        companyName="Google "
        companyLogo={<FaGoogle size={30} className="text-white" />}

        companyEmployee="1000+"
        activeHiring={true}
        growingFast={true}
        salary={80000}
        equity="2%-3%"
        companyDescription="We are a Search Engine that focuses on making search accurate."
      />

      <JobLayout
        jobRole="Software Engineer"
        jobLocation="New York, NY"
        jobType="Full-time"
        companyName="Instagram"
        companyLogo={<FaInstagram size={30} className="text-white" />}
        companyEmployee="1000+"
        activeHiring={true}
        growingFast={true}
        salary={80000}
        equity="2%-3%"
        companyDescription="We are a tech company that focuses on creating innovative solutions."
      />

      <JobLayout
        jobRole="Software Engineer"
        jobLocation="New York, NY"
        jobType="Full-time"
        companyName="Example Company"
        companyLogo={<FaGithub size={30} className="text-white" />}

        companyEmployee="1000+"
        activeHiring={true}
        growingFast={true}
        salary={80000}
        equity="2%-3%"
        companyDescription="We are a tech company that focuses on creating innovative solutions."
      />

      <JobLayout
        jobRole="Software Engineer"
        jobLocation="New York, NY"
        jobType="Full-time"
        companyName="Facebook"
        companyLogo={<FaFacebook size={30} className="text-white" />}

        companyEmployee="1000+"
        activeHiring={true}
      
        salary={80000}
        equity="2%-3%"
        companyDescription="We are a Social media  company that focuses on creating conflict ."
      />

      <JobLayout
        jobRole="Software Engineer"
        jobLocation="New York, NY"
        jobType="Full-time"
        companyName="Twitter"
        companyLogo={<FaTwitter size={30} className="text-white" />}

        companyEmployee="1000+"
        activeHiring={true}
   
        salary={80000}
        equity="2%-3%"
        companyDescription="We are a social media company that focuses on making communications smooth and hateful."
      />
    </div>
  );
};

export default Job;
