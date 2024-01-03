
export default function Contact() {

    return (
        <section className='section-sec h-auto min-h-screen'>
            <div className='container'>
                <div className='port'>
                    <h2 className='title'>¡Hablemos!</h2>
                    <p className='sub-title'>¿Tienes alguna pregunta o comentario? ¡Estoy aquí para ayudar!</p>
                </div>
                <form className='max-w-md mx-auto'>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block text-gray-700 text-sm font-semibold mb-2'>Nombre</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='email' className='block text-gray-700 text-sm font-semibold mb-2'>Correo Electrónico</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='message' className='block text-gray-700 text-sm font-semibold mb-2'>Mensaje</label>
                        <textarea
                            id='message'
                            name='message'
                            rows='4'
                            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                        ></textarea>
                    </div>
                    <button
                        type='submit'
                        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue'
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </section>
    )
}