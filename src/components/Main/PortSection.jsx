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

    const [animationLoaded, setAnimationLoaded] = useState(false);

    useEffect(() => {
        // Cargar la biblioteca de animación de forma asíncrona
        import("react-type-animation").then(() => {
            setAnimationLoaded(true);
        }).catch(error => {
            console.error("Error al cargar la biblioteca de animación:", error);
        });
    }, []);

    return (
        <section className="section-port" id="home">
            <h2 className='subtitle text-lg'>Hola, soy Esteban <span>Oller</span></h2>
            {animationLoaded && (
                <div className="typing text-4xl sm:text-4xl md:text-6xl xl:text-8xl ">
                    <TypeAnimation
                        sequence={[
                            "Técnico software",
                            1000,
                            "Desarrollador web",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
            )}
            <div className="button-container flex mt-8 md:mt-4">
                <Link href="https://www.linkedin.com/in/esteban-oller-2b7a5a153/" target="_blank">
                    <p className="button-link flex items-center ml-4 text-[15px] md:text-lg">
                        <FaLinkedin className="button-icon mr-2" />
                        Contáctame
                    </p>
                </Link>
                <Link href="/ruta-del-botón-2" target="_blank">
                    <p className="button-link flex items-center ml-4 text-[15px] sm:text-4x md:text-lg">
                        Descargar CV
                        <FaDownload className="button-icon ml-2" />
                    </p>
                </Link>
            </div>

            <div className="pt-5">
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
    );
};

export default PortSection;
