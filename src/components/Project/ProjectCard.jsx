import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { IoIosDocument } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, tools, description, gitUrl, previewUrl, docUrl }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div>
      <div>
        <div
          className="text-white rounded-t-xl mt-3 bg-[#181818] px-4 cursor-pointer"
          onClick={openModal}
        >
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
        </div>

        <div
          className="h-52 md:h-52 relative group shadow-md overflow-hidden flex justify-center items-center"
          style={{ background: `url(${imgUrl}) center center / cover no-repeat` }}
          onClick={openModal}
        >
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 cursor-pointer"></div>
        </div>
        <div className="bg-[#181818] rounded-b-xl px-4" onClick={openModal}>
          <div className="flex justify-center mt-4 py-2">
            <div className="mx-2 text-white">{tools}</div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50 modal-overlay"
          onClick={handleModalClick}
        >
          <div className="bg-[#1c1c1c] rounded-xl p-4 md:p-8 max-w-2xl w-full overflow-hidden relative">
            <button
              className="absolute top-4 right-4 text-gray-100 hover:text-[#00bd95]"
              onClick={closeModal}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-6 flex justify-center">
                <img
                  src={imgUrl}
                  alt={title}
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold text-white">{title}</h2>
                <p className="text-[#00bd95] mt-2">{tools}</p>
                {description && (
                  <div className="mt-4">
                    <h3 className="text-gray-200">Descripción:</h3>
                    <p className="text-gray-400 text-base">{description}</p>
                  </div>
                )}
                <div className="mt-6 flex flex-wrap gap-4">
                  {gitUrl && (
                    <Link
                      href={gitUrl}
                      target="_blank"
                      passHref
                      className="text-white hover:text-[#00bd95]"
                    >
                      <p
                        className="btn btn-primary px-4 py-2 bg-[#181818] rounded-md"
                        rel="noopener noreferrer"
                      >
                        <FiGithub className="inline mr-2" /> GitHub
                      </p>
                    </Link>
                  )}
                  {previewUrl && (
                    <Link
                      href={previewUrl}
                      target="_blank"
                      passHref
                      className="text-white hover:text-[#00bd95]"
                    >
                      <p
                        className="btn btn-primary px-4 py-2 bg-[#181818] rounded-md"
                        rel="noopener noreferrer"
                      >
                        <IoEyeSharp className="inline mr-2" /> Preview
                      </p>
                    </Link>
                  )}
                  {docUrl && (
                    <Link
                      href={docUrl}
                      target="_blank"
                      passHref
                      className="text-white hover:text-[#00bd95]"
                    >
                      <p
                        className="btn btn-primary px-4 py-2 bg-[#181818] rounded-md"
                        rel="noopener noreferrer"
                      >
                        <IoIosDocument className="inline mr-2" /> Documentation
                      </p>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default ProjectCard;
