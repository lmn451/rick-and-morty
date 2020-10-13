import React from "react";
import Card from "../Card/Card";
import "./list.css";

export default function List({ heroes }) {
  return (
    <div>
      <span>B базе удалось найти:</span>
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
