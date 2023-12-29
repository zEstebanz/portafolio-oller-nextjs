// pages/games/game.js
import React from 'react';

function Proyecto() {

    const projects = [
        {
            title: 'Pixel Arcade',
            descripcion: 'Este proyecto utiliza tecnologías como React, Next.js y Tailwind CSS para... Herramientas utilizadas: React, Next.js, Tailwind CSS',
            imagen: 'https://scontent.fmdz4-1.fna.fbcdn.net/v/t39.30808-6/415740282_350776470913203_8597685514091592960_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=R0PB1rcE9NMAX8MMprO&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfCuZ09K1bO_qGlPMwHrk4V7XQIsYCtZZ9VVuK9LU3T2TA&oe=659387DD',
            urlManual: 'https://docs.google.com/document/d/1_Jb_JI4Jj-_6FTXbl5p5uq3rnNJLXApw7Fv-oP0p0Qc/edit?usp=sharing',
            urlDoc: 'https://docs.google.com/document/d/1PMzYSpLcjtN7fy9kQ1bZwXiEuCQWZYszcN49b00NCMk/edit?usp=sharing',
            urlGit: 'https://github.com/zEstebanz/pixel-arcade-mongodb.git'
        },
        {
            title: 'MendoPleg',
            descripcion: 'Este proyecto fue creado para una industria muy importante de Mendoza dedicada a la metalúrgica. Esta página web muestra los servicios de la empresa, sus últimos trabajos y una sección de contacto para que el usuario pueda comunicarse con la empresa.<br>Las tecnologías implementadas que se utilizaron en este proyecto son: HTML, JavaScript, Bootstrap.',
            imagen: 'https://scontent.fmdz4-1.fna.fbcdn.net/v/t39.30808-6/415753801_350776354246548_8682910425208264965_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=R0jbU20hZUQAX8v_UIE&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfBG-C5h-wGkVFVkq3RIVvYM465ch7WaZhzTzGORGtHUBQ&oe=6594CDDC',
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
            imagen: 'https://scontent.fmdz5-1.fna.fbcdn.net/v/t39.30808-6/415742483_350776407579876_5097671586742975392_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=iiU8_K-PADEAX_SSYQn&_nc_ht=scontent.fmdz5-1.fna&oh=00_AfDjlMWbeApVfQp8xdF7QmKSHrNnpx8aolyWUczp94IUIg&oe=659386EA',
            descripcion: '',
            urlHost: 'https://marvelous-lebkuchen-8fe5f7.netlify.app/',
            urlGit: '',
            urlManual: '',
            urlDoc: ''
        },
        {
            title: 'Rutinas Gym',
            imagen: 'https://scontent.fmdz5-1.fna.fbcdn.net/v/t39.30808-6/415781275_350776527579864_4669061884079850274_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=TDLxICFsSJ0AX-djxrh&_nc_ht=scontent.fmdz5-1.fna&oh=00_AfDdzvD46MhEVX-86f3bdb51lg7peD7uVzD--NZqDM6wJg&oe=6593990C',
            descripcion: '',
            urlHost: 'https://training-gym-system.netlify.app/',
            urlGit: '',
            urlManual: '',
            urlDoc: ''
        },
        {
            title: 'Blog',
            imagen: 'https://scontent.fmdz4-1.fna.fbcdn.net/v/t39.30808-6/415759671_350776484246535_3878285665071901903_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=pdOlu58nfJwAX_m_y6G&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfCsyGeP084w9e0cGmqMVHSQs6VNUHVqX6eYIDnWRM8ezA&oe=6594A8E6',
            descripcion: '',
            urlHost: 'https://documentacionpp2.netlify.app/',
            urlGit: '',
            urlManual: '',
            urlDoc: ''
        },
        {
            title: 'Blog de Café',
            descripcion: '',
            imagen: 'https://scontent.fmdz4-1.fna.fbcdn.net/v/t39.30808-6/415805946_350776340913216_667814552696981863_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=0JvhZj72kvIAX-DK7-9&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfDw3_QtLqQiiN3Dx1Mr9vvr67ULbRSlns-lvxPSI1uo6A&oe=65938EEF',
            urlHost: 'https://optimistic-fermat-9e3b0b.netlify.app/',
            urlGit: '',
            urlManual: '',
            urlDoc: ''
        },
        {
            title: 'Frontend Store',
            descripcion: '',
            imagen: 'https://scontent.fmdz5-1.fna.fbcdn.net/v/t39.30808-6/415742444_350776320913218_3049016215416342035_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=dz_Pc_4qNwQAX8ir2UU&_nc_ht=scontent.fmdz5-1.fna&oh=00_AfA_vyw79OJYMHxW2guCKhCWFvWzMPkKDFBCAc2unEuOmg&oe=65941CF3',
            urlHost: 'https://frontend-store-70f6cc.netlify.app/',
            urlGit: '',
            urlManual: '',
            urlDoc: ''
        },
        {
            title: 'Pirateria Informática',
            imagen: 'https://scontent.fmdz4-1.fna.fbcdn.net/v/t39.30808-6/415789487_350776390913211_2852291986553563138_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=xAG7TdR9gQgAX8Knd0X&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfAql6z60YkrjoJPVDKbulbaMiNh3frHSjf-39CLZHkZXg&oe=6594024C',
            descripcion: '',
            urlHost: 'https://cool-praline-b8d12c.netlify.app/',
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