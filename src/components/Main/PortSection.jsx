"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { FaGithub, FaReact, FaBackward, FaDatabase, FaRegFileCode, FaDownload } from "react-icons/fa";
import { RiTestTubeFill } from "react-icons/ri";
import Image from "next/image";

const PortSection = () => {
    return (
        <section className="section-port">
            <h2 className='subtitle text-lg'>Hola, soy Esteban <span>Oller</span></h2>
            <div className="typing text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                <TypeAnimation
                    sequence={[
                        "Software Technician",
                        1000,
                        "Web Developer",
                        1000,
                        "UI/UX Designer",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </div>
            <div className="button-container flex mt-4">
                <Link href="/ruta-del-botón-1">
                    <p className="button-link flex items-center">
                        <FaGithub className="button-icon mr-2" />
                        GitHub
                    </p>
                </Link>
                <Link href="/ruta-del-botón-2">
                    <p className="button-link flex items-center ml-4">
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
                    <span className="flex items-center mt-2">
                        Estoy Aprendiendo:
                    </span>
                    <span className="flex items-center">
                        <RiTestTubeFill className="button-icon mr-2" /> Jest | React Testing Library.
                    </span>
                </p>
            </div>
        </section>
    );
};

export default PortSection;
