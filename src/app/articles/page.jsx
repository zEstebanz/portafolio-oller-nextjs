// pages/games/game.js
import React from 'react';

function Article() {

    const pdfLibraries = [
        {
            nombre: 'FoodGo',
            descripcion: 'Documentacion del proyecto FoodGo',
            url: 'https://docs.google.com/document/d/1XpOgEdDDbbbn2nr9s6MwrKSjviO_IaZ1clLgH-e7Z-k/edit?usp=sharing',
            imagen: 'https://lh3.googleusercontent.com/pw/ADCreHfN_es9-cTOw_KM3lqd6ClPa4eOBB5xMMF9AlrSeKdoL6v72sQLauPaIgJlnaYEU__TtQ54xTmxnVfPoYPf2iRgBpNyut_cNuGzPZrVf7LfjOVnnxxxAqs1ttaO6VG3XHemchBXn46VrK3OlfE5i1j_wtfqqSV6TrQs2KENGQvdNDMuCZ91juHJWuLKqMw2RP0N9GQ-rgYRigtufWYKbzsYjEzNjWFwOanfRsWiLYIcY21-arn7PnY4mu4k9tKnpHu1NFay4As1RSfHLd4iGHKO0Q-8UShOBeYp47mAXv6PSDnPDg3bENQ_xkF5Y3w-FAEoHhu1aJrP1N_mt5MBbVj3RurcTqr9lwHqhAqpiYtXGY_4VL_AKtbWvwGBXM6gpOpAypARNTlYFKqaJaRQs-g2wg6Twh7Xg_pwPRKpwgt6FkEuJwTxdkpHJmtlyyHHlPo6VyVwZiOotmuIG27zTheLKgoFQu7fVFgmSU61bjWp6Jgvy7VMRkwo0a02TVq6egMNVxj7-J-m4dsSNbMgbSrm7smUblzG30GktAe-hd2P76cXOg9SNZZ0ZPvdHmKONA5O2nD1x3FoLd3PZjjnHehRQbwxLcACAGN_YT1-DKMm5a_ATcemfl8ZC__Vf403YJQ5n9M5Lcs5o96Bhng6Er73Hun4el_oV0drz4WGO_FH9OqcWPswIMaGnqaRTi2YHTqNKNmP3FZ7cshNcmmwl9qyHvLUcxUKT1mBL7jz1xKnNF61U7LJJbMDibeHJi25BapeggQaREw3f7QIs4suSXvAQpYSvCC3NmZVr__X1IinvhjHXo854FS9VV4yHlqeVoJa375p1fB71C70y3paB1I7wQRQM-J2O77Hwjo5tH5BH7u7ZI9jFdMfNvLPpzh60z93bBBC8fX9SoWxPiP5uPh9eIs92PS3qlQX4E8q52znTtod6lnKqSrdCSsC=w464-h657-s-no-gm?authuser=0'
        },
        {
            nombre: 'Ubuntu Informe',
            descripcion: 'Un Informe de Ubuntu',
            url: 'https://scontent.fmdz4-1.fna.fbcdn.net/v/t39.30808-6/415765983_350782364245947_4822594384801323096_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=xrM8F31WG5oAX-gBmuU&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfAPj90CKZZEU8YMbwSnzB0mZnCgI76e1IBrgn3VMnaHIg&oe=65941BE4',
            imagen: 'https://scontent.fmdz4-1.fna.fbcdn.net/v/t39.30808-6/415763468_350780517579465_5740587106392361834_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=NIiE4_a7NRAAX90mGA4&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfA3UOUbhzdiR6OCKO5-6HrLmv2rYGuAoavsMY-iRZ43Xg&oe=65936067'

        }
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