"use client"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Cambia esto para ajustar la velocidad del carrusel
  };
  return (
    <main className='section-main h-auto min-h-screen bg-white dark:bg-dark'>
      <div className="port bg-port">
        <h1 className="titlePort">Esteban Oller</h1>

        {/* Carrusel */}
        <div className="carousel-container">
          <Slider {...settings}>

            <div>
              {/* Contenido del primer slide */}
              <Image src="https://esteban-oller.netlify.app/src/img/ico/react.png" alt="Slide 1" width={50} height={50} />
            </div>

            <div>
              {/* Contenido del primer slide */}
              <Image src="https://esteban-oller.netlify.app/src/img/ico/node.png" alt="Slide 1" width={50} height={50} />
            </div>

            <div>
              {/* Contenido del segundo slide */}
              <Image src="https://esteban-oller.netlify.app/src/img/ico/mongo.png" alt="Slide 2" width={50} height={50} />
            </div>

            <div>
              {/* Contenido del segundo slide */}
              <Image src="https://esteban-oller.netlify.app/src/img/ico/next2.png" alt="Slide 2" width={50} height={50} />
            </div>

            <div>
              {/* Contenido del segundo slide */}
              <Image src="https://esteban-oller.netlify.app/src/img/ico/sql.png" alt="Slide 2" width={50} height={50} />
            </div>

            <div>
              {/* Contenido del segundo slide */}
              <Image src="https://esteban-oller.netlify.app/src/img/ico/sass.png" alt="Slide 2" width={50} height={50} />
            </div>

            <div>
              {/* Contenido del segundo slide */}
              <Image src="https://esteban-oller.netlify.app/src/img/ico/gitRed.png" alt="Slide 2" width={50} height={50} />
            </div>

            <div>
              {/* Contenido del segundo slide */}
              <Image src="https://esteban-oller.netlify.app/src/img/ico/docker.png" alt="Slide 2" width={50} height={50} />
            </div>
          </Slider>
        </div>
        {/* Fin del carrusel */}
      </div>
    </main>
  )
}