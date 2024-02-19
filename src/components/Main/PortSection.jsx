"use client";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { FaLinkedin, FaReact, FaBackward, FaDatabase, FaRegFileCode, FaDownload, FaGithub, FaDocker } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { RiTestTubeFill } from "react-icons/ri";
import { SiAstro, SiNestjs } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const PortSection = () => {

    // const [animationLoaded, setAnimationLoaded] = useState(false);

    // useEffect(() => {
    //     // Cargar la biblioteca de animación de forma asíncrona
    //     import("react-type-animation").then(() => {
    //         setAnimationLoaded(true);
    //     }).catch(error => {
    //         console.error("Error al cargar la biblioteca de animación:", error);
    //     });
    // }, []);

    return (
        <section className="section-port text-white py-20 px-4 md:px-8">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <h2 className="subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mb-4">Hola, <span>soy</span></h2>

                <h1 className="text-4xl md:text-8xl font-bold items-center">Esteban Oller</h1>

                <h2 className="subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">Software <span className="text-[#38b388]">Developer.</span></h2>

                <div className="button-container flex flex-col sm:flex-row items-center mt-12">
                    <Link href="https://www.linkedin.com/in/esteban-oller-2b7a5a153/" target="_blank" className="button-link mb-4 sm:mb-0 mr-0 sm:mr-4">
                        <p className="flex items-center text-lg md:text-xl">
                            Contáctame
                            <FaLinkedin className="button-icon ml-2" />
                        </p>
                    </Link>
                    <Link href="/ruta-del-botón-2" target="_blank" className="button-link">
                        <p className="flex items-center text-lg md:text-xl">
                            Descargar CV
                            <FaDownload className="button-icon ml-2" />
                        </p>
                    </Link>
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
            </div>


            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
                <Link to="about-me" smooth duration={1000} >
                    <div className="flex justify-center items-center">
                        <p><FaChevronDown className="icon-down text-6xl" /></p>
                    </div>
                </Link>
            </div>

        </section>
    );
};

export default PortSection;
