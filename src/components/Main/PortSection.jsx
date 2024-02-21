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
                    <a href="https://www.linkedin.com/in/esteban-oller-2b7a5a153/" target="_blank" className="text-white button-link mb-4 sm:mb-0 mr-0 sm:mr-4">
                        <p className="flex items-center text-lg md:text-xl">
                            Contáctame
                            <FaLinkedin className="button-icon ml-2" />
                        </p>
                    </a>
                    <a href="https://drive.google.com/file/d/1DY0P0PczrwATUi2nwoehHCGwjuqyLBrv/view?usp=sharing" target="_blank" className="text-white button-link mb-4 sm:mb-0 mr-0 sm:mr-4">
                        <p className="flex items-center text-lg md:text-xl">
                            Descargar CV
                            <FaDownload className="button-icon ml-2" />
                        </p>
                    </a>
                </div>

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
