"use client"
import { Link } from "react-scroll";
import { FaReact, FaBackward, FaDatabase, FaRegFileCode, FaDownload, FaGithub, FaDocker, FaDiscord, FaUnity, FaExternalLinkAlt, FaCss3, FaLaravel } from 'react-icons/fa';
import { IoLogoJavascript, IoMdMail } from "react-icons/io";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaWindows, FaAngular, FaChevronDown } from "react-icons/fa";
import { RiJavascriptLine, RiTestTubeFill } from 'react-icons/ri';
import { SiAstro, SiCsharp, SiNestjs, SiNetlify, SiVercel } from 'react-icons/si';
import { LuMonitorSmartphone } from "react-icons/lu";
import { FcCommandLine } from "react-icons/fc";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FcLinux } from 'react-icons/fc';
import { FcFinePrint } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { TfiLayoutMediaOverlay } from "react-icons/tfi";
import { IoLogoVercel } from "react-icons/io5";
import { FaItchIo } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

import Image from "next/image";
import BlogProject from '../../../public/img/projects/blog.png';
import MendoPlegProject from '../../../public/img/mendopleg.png';
import UbuntuProject from '../../../public/img/projects/14.png';
import PixelArcadeProject from '../../../public/img/projects/7.png';

import avatar from "../../../public/img/yo.jpg";
import { GiClick } from 'react-icons/gi';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../app/styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MdOutlineSecurity } from "react-icons/md";

