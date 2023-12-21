// Importa las librerías necesarias
"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

function Project() {
    const [titulo, setProductoTitulo] = useState('');
    const [imagen, setProductoImagen] = useState('');
    const [descripcion, setProductoDescripcion] = useState('');
    const [urlManual, setProductoUrlManual] = useState('');
    const [urlDoc, setProductoUrlDoc] = useState('');
    const [urlGit, setProductoUrlGit] = useState('');
    const [urlHost, setProductoUrlHost] = useState('');


    useEffect(() => {
        // Acceder a la URL y otros parámetros de la página
        const queryParams = new URLSearchParams(window.location.search);
        const titulo = queryParams.get('title');
        const imagen = queryParams.get('imagen');
        const descripcion = queryParams.get('descripcion');
        const urlManual = queryParams.get('urlManual');
        const urlDoc = queryParams.get('urlDoc');
        const urlGit = queryParams.get('urlGit');
        const urlHost = queryParams.get('urlHost');


        if (titulo) {
            setProductoTitulo(titulo);
        }
        if (imagen) {
            setProductoImagen(imagen);
        }
        if (descripcion) {
            setProductoDescripcion(descripcion);
        }
        if (urlManual) {
            setProductoUrlManual(urlManual);
        }
        if (urlDoc) {
            setProductoUrlDoc(urlDoc);
        }
        if (urlGit) {
            setProductoUrlGit(urlGit);
        }
        if (urlHost) {
            setProductoUrlHost(urlHost);
        }
    }, []);

    return (
        <section className='section-port'>
            <div className='port'>
                <h1 className='title'>{titulo}</h1>

                <div className="mb-4 flex items-center justify-center">
                    {/* Imagen del proyecto */}
                    <img
                        src={imagen}
                        alt={titulo}
                        className="block h-80 object-cover rounded-lg"
                        layout="responsive"
                    />
                </div>
                <div className="mb-4 flex items-center justify-center p-8">
                    {descripcion && (
                        <p className="mb-4 text-center text-white">{descripcion}</p>
                    )}
                </div>

                {/* Botones al centro */}
                <div className="flex justify-center space-x-4">
                    {urlManual && (
                        <Link href={urlManual} className="buttonCustom text-white px-4 py-2" target='_blank'>
                            Manual de Usuario
                        </Link>
                    )}
                    {urlDoc && (
                        <Link href={urlDoc} className="buttonCustom2 bg-green-500 text-white px-4 py-2" target='_blank'>
                            Documentación
                        </Link>
                    )}
                    {urlGit && (
                        <Link href={urlGit} className="buttonCustom3 bg-green-500 text-white px-4 py-2" target='_blank'>
                            Code
                        </Link>
                    )}
                    {urlHost && (
                        <Link href={urlHost} className="buttonCustom2 bg-green-500 text-white px-4 py-2" target='_blank'>
                            Host
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Project;
