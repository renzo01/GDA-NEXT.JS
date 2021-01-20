import Slider from 'react-animated-slider';
import React from 'react';
import Image from 'next/image';
const Banner = () => {
  const banners = [
    {
      id: 1,
      title: 'PC Pre ensamblados',
      description: 'Tenemos el PC listo para ti y para tus necesidades',
      picture: '/image/pc-banner.jpg',
    },
    {
      id: 2,
      title: 'Asistencia tecnica',
      description:
        'Somos amigos de los entuciastas, buscas algo en especifico?, podemos ayudarte a encontrar la pieza perfecta para tu PC',
      picture: '/image/asistencia-banner.webp',
    },
    {
      id: 3,
      title: 'Soporte tecnico',
      description:
        'Tienes problemas con tus equipos?, no hay problema, nuesto equipo de expertos pondra todo al corriente',
      picture: '/image/servicio-banner.webp',
    },
  ];
  return (
    <>
      <Slider>
        {banners.map((banner) => {
          return (
            <div
              key={banner.id}
              style={{
                background: `url('${banner.picture}')`,
                backgroundSize: 'cover',
              }}
            >
              <div className="text">
                <h1>{banner.title}</h1>
                <p className="text-subtitle">{banner.description}</p>
              </div>
            </div>
          );
        })}
      </Slider>
      <style jsx>
        {`
          .text-subtitle {
            background: #0000007a;
            width: 100%;
            border-radius: 15px;
          }
          .text {
            color: white;

            width: 50%;
            margin: auto;
            text-align: center;

            margin-top: 16%;
          }

          .picture {
            height: 100%;
            position: relative;
            z-index: -1;
          }
        `}
      </style>
    </>
  );
};

export default Banner;
