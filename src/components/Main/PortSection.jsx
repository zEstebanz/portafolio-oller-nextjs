"use client"
import { Link } from "react-scroll";
import { FaReact, FaBackward, FaDatabase, FaRegFileCode, FaDownload, FaGithub, FaDocker } from 'react-icons/fa';
import { FaWindows } from "react-icons/fa";
import { FaChevronDown } from 'react-icons/fa';
import { RiTestTubeFill } from 'react-icons/ri';
import { SiAstro, SiNestjs } from 'react-icons/si';
import { FcLinux } from 'react-icons/fc';

const PortSection = () => {
    return (
        <section className="section-port text-white py-20 px-4 md:px-8 md:py-[200px]">
            <div className="container mx-auto">
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
            </div>

        </section>
    );
};

export default PortSection;
