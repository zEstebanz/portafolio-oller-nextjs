"use client";
import React, { useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
                "Content-Type": "application/json",
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
    };

    return (
        <section
            id="contact"
            className="section-contact"
        >
            <h2 className="text-center text-4xl font-bold text-white">
                Mis Contactos
            </h2>

            <div className="grid md:grid-cols-2 pt-[20px] md:pt-20 gap-4 relative">

                <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
                <div className="z-10">
                    <h5 className="text-xl font-bold text-white my-2">
                        Conectémonos
                    </h5>
                    <p className="text-[#ADB7BE] mb-4 max-w-md">
                        {" "}
                        Si quieres ponerte en contacto conmigo, puedes hacerlo a través de las redes sociales o rellenando el formulario de contacto. Te responderé cuanto antes. ¡De verdad que sí! </p>
                    <div className="socials flex flex-row gap-2">
                        <Link href="https://www.linkedin.com/in/tu_usuario_de_LinkedIn" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-white icon" />
                        </Link>
                        <Link href="https://wa.me/2612528276" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="text-white icon" />
                        </Link>
                        <Link href="mailto:estebanoller83@gmail.com" target="_blank" rel="noopener noreferrer">
                            <MdEmail className="text-white icon" />
                        </Link>
                    </div>
                </div>
                <div>
                    {emailSubmitted ? (
                        <p className="text-green-500 text-sm mt-2">
                            ¡Correo electrónico enviado exitosamente!
                        </p>
                    ) : (
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="text-white block mb-2 text-sm font-medium"
                                >
                                    Tu Email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    required
                                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="correo@gmail.com"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="text-white block text-sm mb-2 font-medium"
                                >
                                    Mensaje
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Vamos a hablar acerca de..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-button text-white font-medium py-2.5 px-5 rounded-lg w-full"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default EmailSection;