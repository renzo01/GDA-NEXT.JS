import React from 'react';
import Button from '../Button';
import Image from 'next/image';
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <div className="logo-container">
            <Image
              src="/image/gda-icon.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="title-logo">GDA SOLUCIONES</h1>
        </div>
        <div className="navbar-links">
          <p>PRODUCTOS</p>
          <p>CONTACTOS</p>
          <Button type="button-sing-in" title="Ingresar" />
          <Button type="button-sing-up" title="Registrarse" />
        </div>
      </div>
      <style jsx>{`
        .navbar-links {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .logo-container {
          width: 64px;
          height: 64px;
          position: relative;
        }
        .title-logo {
          color: white;
          -webkit-text-stroke-color: #212121;
          -webkit-text-stroke-width: 0.75px;
          font-style: italic;
        }
        .navbar {
          height: 66px;
          background: #fbed17;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0px 16px;
        }
        .navbar-logo {
          display: flex;
          gap: 10px;
          align-items: center;
          height: 68px;
        }
      `}</style>
    </>
  );
};

export default Navbar;
