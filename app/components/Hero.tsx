"use client";

import React, { useEffect, useState } from "react";
import Carousel from "./carousel/Carousel";
import Button from "./inputs/Button";
import { VscDebugDisconnect } from "react-icons/vsc";
import { IoMdStarOutline } from "react-icons/io";
import { PiCursorClick } from "react-icons/pi";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdSystemUpdateAlt } from "react-icons/md";

import { GoPeople } from "react-icons/go";

import { BsQuote } from "react-icons/bs";
import Select from "./inputs/Select";
import { SlBookOpen } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import dynamic from 'next/dynamic';

// ... Other imports ...

import heroImage from "/public/svg/hero.jpg";
import Input from "./inputs/Input";
import comp1 from "/public/company_logo/comp1.svg";
import comp2 from "/public/company_logo/comp2.svg";
import comp3 from "/public/company_logo/comp3.svg";
import comp4 from "/public/company_logo/comp4.svg";
import comp5 from "/public/company_logo/comp5.svg";
import comp6 from "/public/company_logo/comp6.svg";
import comp7 from "/public/company_logo/comp7.svg";
import comp8 from "/public/company_logo/comp8.svg";
import comp9 from "/public/company_logo/comp9.svg";
import comp10 from "/public/company_logo/comp10.svg";
import svg1 from "/public/svg/vector1.jpeg";
import svg2 from "/public/svg/vector2.jpeg";
import svg3 from "/public/svg/vector3.jpeg";
import svg4 from "/public/svg/vector4.jpeg";
import svg5 from "/public/svg/vector5.jpeg";
import svg6 from "/public/svg/vector6.jpeg";
import svg7 from "/public/svg/vector7.jpeg";
import svg8 from "/public/svg/vector8.jpeg";
import svg9 from "/public/svg/vector9.jpeg";
import svg10 from "/public/svg/vector10.jpeg";
import svg12 from "/public/svg/victor12.png";
import Blog from "./blog/Blog";
const Image = dynamic(() => import('next/image'), { ssr: false });

const Hero = () => {
  return (
    <div className="mt-[30px] mb-[100px] relative  overflow-x-hidden gap-[50px] w-full flex flex-col items-center ">
      <HeroSection />
      <Register />

      <JobsSection />

      <CompanySection />
      <Carousel
        leftComponent={<LeftSecond />}
        rightComponent={<RightSecond />}
      />
      <Carousel leftComponent={<LeftThird />} rightComponent={<RightThird />} />
      <Review />
      <Extra />
      <Blog />
    
    <div className=" w-full z-[100]">

        <SELECT />
    </div>
     
    </div>
  );
};
const HeroSection = () => {
  return (
    <section className="w-full  min-h-[90vh] flex  gap-[30px] md:flex-row flex-col justify-evenly md:justify-between items-center">
      <LeftHero />
      <div className="order-first  md:order-last">
        <RightHero />
      </div>
    </section>
  );
};
const LeftHero = () => {
  return (
    <div className="flex flex-col  justify-center w-full gap-[40px] max-w-[500px] ">
      <p className="text-[50px] md:text-6xl line-clamp-8 font-bold md:leading-[5.125rem]">
        AngelList Talent is now Wellfound
      </p>
      <p className="">Where startups and job seekers connect.</p>

      <div className="flex gap-3">
        <Link href="" className="w-full">
          <Button text="Find Your Next Hire" primary />
        </Link>
        <Link href="" className="w-full">
          <Button text="Find Your Next Job" secondary />
        </Link>
      </div>
    </div>
  );
};

const RightHero = () => {
  return (
    <div className="flex max-w-[500px] justify-end  items-center ">
      <Image
        src={heroImage}
        className="max-w-full h-full"
        layout="responsive"
        objectFit="cover"
        width={300}
        height={200}
        alt="Hero Image"
      />
    </div>
  );
};

const Register = () => {
  const [email, setEmail] = useState();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="flex flex-col md:flex-row border rounded-md p-[25px] w-full gap-3">
      <div className="w-full">
        <Input
          value={email}
          onChange={changeEmail}
          type="text"
          border
          placeholder="Your email"
        />
      </div>
      <div className="min-w-fit flex flex-col md:flex-row gap-3 items-center">
        <Button text="Sign up" type="submit" primary />
        <p>or</p>

        <Button
          icon={<FcGoogle size={25} />}
          text="Sign up With Email"
          type="submit"
          secondary
        />
      </div>
    </div>
  );
};

