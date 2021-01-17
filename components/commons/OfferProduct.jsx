import React from 'react';
const OfferProduct = ({ image }) => {
  return (
    <>
      <div className="offer-product">
        <img className="img-prod" src={image} alt="producto en oferta" />
        <div className="offer-container">
          <p>S./2.000</p>
        </div>
      </div>
      <style jsx>
        {`
          .offer-product {
            border: solid 1px;
            height: 130px;
            width: 145px;
            z-index: 1;
            position: relative;
            cursor: pointer;
          }
          .img-prod {
            width: 128px;
          }
          .offer-container {
            position: relative;
            border: solid 1px;
            height: 30px;
            width: 100px;
            float: right;
            color: white;
            margin-top: -2rem;
            z-index: 2;
            background-color: #ff0100;
          }
          .offer-container p {
            margin: auto;
            font-weight: bold;
            padding-top: 5px;
            padding-left: 25px;
          }
        `}
      </style>
    </>
  );
};
export default OfferProduct;
