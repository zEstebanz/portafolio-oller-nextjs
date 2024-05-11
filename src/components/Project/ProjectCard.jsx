import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { IoIosDocument } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, docUrl }) => {
  return (
    <div>
      <div className="text-white rounded-t-xl mt-3 bg-[#181818] px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
      </div>

      <div
        className="h-52 md:h-52 relative group shadow-md overflow-hidden flex justify-center items-center"
        style={{
          background: `url(${imgUrl}) center center / cover no-repeat`,
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          {gitUrl && (
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              target="_blank"
            >
              <FiGithub className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
          {previewUrl && (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              target="_blank"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
          {docUrl && (
            <Link
              href={docUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              target="_blank"
            >
              <IoIosDocument className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>

      <div className="bg-[#181818] rounded-b-xl px-4">
        <div className="flex justify-center mt-4 py-2">
          <div className="mx-2 text-white">
            {description}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;