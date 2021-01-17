import React from 'react';

const Input = ({ type, plh, styl }) => {
  return (
    <>
      <input type={type} placeholder={plh} className={styl} />
      <style jsx>
        {`
          .login-input {
            padding: 5px;
            margin-top: 10px;
            margin-bottom: 5px;
            width: 25rem;
            border-radius: 25px;
            border: solid 1px;
          }
        `}
      </style>
    </>
  );
};

export default Input;
