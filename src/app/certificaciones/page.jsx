"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cer1 from '../../../public/cert/backend.png';
import cer2 from '../../../public/cert/Responsive Web Design.png';
import cer3 from '../../../public/cert/Semillero.jpeg';
import cer4 from '../../../public/cert/git-oller.jpg';
import cer5 from '../../../public/cert/Curso básico de sql server.jpg';
import cer6 from '../../../public/cert/JavaFesat.png';


import { MdVerified } from "react-icons/md";

const projectsData = [
    {
        title: 'Back End Development and APIs',
        tools: 'Node.js | Express.js',
        description: 'Certificado de FreeCodeCamp',
        image: cer1,
        gitUrl: "",
        previewUrl: "https://www.freecodecamp.org/certification/EstebanOller/back-end-development-and-apis",
        docUrl: "",
    },
    {
        title: 'Responsive Web Design',
        tools: 'HTML & CSS',
        description: 'Certificado de FreeCodeCamp',
        image: cer2,
        gitUrl: "",
        previewUrl: "https://www.freecodecamp.org/certification/EstebanOller/responsive-web-design",
        docUrl: "",
    },
    {
        title: 'Semillero Quinto Impacto',
        tools: 'React.js | Axios | MaterialUI | Git | Trello & Jira',
        description: '',
        image: cer3,
        gitUrl: "",
        previewUrl: "",
        docUrl: "",
    },
    {
        title: 'Git con VSCode',
        tools: 'Git | VSCode',
        description: '',
        image: cer4,
        gitUrl: "",
        previewUrl: "",
        docUrl: "",
    },
    {
        title: 'SQL',
        tools: 'SQL',
        description: '',
        image: cer5,
        gitUrl: "",
        previewUrl: "",
        docUrl: "",
    },
    {
        title: 'Java',
        tools: 'Java',
        description: '',
        image: cer6,
        gitUrl: "",
        previewUrl: "",
        docUrl: "",
    },
];

function Page() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const [zoomLevel, setZoomLevel] = useState(1);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setModalOpen(false);
    };

    const handleModalClick = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            closeModal();
        }
    };

    const handleWheel = (e) => {
        e.preventDefault();
        const zoomDelta = e.deltaY > 0 ? 0.1 : -0.1; // Adjust the zoom speed as needed
        setZoomLevel((prevZoom) => Math.max(0.1, Math.min(prevZoom + zoomDelta, 3))); // Restrict zoom level between 0.1 and 3
    };
    return (
        <section className="min-h-[100vh] h-auto bg-gradient py-[100px] px-10">
            <h2 className="text-center text-4xl font-bold text-white my-4">
                Mis Certificaciones
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectsData.map((project, index) => (
                    <div key={index}>
                        <div className="text-white rounded-t-xl mt-3 bg-[#181818] px-4 cursor-pointer" onClick={() => openModal(project)}>
                            <h5 className="text-xl font-semibold mb-2">{project.title}</h5>
                        </div>
                        <div className="h-52 md:h-52 relative group shadow-md overflow-hidden flex justify-center items-center" onClick={() => openModal(project)}>
                            <Image src={project.image} layout="fill" objectFit="cover" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 cursor-pointer"></div>
                        </div>

                        <div className="bg-[#181818] rounded-b-xl px-4" onClick={() => openModal(project)}>
                            <div className="flex justify-center mt-4 py-2">
                                <div className="mx-2 text-white">
                                    {project.tools}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {modalOpen && selectedProject && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50 modal-overlay" onClick={closeModal}>
                        <div className="bg-[#1c1c1c] rounded-xl p-4 md:p-8 max-w-lg overflow-hidden relative" onClick={(e) => e.stopPropagation()}>
                            <button className="absolute top-4 right-4 text-gray-100 hover:text-[#00bd95]" onClick={closeModal}>
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
                                <div
                                    className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        overflow: 'hidden',
                                        cursor: 'zoom-in',
                                        position: 'relative',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        transform: `scale(${zoomLevel})`,
                                        transition: 'transform 0.5s ease',
                                    }}
                                    onWheel={handleWheel}
                                >
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h2 className="text-xl font-semibold text-white">{selectedProject.title}</h2>
                                    <p className="text-[#00bd95] mt-2">{selectedProject.tools}</p>
                                    {selectedProject.description && (
                                        <div>
                                            <h3 className="text-gray-200 mt-2">Descripcion:</h3>
                                            <p className="text-gray-400 text-base">{selectedProject.description}</p>
                                        </div>
                                    )}
                                    <div className="mt-4 flex flex-wrap">
                                        {/* {selectedProject.gitUrl && (
                                            <Link href={selectedProject.gitUrl} target="_blank" passHref className="text-white hover:text-[#00bd95]">
                                                <p className="btn btn-primary mb-2 mr-2" rel="noopener noreferrer">
                                                    GitHub
                                                </p>
                                            </Link>
                                        )} */}
                                        {selectedProject.previewUrl && (
                                            <Link href={selectedProject.previewUrl} target="_blank" passHref className="text-white hover:text-[#00bd95]">
                                                <p className="btn btn-primary mb-2 mr-2 flex items-center" rel="noopener noreferrer">
                                                    <MdVerified className="ml-1" />Verificar 
                                                </p>
                                            </Link>
                                        )}
                                        {selectedProject.docUrl && (
                                            <Link href={selectedProject.docUrl} target="_blank" passHref className="text-white hover:text-[#00bd95]">
                                                <p className="btn btn-primary mb-2" rel="noopener noreferrer">
                                                    Documentation
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
        </section>
    );
}

export default Page;
