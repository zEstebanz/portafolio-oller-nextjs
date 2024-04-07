"use client"

import React from 'react';
import { Link } from 'react-scroll';
import { GiClick } from 'react-icons/gi';


function AboutMe() {
    return (
        <section className="section-sec mx-5" id='about-me'>
            <div className='box-about-me'>
                <h2 className="text-center text-4xl font-bold text-white mb-8">
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

                    

                </div>
            </div>
        </section>

    );
}

export default AboutMe;