const JobsSection = () => {
  return (
    <div className="flex flex-col border-t border-b md:flex-row gap-[40px] md:gap-0 mt-[50px] justify-between py-[25px] w-full">
      <div
        className="
          w-full
          text-blue-800
          text-center
          md:min-h-[200px]
          flex flex-col items-center justify-center gap-2
          border-r
          border-opacity-0
          border-gray-300 pr-4     // Adjust padding for spacing
          md:border-opacity-100

        "
      >
        <p className="text-3xl text-center font-bold">130K +</p>
        <p className="text-2xl text-center font-semibold">Tech Jobs</p>
      </div>
      <div
        className="
          w-full
          text-orange-600
          text-center
          md:min-h-[200px]
          flex flex-col items-center justify-center gap-2
          border-r
          border-opacity-0
          border-gray-300 pr-4     // Adjust padding for spacing
          md:border-opacity-100   
        "
      >
        <p className="text-3xl font-bold">6,000,000</p>
        <p className="text-2xl font-semibold">Matches Made</p>
      </div>
      <div
        className="
          w-full
          md:min-h-[200px]
          
          text-green-800
          text-center
          flex flex-col items-center justify-center gap-2
         
        "
      >
        <p className="text-3xl font-bold">8M +</p>
        <p className="text-2xl font-semibold">Startup-ready candidates</p>
      </div>
    </div>
  );
};