const PortSection = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <section className="section-port py-20 px-4 md:px-8 md:py-[110px]">
            <div className="wrapper">
                {/* My Contacts */}
                <div className="grid grid1">
                    <div className="header flex justify-center items-center">
                        <div className="flex items-center">
                            <a href="https://www.linkedin.com/in/esteban-oller-2b7a5a153/" target="_blank">
                                <FaLinkedin className="ml-4 md:ml-2 text-2xl md:text-6xl transition-transform transform hover:scale-110" />
                            </a>
                        </div>
                    </div>
                    <div className="header flex justify-center items-center">
                        <div className="flex items-center">
                            <a href="https://esteban-oller.itch.io/" target="_blank">
                                <FaItchIo className="ml-4 md:ml-2 text-2xl md:text-6xl transition-transform transform hover:scale-110" />
                            </a>
                        </div>
                    </div>
                    <div className="header flex justify-center items-center">
                        <div className="flex items-center">
                            <a href="mailto:estebanoller83@gmail.com">
                                <IoMdMail className="ml-4 md:ml-2 text-2xl md:text-6xl transition-transform transform hover:scale-110" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* About me */}
                <div className="grid grid2">
                    <div className="header rounded-2xl">
                        <Image src={avatar} alt="Descripción de la imagen" width="100" height="100" className="rounded-2xl" />
                        <div>
                            <h1>Esteban Oller</h1>
                            <h3>Técnico en <span>Software</span></h3>
                        </div>
                    </div>
                    <hr className='mx-8 border-[#00bd95]' />
                    <div className='about-me'>
                        <div className="pl-4 pt-6 sm:pt-2 ">
                            <h3 className="text-lg mt-2 font-semibold">Sobre Mí</h3>
                            <ul className="list-disc ml-8 text-base text-gray-300">
                                <li>Me Especializo en Desarrollo Web.</li>
                                <li>Experiencia en el stack <span className="text-[#47A248]">M</span>E<span className="text-[#61DAFB]">R</span><span className="text-[#339933]">N</span>.</li>
                                <li>Gestión de sistemas Linux.</li>
                                <li>Conocimientos sólidos en hardware informático.</li>
                                <li>Conocimientos en bases de datos.</li>
                            </ul>
                        </div>
                        <div className="px-4 pt-4 sm:pt-2 md:pb-0 pb-4">
                            <h3 className="mt-2 text-lg font-semibold">Experiencia en Desarrollo de Software</h3>
                            <ul className="ml-4">
                                <li className="mt-2">
                                    <span className="font-semibold text-base text-gray-300">Semillero de Quinto Impacto - Pasantías</span>
                                    <ul className="ml-4 text-gray-400">
                                        <li>Febrero - Mayo del 2024</li>
                                        <li>Miembro del equipo de <span className="text-[#61DBFB]">Frontend</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className='mx-8 border-[#00bd95]' />
                    <div className="text-white text-center mb-2 py-4">
                        <p>
                            ¡No dudes en{''}
                            <Link to="contact" smooth duration={3000} className="ml-2 text-[#38b388] hover:text-[#4da385] cursor-pointer">
                                contactarme!
                                <GiClick className="inline-block ml-1" />
                            </Link>
                        </p>
                    </div>
                </div>
                {/* My proyects */}
                <div className="grid grid3 relative">
                    <Swiper
                        spaceBetween={0}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,
                        }}
                        modules={[Autoplay]}
                        loop={true}
                        className="mySwiper w-full h-full rounded-tl-[16px] rounded-tr-[16px] overflow-hidden"
                    >
                        <SwiperSlide>
                            <div className="relative w-full h-full">
                                <div className="bg-black bg-opacity-10 absolute inset-0 rounded-xl"></div>
                                <Image src={BlogProject} className="w-full h-full object-cover" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-full">
                                <div className="bg-black bg-opacity-10 absolute inset-0 rounded-xl"></div>
                                <Image src={MendoPlegProject} className="w-full h-full object-cover" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-full">
                                <div className="bg-black bg-opacity-10 absolute inset-0 rounded-xl"></div>
                                <Image src={UbuntuProject} className="w-full h-full object-cover" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-full">
                                <div className="bg-black bg-opacity-10 absolute inset-0 rounded-xl"></div>
                                <Image src={PixelArcadeProject} className="w-full h-full object-cover" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="flex items-center justify-center">
                        <Link to="projects" smooth duration={1000} className="text-center px-4 py-2 text-white hover:text-teal-600 transition-transform font-bold cursor-pointer flex items-center">
                            <span>Mirar Proyectos</span>
                            <GoProjectSymlink className="text-2xl ml-2 transition-transform transform hover:scale-110" />
                        </Link>
                    </div>
                </div>
                {/* My GitHub */}
                <div rel="noopener noreferrer" className="grid grid4">
                    <div className="flex justify-between items-center mb-8">
                        <a href="https://github.com/zEstebanz" target="_blank">
                            <FaGithub className="text-4xl m-4 transition-transform transform hover:scale-110" />
                        </a>
                        <a href="https://github.com/zEstebanz" target="_blank">
                            <FaExternalLinkAlt className="text-2xl m-4 transition-transform transform hover:scale-110" />
                        </a>
                    </div>
                    <div className="m-2 pb-5 bg-black bg-opacity-50 rounded-xl">
                        <h1 className="text-white text-2xl font-bold ml-2">GitHub</h1>
                        <p className="text-white text-base ml-2">Mi repositorio de proyectos, pruebas y experimentos</p>
                    </div>
                </div>
                {/* My Skills */}
                <div className="grid grid5">
                    <p className="text-center pt-4 text-lg">Mis habilidades</p>
                    <div className="w-full md:mt-0 pl-4 skills py-4">
                        <div className="">
                            <div className="text-white items-center">

                                <p className="flex items-center">
                                    <RiJavascriptLine className="mr-2" /> JavaScript | TypeScript.
                                </p>
                                <p className="flex items-center">
                                    <FaReact className="mr-2" />React.js | Next.js | Vite.js
                                </p>
                                <p className="flex items-center">
                                    <FaCss3 className="mr-2" />HTML & CSS | Tailwind CSS | SASS.
                                </p>
                                <p className="flex items-center">
                                    <LuMonitorSmartphone className="mr-2" /> MaterialUI | Swipper | ShadcnUI.
                                </p>
                                <p className="flex items-center">
                                    <FaBackward className="mr-2" /> Node.js | Express.js | JAVA | PHP.
                                </p>
                                <p className="flex items-center">
                                    <FaDatabase className="mr-2" /> Mongo DB | MySQL.
                                </p>
                                <p className="flex items-center">
                                    <FaGithub className="mr-2" /> GitHub | <FaDocker className="mr-2 ml-2" /> Docker.
                                </p>

                                <p className="flex items-center">
                                    <FcLinux className="mr-2" /> Linux | <FaWindows className="mr-2 ml-2" />Windows.
                                </p>
                                <p className="flex items-center">
                                    <FaUnity className="mr-2" /> Unity | <SiCsharp className="mr-2 ml-2" />CSharp.
                                </p>
                                <p className="flex items-center">
                                    <SiVercel className="mr-2" /> Vercel | <SiNetlify className="mr-2 ml-2" />Netlify.
                                </p>
                            </div>

                            <div className="text-white pt-5 items-center">
                                <p className="flex items-center pb-4">
                                    <FcFinePrint className="mr-2" />Estoy Aprendiendo:
                                </p>
                                <p className="flex items-center">
                                    <RiTestTubeFill className="mr-2" /> Jest | React Testing Library.
                                </p>
                                <p className="flex items-center">
                                    <SiAstro className="mr-2" /> Astro | <SiNestjs className="mr-2 ml-2" /> Nest | <FaLaravel className="mr-2 ml-2" /> Laravel
                                </p>
                                <p className="flex items-center">
                                    <BiLogoSpringBoot className="mr-2" /> SpringBoot | <FaAngular className="mr-2 ml-2" /> Angular.
                                </p>
                                <p className="flex items-center">
                                    <MdOutlineSecurity className="mr-2" /> Ciberseguridad
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default PortSection;

