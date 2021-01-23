import React from 'react';
import Button from '../../components/commons/Button';
import UserLayout from '../../components/commons/layouts/userLayout';

const Contact = () => {
  return (
    <>
      <UserLayout>
        <div className="container">
          <h1>Contactenos</h1>
          <div>
            <div className="email-container">
              <form>
                <div className="input-container">
                  <label htmlFor="email" className="">
                    Email
                  </label>
                  <input
                    id="email"
                    type="text"
                    placeholder="Ingresa un correo valido"
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="description">Mensaje</label>
                  <textarea
                    id="description"
                    type="textarea"
                    placeholder="Envienos un mensaje, le responderemos lo más pronto posible"
                  />
                </div>
                <Button type="submit" style="button-primary" title="ENVIAR" />
              </form>
            </div>
          </div>
        </div>
      </UserLayout>
      <style jsx>
        {`
          .container {
            height: 100vh;
          }
          .input-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 5px;
          }
          .email-container {
            border: solid black;
          }
        `}
      </style>
    </>
  );
};

export default Contact;
