"use client"
import React from 'react'
import { Link } from 'react-scroll'
import { GiClick } from "react-icons/gi";
import { FaReact, FaBackward, FaDatabase, FaRegFileCode, FaDownload, FaGithub, FaDocker } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { RiTestTubeFill } from "react-icons/ri";
import { SiAstro, SiNestjs } from "react-icons/si";
import { FcLinux } from "react-icons/fc";

function AboutMe() {
    return (
        <section className="section-sec mx-5" id='about-me'>

            <h2 className="text-center text-4xl font-bold text-white mb-8">
                Sobre Mí
            </h2>

            <div className="font-bold text-lg">

                <div className="text-white mb-2">
                    <p>
                        Soy estudiante avanzado de desarrollo de software. Con experiencia en desarrollo frontend y backend. Puedes ver algunos de mis
                        <Link to="projects" smooth duration={1500} className="ml-2 text-[#38b388] cursor-pointer">
                            proyectos
                            <GiClick className="inline-block ml-1" />
                        </Link>
                    </p>
                </div>

                <p className="text-white mb-2">Soy autodidacta con el aprendizaje continuo. Siempre estoy buscando mejorar mis habilidades y aprender nuevas tecnologías para seguir siendo relevante en el cambiante campo del desarrollo de software.</p>

                <div className="text-white mb-2">
                    <p>¡No dudes en
                        <Link to="contact" smooth duration={3000} className="ml-2 text-[#38b388] cursor-pointer">
                            contactarme!
                            <GiClick className="inline-block ml-1" />
                        </Link>
                    </p>
                </div>
            </div>

            <div className="pt-5 font-bold">
                <p className="text-white">
                    <span className="flex items-center mt-2">
                        Mis Habilidades:
                    </span>
                    <span className="flex items-center">
                        <FaRegFileCode className="button-icon mr-2" />HTML & CSS | JavaScript | TypeScript.
                    </span>
                </p>
                <p className="text-white">
                    <span className="flex items-center">
                        <FaReact className="button-icon mr-2" />React.js | Next.js | Tailwind CSS | SASS.
                    </span>
                </p>
                <p className="text-white">
                    <span className="flex items-center">
                        <FaBackward className="button-icon mr-2" /> Node.js | Express.js | Java.
                    </span>
                </p>
                <p className="text-white">
                    <span className="flex items-center">
                        <FaDatabase className="button-icon mr-2" /> Mongo DB | MySQL.
                    </span>
                </p>
                <p className="text-white">
                    <span className="flex items-center">
                        <FaGithub className="button-icon mr-2" /> GitHub | <FaDocker className="button-icon mr-2 ml-2" /> Docker | <FcLinux className="button-icon mr-2 ml-2" /> Linux.
                    </span>
                </p>
                <p className="text-white">
                    <span className="flex items-center mt-2">
                        Estoy Aprendiendo:
                    </span>
                    <span className="flex items-center">
                        <RiTestTubeFill className="button-icon mr-2" /> Jest | React Testing Library.
                    </span>
                    <span className="flex items-center">
                        <SiAstro className="button-icon mr-2" /> Astro | <SiNestjs className="button-icon mr-2 ml-2" />Nest.
                    </span>
                </p>

                <Link to="projects" smooth duration={1000}>
                    <div className="flex justify-center items-center mt-[100px] md:mt-2">
                        <p><FaChevronDown className="icon-down text-6xl" /></p>
                    </div>
                </Link>
            </div>

        </section>
    )
}

export default AboutMe