{/* <div className="container mx-auto">
<div className="md:flex md:justify-between">
    <div className="md:w-1/2 lg:w-2/3">
        <h2 className="subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4">Hola, <span>soy</span></h2>
        <h1 className="text-4xl md:text-8xl font-bold">Esteban Oller</h1>
        <h2 className="subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Software <span className="text-[#38b388]">Developer.</span></h2>

        <div className="button-container flex flex-col sm:flex-row mt-12">
            <a href="https://www.linkedin.com/in/esteban-oller-2b7a5a153/" target="_blank" className="text-white button-link mb-4 sm:mb-0 mr-0 sm:mr-4">
                <p className="flex text-lg md:text-xl text-white">
                    Contáctame
                </p>
            </a>
        </div>
    </div>

    <div className="w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0 md:pl-8 skills md:py-[50px]">
        <div className="font-bold">
            <div className="text-white items-center">
                <p>Mis Habilidades:</p>

                <p className="flex items-center">
                    <FaRegFileCode className="mr-2" />HTML & CSS | JavaScript | TypeScript.
                </p>
                <p className="flex items-center">
                    <FaReact className="mr-2" />React.js | Next.js | Tailwind CSS | SASS.
                </p>
                <p className="flex items-center">
                    <FaBackward className="mr-2" /> Node.js | Express.js | Java.
                </p>
                <p className="flex items-center">
                    <FaDatabase className="mr-2" /> Mongo DB | MySQL.
                </p>
                <p className="flex items-center">
                    <FaGithub className="mr-2" /> GitHub | <FaDocker className="mr-2 ml-2" /> Docker.
                </p>

                <p className="flex items-center">
                    <FcLinux className="mr-2" /> Linux. | <FaWindows className="mr-2 ml-2" />Windows
                </p>
            </div>

            <div className="text-white pt-5 items-center">
                <p>
                    Estoy Aprendiendo:
                </p>
                <p className="flex items-center">
                    <RiTestTubeFill className="mr-2" /> Jest | React Testing Library.
                </p>
                <p className="flex items-center">
                    <SiAstro className="mr-2" /> Astro | <SiNestjs className="mr-2" /> Nest.
                </p>
            </div>
        </div>
    </div>
</div>

<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
    <Link to="about-me" smooth duration={1000}>
        <div className="flex justify-center items-center">
            <FaChevronDown className="icon-down text-6xl text-white" />
        </div>
    </Link>
</div>
</div> */}