"use client";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://widget.tochat.be/bundle.js?key=f2577203-93f3-4dab-bc5b-c1954846cbf6';
        script.defer = true;
        script.setAttribute('data-widget-type', 'group'); // Establecer el atributo data-widget-type
        script.setAttribute('data-person', '6c415cbb-7ef0-4abd-96ef-cea149c3e421'); // Establecer el atributo data-person
        document.body.appendChild(script);

        // Cleanup
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
<<<<<<< HEAD
        <section
            id="contact"
            className="section-sec"
        >
            <h2 className="text-center text-4xl font-bold text-white">
                Mis Contactos
            </h2>

            <div className="grid md:grid-cols-2 pt-[20px] md:pt-20 gap-4 relative">

=======
        <section id="contact" className="section-sec">
            <h2 className="text-center text-4xl font-bold text-white">Mis Contactos</h2>
            <div className="grid md:grid-cols-2 my-12 md:my-12 gap-4 relative">
>>>>>>> 6ba21f21b1e7d35a4d80cb5f3ba3d5e93638f180
                <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
                <div className="z-10 flex flex-col justify-center">
                        <div id="whatapp-people-widget"></div>
                </div>
                <div className="z-10">
                    <h5 className="text-xl font-bold text-white my-2">Conectémonos</h5>
                    <p className="text-[#ADB7BE] mb-4 max-w-md">Si quieres ponerte en contacto conmigo, puedes hacerlo a través de las redes sociales o rellenando el formulario de contacto. Te responderé cuanto antes. ¡De verdad que sí!</p>
                    <div className="socials flex flex-row gap-2">
                        <Link href="https://www.linkedin.com/in/tu_usuario_de_LinkedIn" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-white icon" />
                        </Link>
                        <Link href=" https://wa.me/2612528276" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="text-white icon" />
                        </Link>
                        <Link href="mailto:estebanoller73@gmail.com" target="_blank" rel="noopener noreferrer">
                            <MdEmail className="text-white icon" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmailSection;