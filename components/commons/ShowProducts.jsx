import React from 'react';
import ProductCard from './ProductCard';
const ShowProducts = ({ title }) => {
  return (
    <>
      <div className="show-products">
        <h4 className="show-products-title">{title}</h4>
        <div className="show-products-content">
          <ProductCard
            img="/image/producto1.jpg"
            title="Macbook Air 13'"
            description="MacBook Air 13 (2019) Intel i5 de 1.6GHz RAM 8GB - 128GB - Plata"
            price="S./2.000"
          />
          <ProductCard
            img="/image/producto1.jpg"
            title="Macbook Air 13'"
            description="MacBook Air 13 (2019) Intel i5 de 1.6GHz RAM 8GB - 128GB - Plata"
            price="S./2.000"
          />
          <ProductCard
            img="/image/producto1.jpg"
            title="Macbook Air 13'"
            description="MacBook Air 13 (2019) Intel i5 de 1.6GHz RAM 8GB - 128GB - Plata"
            price="S./2.000"
          />
          <ProductCard
            img="/image/producto1.jpg"
            title="Macbook Air 13'"
            description="MacBook Air 13 (2019) Intel i5 de 1.6GHz RAM 8GB - 128GB - Plata"
            price="S./2.000"
          />
          <ProductCard
            img="/image/producto1.jpg"
            title="Macbook Air 13'"
            description="MacBook Air 13 (2019) Intel i5 de 1.6GHz RAM 8GB - 128GB - Plata"
            price="S./2.000"
          />
          <ProductCard
            img="/image/producto1.jpg"
            title="Macbook Air 13'"
            description="MacBook Air 13 (2019) Intel i5 de 1.6GHz RAM 8GB - 128GB - Plata"
            price="S./2.000"
          />
          <ProductCard
            img="/image/producto1.jpg"
            title="Macbook Air 13'"
            description="MacBook Air 13 (2019) Intel i5 de 1.6GHz RAM 8GB - 128GB - Plata"
            price="S./2.000"
          />
        </div>
      </div>
      <style jsx>
        {`
          .show-products {
            width: 90%;
            margin: auto;
            margin-bottom: 20px;
          }

          .show-products-title {
            color: gray;
            margin-left: -2.5rem;
          }
          .show-products-content {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
            gap: 15px;
          }
        `}
      </style>
    </>
  );
};
export default ShowProducts;
