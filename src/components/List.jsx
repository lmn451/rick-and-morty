import React from "react";
import Card from "./Card";

export default function List({ heroes }) {
  return (
    <div>
      <span className='info'>B базе удалось найти:</span>
      <ul className='wrapper'>
        {heroes.map((v, i) => (
          <li key={i}>
            <Card {...v} />
          </li>
        ))}
      </ul>
    </div>
  );
}