const CompanySection = () => {
  useEffect(() => {
    // Helper function to reset the animation by removing and adding the animation class
    function restartAnimation() {
      const companySection = document.querySelector(".company-section");
      companySection.classList.remove("slide-left");
      void companySection.offsetWidth; // Trigger reflow to restart the animation immediately
      companySection.classList.add("slide-left");
    }

    // Auto restart the animation every 5 seconds (adjust the interval as needed)
    const interval = setInterval(restartAnimation, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
flex items-center
    h-[150px]
    "
    >
      <div className="w-[175px] h-full bg-gradient-to-r z-10 from-white to-white/50  "></div>

      <div className="flex items-center gap-[30px]  company-section ">
        {/* Add key to each Image for smoother transition when reordering */}
        <Image key={1} src={comp1} width={150} />
        <Image key={2} src={comp2} width={150} />
        <Image key={3} src={comp3} width={150} />
        <Image key={4} src={comp4} width={150} />
        <Image key={5} src={comp5} width={150} />
        <Image key={6} src={comp6} width={150} />
        <Image key={7} src={comp7} width={150} />
        <Image key={8} src={comp8} width={150} />
        <Image key={9} src={comp9} width={150} />
        <Image key={10} src={comp10} width={150} />
      </div>
      <div className="w-[175px] h-full bg-gradient-to-r z-10 from-white to-white/50  "></div>
    </div>
  );
};

const LeftSecond = () => {
  return (
    <div className="px-10 w-full flex items-center justify-center md:py-[25px]">
      <Image src={svg7} className="max-w-full" />
    </div>
  );
};

const RightSecond = () => {
  return (
    <div className="w-full min-h-[90vh] items-center justify-center flex flex-col gap-3 px-10  md:py-[25px]">
      <div className=" flex flex-col gap-[30px]">
        <p className="font-semibold">GOT TALENT?</p>
        <p className="text-4xl md:text-5xl font-semibold flex flex-col gap-2 font-bold leading-[3.5rem]">
          Why job seekers <span className="">love us</span>
        </p>

        <ul className="flex flex-col gap-[25px]">
          <div className="flex gap-[20px] justify-between">
            <div className="w-[30px] flex-shrink-0">
              <IoMdStarOutline size={30} />
            </div>
            <p>
              Unique jobs at <strong>startups and tech companies</strong> you
              can't find anywhere else
            </p>
          </div>
          <li className="flex gap-[20px] justify-between">
            <div className="w-[30px] flex-shrink-0">
              <PiCursorClick size={30} />
            </div>
            <p>
              Say goodbye to cover letters - your profile is all you need.{" "}
              <strong>One click to apply</strong> and you're done.
            </p>
          </li>

          <div className="flex gap-[20px] justify-between">
            <div className="w-[30px] flex-shrink-0">
              <SlBookOpen size={30} />
            </div>

            <p>
              Everything you need to know to job search - including seeing
              <strong> salary and stock options</strong> upfront when looking
            </p>
          </div>

          <div className="flex gap-[20px] justify-between">
            <div className="w-[30px] flex-shrink-0">
              <VscDebugDisconnect size={30} />
            </div>
            <p>
              Connect directly with <strong>founders</strong> at top startups -
              no third party recruiters allowed
            </p>
          </div>
        </ul>
        <div className="flex gap-2 max-w-[250px]">
          <Button text="Learn more " secondary />
          <Button text="Sign up now" primary />
        </div>
      </div>
    </div>
  );
};

const LeftThird = () => {
  return (
    <div className="w-full min-h-[90vh]  items-center justify-center flex flex-col gap-3 px-10 md:py-[25px]">
      <div className=" flex flex-col gap-[30px]">
        <p className="font-semibold">GOT TALENT?</p>
        <p className="text-5xl font-semibold flex flex-col gap-2 font-bold leading-[3.5rem]">
          Why Recruiters <span className="">love us</span>
        </p>

        <ul className="flex flex-col gap-[25px]">
          <div className="flex gap-[20px] justify-between">
            <div className="w-[30px] flex-shrink-0">
              <GoPeople size={30} />
            </div>
            <p>
              <strong> 8 million</strong> responsive and startup-ready
              candidates, with all the information you need to vet them
            </p>
          </div>
          <li className="flex gap-[20px] justify-between">
            <div className="w-[30px] flex-shrink-0">
              <GiSettingsKnobs size={30} />
            </div>
            <p>
              Everything you need to kickstart your recruiting - get job posts,
              company branding, and HR tools set up within{" "}
              <strong> 10 minutes, for free</strong>
            </p>
          </li>

          <div className="flex gap-[20px] justify-between">
            <div className="w-[30px] flex-shrink-0">
              <MdSystemUpdateAlt size={30} />
            </div>

            <p>
              A free <strong> applicant tracking system</strong>, or free
              integration with any ATS you may already use
            </p>
          </div>
        </ul>
        <p>
          Plus, we can do the vetting for you! With Curated, we review the
          world's top tech talent and highlight candidates directly to you 2x a
          week.
        </p>
        <div className="flex gap-2 max-w-[250px]">
          <Button text="Learn more " secondary />
          <Button text="Sign up now" primary />
        </div>
      </div>
    </div>
  );
};

const RightThird = () => {
  return (
    <div className="px-10  md:py-[25px] flex items-center justify-center w-full">
      <Image src={svg12} className="max-w-full" />
    </div>
  );
};

const Review = () => {
  // Array of reviews
  const reviews = [
    "I got my tech job on Wellfound (AngelList Talent) 4 years ago and I'm still happy! Pays well, great culture, and unlimited PTO.",
    "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.",
    "I can't imagine my day to day without this platform. Life would be a lot more difficult.",
    "Half of the offers I give are sourced from Wellfound (AngelList Talent). It's the best product for anyone looking for startup talent.",
  ];

  return (
    <div className="min-h-[90vh] flex flex-col gap-[25px] md:py-[25px]">
      <p className="text-center font-semibold">DON'T JUST TAKE IT FROM US</p>
      <p className="text-4xl text-center font-bold">From our users</p>

      {/* Use CSS Grid to create two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 grow mt-[45px] gap-4 gap-[30px]">
        {/* Map through the reviews and render each one in a div */}
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border p-[25px] border-gray-300  rounded-md"
          >
            {/* Add quotation character to the review */}

            <BsQuote size={60} />
            <blockquote className="italic">{review}</blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

const Extra = () => {
  return (
    <div className="min-h-[50vh] flex items-center justify-center flex-col gap-[30px]">
      <p className="text-5xl md:text-7xl font-bold">Wellfound's</p>
      <p className="flex gap-3 text-5xl md:text-7xl font-bold">
        <span className="text-red-600">10</span>
        of <span className="text-red-600">10</span>
        in <span className="text-red-600">2022</span>
      </p>
      <p className="text-2xl text-center">
        10 groundbreaking teams across 10 trending industries
      </p>
    </div>
  );
};

const SELECT = () => {
  const deskJobData = [
    { name: "UX/UI Designer" },
    { name: "Frontend Developer" },
    { name: "Marketing Manager" },
    { name: "Accountant" },
    { name: "HR Specialist" },
    { name: "Business Analyst" },
    { name: "Content Writer" },
    { name: "Customer Support Representative" },
    { name: "Project Manager" },
    { name: "Quality Assurance Analyst" },
    { name: "Business Development Executive" },
    { name: "Graphic Designer" },
    { name: "IT Support Specialist" },
    { name: "Sales Representative" },
    { name: "Content Marketing Manager" },
    { name: "Financial Analyst" },
    { name: "Administrative Assistant" },
    { name: "Data Scientist" },
    { name: "Social Media Manager" },
    { name: "Full Stack Developer" },
  ];

  const remoteJobsData = [
    { name: "Remote Web Developer" },
    { name: "Remote Software Engineer" },
    { name: "Remote Frontend Developer" },
    { name: "Remote Backend Developer" },
    { name: "Remote Full Stack Developer" },
    { name: "Remote UI/UX Designer" },
    { name: "Remote Data Scientist" },
    { name: "Remote DevOps Engineer" },
    { name: "Remote Product Manager" },
    { name: "Remote Content Writer" },
  ];

  return (
    <div className="flex flex-wrap w-full gap-[20px]     justify-center">
      <Select defaultValue="Job Collections" data={deskJobData} />
      <Select defaultValue="Remote Jobs" data={remoteJobsData} />
      <Select defaultValue="Jobs by Location" data={remoteJobsData} />
      <Select defaultValue="Jobs by Role" data={remoteJobsData} />
      <Select defaultValue="Jobs by Role and Location" data={remoteJobsData} />

    </div>
  );
};

export default Hero;
