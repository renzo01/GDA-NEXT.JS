import React from 'react';
const Button = ({ type, title, ...otherProps }) => {
  return (
    <>
      <div className={type}>{title}</div>
      <style jsx>
        {`
          .button-sing-in {
            border-radius: 6px;
            padding-right: 10px;
            padding-left: 10px;
            padding-top: 2px;
            padding-bottom: 2px;
            margin-top: -4px;
            background-color: white;
            box-shadow: 3px 5px 5px #a09c9c;
            height: 27px;
          }
          .button-sing-up {
            border-radius: 6px;
            padding: 10px, 2px;
            padding-right: 10px;
            padding-left: 10px;
            padding-top: 2px;
            margin-top: -4px;
            padding-bottom: 2px;
            box-shadow: 4px 6px 5px #908d8d;
            background: #5478ff;
            color: white;
            height: 27px;
          }
          .button-sing-in:hover {
            background-color: #5478ff;
            cursor: pointer;
            color: #ffffff;
          }
          .button-sing-up:hover {
            background-color: white;
            cursor: pointer;
            color: black;
          }
          .button-login {
            width: 10rem;
            border-radius: 25px;
            text-align: center;
            padding-top: 5px;
            padding-bottom: 5px;
            color: rgb(0, 110, 255);
            border: solid 1px rgb(0, 110, 255);
          }
          .button-login:hover {
            cursor: pointer;
            background-color: rgb(0, 110, 255);
            color: white;
          }
        `}
      </style>
    </>
  );
};
export default Button;
