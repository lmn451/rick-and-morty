import React from "react";
import Card from "./Card";

export default function List({ episode, heroes }) {
  return (
    <div>
      <span className='info'>
        {episode
          ? `В эпизоде номер ${episode} принимали участие:`
          : `Все герои`}
      </span>
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
