import React from 'react';

const ProductCard = ({ img, title, description, price, offer }) => {
  return (
    <>
      <div className="product-card">
        <img src={img} alt="Imagen del producto" />
        <h3>{title}</h3>
        <span>{description}</span>
        <p>{price}</p>
      </div>
      <style jsx>
        {`
          .product-card {
            border: solid 1px;
            width: 10rem;
            margin: auto;
          }
          .product-card h3 {
            text-align: center;
          }
          .product-card span {
            margin-left: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .product-card p {
            text-align: right;
            margin-right: 20px;
            font-weight: bold;
          }
          .product-card img {
            width: 150px;
          }
          .product-card:hover {
            scale: 1.2;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default ProductCard;
