import React from 'react';
import Navbar from '../Headers/Navbar';
import Footer from '../Footer';

function UserLayout({ children }) {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="content">{children}</div>
        <div className="footer">
          <Footer />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
          }
          .footer {
            margin-top: auto;
          }
          .content {
            height: 82vh;
          }
        `}
      </style>
    </>
  );
}

export default UserLayout;
