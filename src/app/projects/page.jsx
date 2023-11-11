// pages/games/game.js
import React from 'react';

function Proyecto() {

    const projects = [
        {
            title: 'Pixel Arcade',
            url: '',
            imagen: 'https://cdna.artstation.com/p/assets/images/images/058/101/014/original/yurii-ray-mint-white.gif?1673382715'
        },
    ];

    return (
        <main className='section-port'>
            <div className='port'>
                <h1 className="title text-white">Projects</h1>
                <p className="sub-title">Mis proyectos mas importantes</p>
            </div>
            <div className='p-8'>
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 p-8">
                        {projects.map((project, index) => (
                            <div key={index} className="boxGameCustom h-100 bg-gray-900 text-white p-4 rounded-lg shadow-lg">
                                <a
                                    href={`/project?imagen=${encodeURIComponent(project.imagen)}&title=${encodeURIComponent(project.title)}`}
                                >
                                    <h3 className="text-2xl font-bold text-center">{project.title}</h3>
                                    <img
                                        src={project.imagen}
                                        className="block w-full h-60 object rounded-lg"
                                        alt={project.title}
                                    />
                                      </a>
                                <div className="card-body mt-3">
                                    {/* <p className="text-gray-300">#</p> */}
                                    <a
                                        href={`/project?imagen=${encodeURIComponent(project.imagen)}&title=${encodeURIComponent(project.title)}`}
                                        className="buttonCustom text-white mt-2 py-1 px-4 rounded-full inline-block"
                                    >
                                        Examinar
                                    </a>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Proyecto;