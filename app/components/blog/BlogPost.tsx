// components/BlogPost.tsx

import React from "react";
import Button from "../inputs/Button";
import Image from "next/image";

interface BlogPostProps {
  image: string;
  subtitle: string;
  title: string;
  content: string;
  button: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  image,
  subtitle,
  title,
  content,
  button,
}) => {
  return (
    <div className="flex flex-col gap-[30px] border justify-between">
      <div className="h-[300px] md:h-[400px] w-full ">
        <Image
          src={image}
          className="w-full h-[100%]   object-fit"
          alt={title}
        />
      </div>

      <div className="p-[25px] flex flex-col gap-[20px]">
        <p className="text-[15px]">{subtitle}</p>

        <p className="text-[27px] font-bold">{title}</p>
        <p>{content}</p>
        <div className="max-w-fit">
          <Button text={button} secondary />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
