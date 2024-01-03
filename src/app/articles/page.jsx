// pages/games/game.js
import React from 'react';

function Article() {

    const pdfLibraries = [
        {
            nombre: 'FoodGo',
            descripcion: 'Documentacion del proyecto FoodGo',
            url: 'https://docs.google.com/document/d/1XpOgEdDDbbbn2nr9s6MwrKSjviO_IaZ1clLgH-e7Z-k/edit?usp=sharing',
            imagen: 'https://zestebanz.github.io/my-gallery/public/img/articulos/Documentacion%20-%20FoodGo.png'
        },
        {
            nombre: 'Ubuntu Informe',
            descripcion: 'Un Informe de Ubuntu',
            url: 'https://scontent.fmdz4-1.fna.fbcdn.net/v/t39.30808-6/415765983_350782364245947_4822594384801323096_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=xrM8F31WG5oAX-gBmuU&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfAPj90CKZZEU8YMbwSnzB0mZnCgI76e1IBrgn3VMnaHIg&oe=65941BE4',
            imagen: 'https://zestebanz.github.io/my-gallery/public/img/articulos/Ubuntu%20Informe.png'
        },
        {
            nombre: 'Diccionario Tailwind',
            descripcion: 'Un diccionario de Tailwind con las clases mas importantes',
            url: 'https://docs.google.com/document/d/1gPSlTP7o-rQ-XLmpCgdbixjYTHCKFCyg880UI5e-TA8/edit?usp=sharing',
            imagen: 'https://zestebanz.github.io/my-gallery/public/img/articulos/Diccionario%20Tailwind.png'
        },
    ];

    return (
        <main className='section-port'>
            <div className='port'>
                <h1 className="title text-white">Articulo</h1>
                <p className="sub-title">Mis bibliotecas de PDF más importantes</p>
            </div>
            <div className='p-8'>
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 p-8">
                        {pdfLibraries.map((library, index) => (
                            <div key={index} className="boxLibraryCustom h-auto bg-gray-900 text-white p-4 rounded-lg shadow-lg">
                                <a
                                    href={library.url}
                                    className="flex flex-col items-center justify-center h-full"
                                    target='_blank'
                                >
                                    <h3 className="text-2xl font-bold mb-2">{library.nombre}</h3>
                                    {/* Puedes agregar una imagen de representación de la biblioteca aquí si lo deseas */}
                                    <img
                                        src={library.imagen}
                                        className="block h-60 object-cover rounded-lg mb-2"
                                        alt={library.nombre}
                                    />
                                    <p className="text-gray-300">{library.descripcion}</p>
                                    <div className="card-body mt-3 text-center">
                                        <a
                                            href={library.url}
                                            className="buttonCustom text-white mt-4 py-2 px-6 rounded-full inline-block"
                                            target='_blank'
                                        >
                                            Examinar
                                        </a>
                                    </div>
                                </a>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Article;