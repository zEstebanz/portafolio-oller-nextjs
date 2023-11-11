// Importa las librerías necesarias
"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

function Project() {
    const [titulo, setProductoTitulo] = useState('');
    const [imagen, setProductoImagen] = useState('');

    useEffect(() => {
        // Acceder a la URL y otros parámetros de la página
        const queryParams = new URLSearchParams(window.location.search);
        const titulo = queryParams.get('title');
        const imagen = queryParams.get('imagen');

        if (titulo) {
            setProductoTitulo(titulo);
        }
        if (imagen) {
            setProductoImagen(imagen);
        }
    }, []);

    // Ejemplo de herramientas utilizadas y descripción del proyecto
    const herramientasUtilizadas = "React, Next.js, Tailwind CSS";
    const descripcionProyecto =
        "Este proyecto utiliza tecnologías como React, Next.js y Tailwind CSS para...";

    return (
        <section className='section-port'>
            <div className='port'>
                <h1 className='title'>{titulo}</h1>

                <div className="mb-4 flex items-center justify-center">
                    {/* Imagen del proyecto */}
                    <img
                        src={imagen}
                        alt={titulo}
                        width={800}
                        height={500}
                        layout="responsive"
                    />
                </div>

                <p className="mb-4 text-center text-white">{descripcionProyecto}</p>

                <p className="mb-4 text-center text-white">Herramientas utilizadas: {herramientasUtilizadas}</p>

                {/* Botones al centro */}
                <div className="flex justify-center space-x-4">
                    <Link href={'https://docs.google.com/document/d/1_Jb_JI4Jj-_6FTXbl5p5uq3rnNJLXApw7Fv-oP0p0Qc/edit?usp=sharing'} className="buttonCustom text-white px-4 py-2" target='_blank'>Manual de Usuario</Link>
                    <Link href={'https://docs.google.com/document/d/1PMzYSpLcjtN7fy9kQ1bZwXiEuCQWZYszcN49b00NCMk/edit?usp=sharing'} className="buttonCustom2 bg-green-500 text-white px-4 py-2" target='_blank'>Documentación</Link>
                </div>
            </div>
        </section>
    );
}

export default Project;
