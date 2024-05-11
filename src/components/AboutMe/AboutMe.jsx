"use client"

import React from 'react';
import { Link } from 'react-scroll';
import { GiClick } from 'react-icons/gi';
import { FaReact, FaBackward, FaDatabase, FaRegFileCode, FaDownload, FaGithub, FaDocker,FaAngular } from 'react-icons/fa';
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaWindows } from "react-icons/fa";
import { RiTestTubeFill } from 'react-icons/ri';
import { SiAstro, SiNestjs } from 'react-icons/si';
import { FcLinux } from 'react-icons/fc';

function AboutMe() {
    return (
        <section className="section-sec mx-5" id='about-me'>
            <div className='box-about-me'>
                <h2 className="text-4xl font-bold text-white mb-8">
                    Sobre Mí
                </h2>
                <div className="flex flex-wrap justify-between items-start">
                    <div className="w-full md:w-2/3">
                        <div className="font-bold text-lg">
                            <div className="text-white mb-2">
                                <p>
                                    Soy estudiante avanzado de desarrollo de software. Con experiencia en desarrollo frontend y backend. Puedes ver algunos de mis{' '}
                                    <Link to="projects" smooth duration={1500} className="ml-2 text-[#38b388] cursor-pointer">
                                        proyectos
                                        <GiClick className="inline-block ml-1" />
                                    </Link>
                                </p>
                            </div>
                            <p className="text-white mb-2">
                                Soy autodidacta con el aprendizaje continuo. Siempre estoy buscando mejorar mis habilidades y aprender nuevas tecnologías para seguir siendo relevante en el cambiante campo del desarrollo de software.
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
                                <p className="flex items-center">
                                    <BiLogoSpringBoot className="mr-2" /> SpringBoot | <FaAngular  className="mr-2" /> Angular.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}

export default AboutMe;
