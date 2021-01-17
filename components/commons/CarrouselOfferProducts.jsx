import React from 'react';
import OfferProduct from './OfferProduct';
import Slider from 'react-slick';
const CarrouselOfferProducts = () => {
  const settingCarrousel = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <>
      <div className="carrousel-offer-products">
        <h4 className="offers-title">OFFERTAS</h4>
        <div className="carrousel">
          <Slider {...settingCarrousel}>
            <OfferProduct image="/image/producto1.png" />

            <OfferProduct image="/image/producto1.png" />

            <OfferProduct image="/image/producto1.png" />

            <OfferProduct image="/image/producto1.png" />

            <OfferProduct image="/image/producto1.png" />

            <OfferProduct image="/image/producto1.png" />

            <OfferProduct image="/image/producto1.png" />

            <OfferProduct image="/image/producto1.png" />
          </Slider>
        </div>
      </div>
      <style jsx>
        {`
          .carrousel {
            display: flex;
            margin: auto;
            width: 95%;
            overflow: hidden;
          }
          .offer-products-container {
            margin: 0;
            display: flex;
          }
        `}
      </style>
    </>
  );
};

export default CarrouselOfferProducts;
