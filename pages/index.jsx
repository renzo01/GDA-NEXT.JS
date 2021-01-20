import ShowProducts from '../components/commons/ShowProducts';
import UserLayout from '../components/commons/layouts/userLayout';
import Head from 'next/head';
import Banner from '../components/commons/Banner';
export default function Home() {
  return (
    <>
      <Head>
        <title>GDA - INICIO</title>
      </Head>
      <div className="main-page">
        <UserLayout>
          <Banner />
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
