import React from "react";
import BlogPost from "./BlogPost";
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

const data = [
  {
    subtitle: "GET FEATURED",
    title: "Let us show you off",
    description:
      "Apply to be featured and we'll highlight your profile to top recruiters and companies searching for your specific skills.\n\nOh, it's also 100% free.",
    button: "Learn more",
    image: svg1,
  },
  {
      subtitle: "SALARY CALCULATOR",
      title: "Know your worth",
    image: svg2,
    button: "Calculate your salary",
    description:
      "Know your worth\nWe have the data. Research by job title, industry, and company size to find your salary range and be prepared to nail your negotiations.",
  },
  {
    title: "18 Innovative Space Startups Hiring Now",
    subtitle:'JOB COLLECTION',
    description:
      "Few tech sectors are capturing the public’s collective imagination as much as space. Privatized spaceflight, or “NewSpace,” is attracting...",
    button: "Read more",
    image: svg3,

  },
  {
    title: "30 Questions to Ask Before Joining a Startup",
    subtitle: "BLOG POST",
    description:
      "You're trying to evaluate the company while still impressing your interviewers, and that balance can be tricky...",
    button: "Read more",
    image: svg4,

    
  },
  {
    title: "Why Naval Ravikant Thinks Remote Work Is The Future",
    subtitle: "BLOG POST",
    description:
      "It feels like the rise of remote work has been a top conversation in tech for years, but despite the enthusiasm and attention...",
    button: "Read more",
    image: svg5,

  },
  {
    title: "19 Hot Crypto Startups Hiring Remotely in 2022",
    subtitle: "JOB COLLECTION",
    description:
      "Either Crypto has a great PR team, or the internet-based medium of exchange is truly taking the world by storm...",
    button: "Read more",
    image: svg6,

  },
  {
    title: "The Truth About Finding Your First Engineering Job",
    subtitle: "BLOG POST",
    description:
      "Even for senior engineers, job searches can be confusing, frustrating affairs. When you're a junior engineer looking for your first job...",
    button: "Read more",
    image: svg9,

  },
  {
    title: "20 Women-Led Startups Expanding Their Remote Teams in 2022",
    subtitle: "JOB COLLECTION",
    description:
      "It is no surprise by now that women make great leaders. In the US alone, women-led businesses generated more than 1.8 trillion dollars...",
    button: "Read more",
    image: svg10,

  },
];

const Blog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grow gap-[30px]">
      {data.map((item, index) => (
        <BlogPost
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          content={item.description}
          button={item.button}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Blog;
