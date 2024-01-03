// pages/games/game.js
import React from 'react';

function Proyecto() {

    const projects = [
        {
            title: 'Pixel Arcade',
            descripcion: 'Este proyecto utiliza tecnologías como React, Next.js y Tailwind CSS para... Herramientas utilizadas: React, Next.js, Tailwind CSS',
            imagen: 'https://zestebanz.github.io/my-gallery/public/img/projectos/7.png',
            urlManual: 'https://docs.google.com/document/d/1_Jb_JI4Jj-_6FTXbl5p5uq3rnNJLXApw7Fv-oP0p0Qc/edit?usp=sharing',
            urlDoc: 'https://docs.google.com/document/d/1PMzYSpLcjtN7fy9kQ1bZwXiEuCQWZYszcN49b00NCMk/edit?usp=sharing',
            urlGit: 'https://github.com/zEstebanz/pixel-arcade-mongodb.git'
        },
        {
            title: 'MendoPleg',
            descripcion: 'Este proyecto fue creado para una industria muy importante de Mendoza dedicada a la metalúrgica. Esta página web muestra los servicios de la empresa, sus últimos trabajos y una sección de contacto para que el usuario pueda comunicarse con la empresa.<br>Las tecnologías implementadas que se utilizaron en este proyecto son: HTML, JavaScript, Bootstrap.',
            imagen: 'https://zestebanz.github.io/my-gallery/public/img/projectos/1.png',
            urlHost: 'https://mendopleg.netlify.app/',
            urlGit: '',
            urlManual: '',
            urlDoc: ''
        },
        {
            title: 'FoodGo',
            descripcion: 'Este proyecto utiliza tecnologías como React, Next.js y Tailwind CSS para... Herramientas utilizadas: React, Next.js, Tailwind CSS',
            imagen: 'https://i.ibb.co/YQNzZN4/foodgo.jpg',
            urlHost: 'https://optimistic-fermat-9e3b0b.netlify.app/',
            urlGit: '',
            urlManual: '',
            urlDoc: ''
        },
        {
            title: 'Rick & Morty API',
            imagen: 'https://zestebanz.github.io/my-gallery/public/img/projectos/5.png',
            descripcion: '',
            urlHost: 'https://marvelous-lebkuchen-8fe5f7.netlify.app/',
            urlGit: '',
            urlManual: '',
            urlDoc: ''
        },
        {
            title: 'Rutinas Gym',
            imagen: 'https://zestebanz.github.io/my-gallery/public/img/projectos/9.png',
            descripcion: '',
            urlHost: 'https://training-gym-system.netlify.app/',
            urlGit: '',
            urlManual: '',
            urlDoc: ''
        },
        {
            title: 'Blog',
            imagen: 'https://zestebanz.github.io/my-gallery/public/img/projectos/8.png',
            descripcion: '',
            urlHost: 'https://documentacionpp2.netlify.app/',
            urlGit: '',
            urlManual: '',
            urlDoc: ''
        },
        {
            title: 'Blog de Café',
            descripcion: '',
            imagen: 'https://zestebanz.github.io/my-gallery/public/img/projectos/2.png',
            urlHost: 'https://optimistic-fermat-9e3b0b.netlify.app/',
            urlGit: '',
            urlManual: '',
            urlDoc: ''
        },
        {
            title: 'Frontend Store',
            descripcion: '',
            imagen: 'https://zestebanz.github.io/my-gallery/public/img/projectos/3.png',
            urlHost: 'https://frontend-store-70f6cc.netlify.app/',
            urlGit: '',
            urlManual: '',
            urlDoc: ''
        },
        {
            title: 'Pirateria Informática',
            imagen: 'https://zestebanz.github.io/my-gallery/public/img/projectos/4.png',
            descripcion: '',
            urlHost: 'https://cool-praline-b8d12c.netlify.app/',
            urlGit: '',
            urlManual: '',
            urlDoc: ''
        },
        {
            title: 'My Gallery',
            imagen: 'https://zestebanz.github.io/my-gallery/public/img/projectos/11.png',
            descripcion: '',
            urlHost: 'https://zestebanz.github.io/my-gallery/',
            urlGit: '',
            urlManual: '',
            urlDoc: ''
        },
    ];

    return (
        <main className='section-port h-auto min-h-screen'>
            <div className='port'>
                <h1 className="title text-white">Projects</h1>
                <p className="sub-title">Mis proyectos mas importantes</p>
            </div>
            <div className='p-8'>
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 p-8">
                        {projects.map((project, index) => (
                            <div key={index} className="boxCustom h-100 text-white p-4 rounded-lg shadow-lg">
                                <a
                                    href={`/project?imagen=${encodeURIComponent(project.imagen)}&title=${encodeURIComponent(project.title)}&descripcion=${encodeURIComponent(project.descripcion)}&urlManual=${encodeURIComponent(project.urlManual)}&urlDoc=${encodeURIComponent(project.urlDoc)}&urlGit=${encodeURIComponent(project.urlGit)}&urlHost=${encodeURIComponent(project.urlHost)}`}
                                >
                                    <h3 className="text-2xl font-bold text-center title-text">{project.title}</h3>
                                    <img
                                        src={project.imagen}
                                        className="block h-60 object-cover rounded-lg"
                                        alt={project.title}
                                    />
                                </a>
                                <div className="card-body mt-3 text-center">
                                    {/* <p className="text-gray-300">#</p> */}
                                    <a
                                        href={`/project?imagen=${encodeURIComponent(project.imagen)}&title=${encodeURIComponent(project.title)}&descripcion=${encodeURIComponent(project.descripcion)}&urlManual=${encodeURIComponent(project.urlManual)}&urlDoc=${encodeURIComponent(project.urlDoc)}&urlHost=${encodeURIComponent(project.urlHost)}`}
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