import React from 'react';

const Footer = () => {
  const getCurrentYear = () => {
    let year = new Date().getFullYear();
    return year;
  };

  return (
    <>
      <div className="footer">
        <img src="/image/gda-icon.png" alt="GDA Icon" />
        <p>GDA Soluciones. Derechos reservados 2008 - {getCurrentYear()}</p>
      </div>
      <style jsx>
        {`
          .footer {
            background-color: black;
            color: white;
            display: flex;
          }
          .footer p {
            margin: auto;
          }
          .footer img {
            width: 128px;
            margin-top: 20px;
            margin-bottom: 20px;
            margin-left: 20px;
          }
        `}
      </style>
    </>
  );
};
export default Footer;
