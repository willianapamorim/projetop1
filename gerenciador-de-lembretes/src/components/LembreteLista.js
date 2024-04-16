import React from 'react';

const LembreteLista = ({ text }) => {
  return (
    <div >
      <ul className="list-group" >
        <li className="list-group-item text-center my-2 border rounded">{text}</li>
      </ul>
    </div>
  );
}

export default LembreteLista;
