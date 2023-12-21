// pages/games/game.js
import React from 'react';

function Article() {

    const pdfLibraries = [
        {
            nombre: 'FoodGo',
            descripcion: 'Documentacion del proyecto FoodGo',
            url: 'https://docs.google.com/document/d/1XpOgEdDDbbbn2nr9s6MwrKSjviO_IaZ1clLgH-e7Z-k/edit?usp=sharing',
            imagen:'https://lh3.googleusercontent.com/pw/ADCreHfN_es9-cTOw_KM3lqd6ClPa4eOBB5xMMF9AlrSeKdoL6v72sQLauPaIgJlnaYEU__TtQ54xTmxnVfPoYPf2iRgBpNyut_cNuGzPZrVf7LfjOVnnxxxAqs1ttaO6VG3XHemchBXn46VrK3OlfE5i1j_wtfqqSV6TrQs2KENGQvdNDMuCZ91juHJWuLKqMw2RP0N9GQ-rgYRigtufWYKbzsYjEzNjWFwOanfRsWiLYIcY21-arn7PnY4mu4k9tKnpHu1NFay4As1RSfHLd4iGHKO0Q-8UShOBeYp47mAXv6PSDnPDg3bENQ_xkF5Y3w-FAEoHhu1aJrP1N_mt5MBbVj3RurcTqr9lwHqhAqpiYtXGY_4VL_AKtbWvwGBXM6gpOpAypARNTlYFKqaJaRQs-g2wg6Twh7Xg_pwPRKpwgt6FkEuJwTxdkpHJmtlyyHHlPo6VyVwZiOotmuIG27zTheLKgoFQu7fVFgmSU61bjWp6Jgvy7VMRkwo0a02TVq6egMNVxj7-J-m4dsSNbMgbSrm7smUblzG30GktAe-hd2P76cXOg9SNZZ0ZPvdHmKONA5O2nD1x3FoLd3PZjjnHehRQbwxLcACAGN_YT1-DKMm5a_ATcemfl8ZC__Vf403YJQ5n9M5Lcs5o96Bhng6Er73Hun4el_oV0drz4WGO_FH9OqcWPswIMaGnqaRTi2YHTqNKNmP3FZ7cshNcmmwl9qyHvLUcxUKT1mBL7jz1xKnNF61U7LJJbMDibeHJi25BapeggQaREw3f7QIs4suSXvAQpYSvCC3NmZVr__X1IinvhjHXo854FS9VV4yHlqeVoJa375p1fB71C70y3paB1I7wQRQM-J2O77Hwjo5tH5BH7u7ZI9jFdMfNvLPpzh60z93bBBC8fX9SoWxPiP5uPh9eIs92PS3qlQX4E8q52znTtod6lnKqSrdCSsC=w464-h657-s-no-gm?authuser=0'
        },
        {
            nombre:'Ubuntu Informe',
            descripcion:'Un Informe de Ubuntu',
            url:'https://docs.google.com/document/d/1ha_uXqHHTWKvWgNYsYEevZwJOngcAdibr_gac5pW00w/edit?usp=sharing',
            imagen:'https://lh3.googleusercontent.com/pw/ADCreHc_xHwPiBkUxAX8Kj-X6hClHRUe98yecb0_mOjTmD21xRFlfnK7y3AkZrh0IvRueeH98vmgAkwHiRLzPVnQ_dXLa_LQIoYivD4OH1G85HJiQDLZjVfVaNHBy_RWQX4h_xlZinkiLhJxC6W9fcKzehHbnLD_ubZO-k4xs8MgT8_Zp0KKG02UKDHjKCyi37aMOnzYwYYinF22TFkyV3LpJK_1vGCodEkpLgHw-ooWjfIBB5j6VfdQwFvky85I0FjwYdRwdQcqvGZvN3kP9B3dN-eel8IoxueT-m0bLhIcKbXHjIX2wYYJKpl8Tez9Ui75JD5KC2c3dNb3IstEU8OHGKdBXL0PhE3KfeaSzJANw2Iyxl5gjfUzAW59rJv6SH9ERh84EX1SmQbFygYXAhUEFxODgM_BzLCuOfsdBcEPlbPlbwXp53QwD4yIo9AcwcH-sT6794uZIEBbDApmh-nVxHzKcwBjZqmNlr3c1mntbTNZ4exjAmfzY_kQEAcScTNQxsw1GVmO2n6y5DGzuU2-79LmavVmzxlIYsg9aBNxQlb8L6P2XMXupZ2s0RebyKnlmDp3W7A-7cZv3SGzFs-FfINcNwE-71i7imzKpMsJDAreVgYFpFSvCbFxMOQ_W2FC1JhlbtbTTwjnHz8N8Sx-lZQ3BPaQ4xqEGw1sI3LcIWaDjSY-CcIr8evnKDc9j-CSzTrVSnwFLvVYsxmvET9l32eFuH6XZt85khSt1WHFdHv4YOxSKtrM_5T6WoIKUnJXotGlFszPOqa16RFyPkwHnVPLN8_7NnoBIIVqm4bTHQy8lRqt8PE3f2h2gurxCAN3Cnr_O1JfcwCK83KJPyS0F2juBE84zrmPAWcbEmuGJuGbty3M4VfSXRgKefguKb9MN97V2CH8YJ5TATIvMhXtUglBYpu-lQ0a9q4boVtD8Lbo_r2Yc-e1YAGtXQwP=w223-h316-no?authuser=0'

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