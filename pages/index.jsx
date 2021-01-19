import ShowProducts from '../components/commons/ShowProducts';
import UserLayout from '../components/commons/layouts/userLayout';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>GDA - INICIO</title>
      </Head>
      <div className="main-page">
        <UserLayout>
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
