import ShowProducts from '../components/commons/ShowProducts';
import UserLayout from '../components/commons/layouts/userLayout';
//import CarrouselOfferProducts from '../components/commons/CarrouselOfferProducts';
export default function Home() {
  return (
    <>
      <div className="main-page">
        <UserLayout>
          {/*<CarrouselOfferProducts />*/}
          <ShowProducts title="PRODUCTOS DESTACADOS" />
        </UserLayout>
      </div>
      <style jsx>{`
        .offers-title {
          color: red;
          margin-left: 20px;
          font-style: italic;
        }
      `}</style>
    </>
  );
}
