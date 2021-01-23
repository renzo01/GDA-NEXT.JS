import React from 'react';
const Button = ({ style, title, ...otherProps }) => {
  return (
    <>
      <button className={style} {...otherProps}>
        {title}
      </button>
      <style jsx>
        {`
          .button-primary {
            background: #fbed17;
            color: white;
            font-weight: bold;
            font-size: 16px;
            -webkit-text-stroke-width: 0.75px;
            -webkit-text-stroke-color: black;
            padding: 6px 10px;
            border-radius: 13px;
          }
          .button-primary:hover {
            background: white;
            color: black;
            -webkit-text-stroke-width: 0px;
          }
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
