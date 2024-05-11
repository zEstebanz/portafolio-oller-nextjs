"use client"
import { Link } from "react-scroll";
<<<<<<< HEAD
import { FaReact, FaBackward, FaDatabase, FaRegFileCode, FaDownload, FaGithub, FaDocker, FaDiscord, FaUnity, FaExternalLinkAlt } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaWindows, FaAngular, FaChevronDown } from "react-icons/fa";
import { RiTestTubeFill } from 'react-icons/ri';
import { SiAstro, SiCsharp, SiNestjs } from 'react-icons/si';
import { FcCommandLine } from "react-icons/fc";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FcLinux } from 'react-icons/fc';
import { FcFinePrint } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { TfiLayoutMediaOverlay } from "react-icons/tfi";

import Image from "next/image";
import BlogProject from '../../../public/img/projects/blog.png';
import MendoPlegProject from '../../../public/img/projects/1.png';
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
=======
import { FaChevronDown } from 'react-icons/fa';

const PortSection = () => {
    return (
        <section className="section-port text-white py-20 px-4 md:px-8 md:py-[200px]">
            <div className="container mx-auto">
                
                <div className="md:flex md:justify-between">
                    <div className="md:w-1/2 lg:w-2/3">
                        <h2 className="subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4">Hola, <span>soy</span></h2>
                        <h1 className="text-4xl md:text-8xl font-bold">Esteban Oller</h1>
                        <h2 className="subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Software <span className="text-[#38b388]">Developer.</span></h2>
>>>>>>> 6ba21f21b1e7d35a4d80cb5f3ba3d5e93638f180

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <section className="section-port py-20 px-4 md:px-8 md:py-[110px]">
            <div className="wrapper">

                <div className="grid grid1">
                    <div className="header flex justify-center items-center">
                        <div className="flex items-center">
                            <FaLinkedin className="ml-4 md:ml-2 text-2xl md:text-6xl transition-transform transform hover:scale-110" />
                        </div>
                    </div>
<<<<<<< HEAD
                    <div className="header flex justify-center items-center">
                        <div className="flex items-center">
                            <FaDiscord className="ml-4 md:ml-2 text-2xl md:text-6xl transition-transform transform hover:scale-110" />
                        </div>
                    </div>
                    <div className="header flex justify-center items-center">
                        <div className="flex items-center">
                            <IoMdMail className="ml-4 md:ml-2 text-2xl md:text-6xl transition-transform transform hover:scale-110" />
                        </div>
                    </div>
                </div>

                <div className="grid grid2">
                    <div className="header">
                        <Image src={avatar} alt="Descripción de la imagen" width="100" height="100" />
                        <div>
                            <h1>Esteban Oller</h1>
                            <h3>Técnico en <span>Software</span></h3>
                        </div>
                    </div>
                    <hr className='mx-8 border-[#00bd95]' />
                    <div className='about-me'>
                        <div className="text-lg px-4 pt-6 sm:pt-0">
                            <p className='mb-2 text-[16px]'>
                                Soy Técnico en Software y me he especializado en desarrollo web. Además, tengo experiencia en áreas diversas, incluyendo bases de datos, desarrollo de juegos en Unity 2D, administración de sistemas Linux atraves de maquinas virtuales y uso de herramientas como Docker. También tengo conocimientos en hardware de computadoras, lo que me permite mantener infraestructuras de hardware de manera efectiva.
                            </p>
                            <p className="text-white mb-2">
                                Me esfuerzo por mantenerme actualizado y aprender habilidades nuevas. En este momento, estoy interesado en aprender más sobre el mundo de la ciberseguridad.
                            </p>
                            <div className="text-white mb-2">
                                <p>
                                    ¡No dudes en{' '}
                                    <Link to="contact" smooth duration={8000} className="ml-2 text-[#38b388] cursor-pointer">
                                        contactarme!
                                        <GiClick className="inline-block ml-1" />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid3 relative">
                    <div className="py-4">
                        <p className="text-center text-lg">
                            Mis Proyectos
                        </p>
                    </div>
                    <Swiper
                        spaceBetween={0}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,
                        }}
                        modules={[Autoplay]}
                        loop={true}
                        className="mySwiper absolute top-0 left-0 w-[90%] h-[90%] rounded-xl overflow-hidden"
                    >
                        <SwiperSlide>
                            <div className="relative">
                                <div className="bg-black bg-opacity-50 absolute inset-0 rounded-xl"></div>
                                <Image src={BlogProject} className="w-full h-full" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative">
                                <div className="bg-black bg-opacity-50 absolute inset-0 rounded-xl"></div>
                                <Image src={MendoPlegProject} className="w-full h-full" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative">
                                <div className="bg-black bg-opacity-50 absolute inset-0 rounded-xl"></div>
                                <Image src={UbuntuProject} className="w-full h-full" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative">
                                <div className="bg-black bg-opacity-50 absolute inset-0 rounded-xl"></div>
                                <Image src={PixelArcadeProject} className="w-full h-full" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="flex items-center justify-center absolute inset-0 z-10">
                        <Link to="projects" smooth duration={1000} className="bg-[#00bd95] hover:bg-[#00bd94c1] border-solid border-4 border-[#222] rounded-lg px-4 py-2 text-white font-bold cursor-pointer">
                            Mirar Proyectos
                        </Link>
                    </div>
                </div>

                <div rel="noopener noreferrer" className="grid grid4 hover:scale-105">
                    <div className="flex justify-between items-center mb-8">
                        <Link href="https://github.com/zEstebanz">
                            <FaGithub className="text-4xl m-4 transition-transform transform hover:scale-110" />
                        </Link>
                        <Link href="https://github.com/zEstebanz">
                            <FaExternalLinkAlt className="text-2xl m-4 transition-transform transform hover:scale-110" />
                        </Link>
                    </div>
                    <div className="m-2 pb-5 bg-black bg-opacity-50 rounded-xl">
                        <h1 className="text-white text-2xl font-bold ml-2">GitHub</h1>
                        <p className="text-white text-base ml-2">Mi repositorio de proyectos, pruebas y experimentos</p>
                    </div>
                </div>

                <div className="grid grid5">
                    <p className="text-center pt-4 text-lg">Mis habilidades</p>
                    <div className="w-full md:mt-0 pl-4 skills py-4 md:py-[16px]">
                        <div className="">
                            <div className="text-white items-center">

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
                                <p className="flex items-center">
                                    <FaUnity className="mr-2" /> Unity. | <SiCsharp className="mr-2 ml-2" />CSharp
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
                                    <SiAstro className="mr-2" /> Astro | <SiNestjs className="mr-2" /> Nest.
                                </p>
                                <p className="flex items-center">
                                    <BiLogoSpringBoot className="mr-2" /> SpringBoot | <FaAngular className="mr-2" /> Angular.
                                </p>
                                <p className="flex items-center">
                                    <MdOutlineSecurity className="mr-2" /> Ciberseguridad
                                </p>
                            </div>
                        </div>
                    </div>
=======
>>>>>>> 6ba21f21b1e7d35a4d80cb5f3ba3d5e93638f180
                </div>
                {/* <div className="grid grid6">6</div>
                <div className="grid grid7">7</div>
                <div className="grid grid8">8</div> */}
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