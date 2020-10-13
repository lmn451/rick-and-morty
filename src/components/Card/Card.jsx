import React from "react";
import "./card.css";
export default ({
  image,
  id,
  name,
  status,
  species,
  gender,
  location,
  origin,
}) => {
  let uid = `#${name
    .split(" ")
    .join("")
    .toLowerCase()}ID${id}`;
  return (
    <div className='container'>
      <img src={image} alt='' />
      <div>
        <h5>{uid}</h5>
        <h3>
          {name}
          <sup className={`upper ${status.toLowerCase()}`}>{status}</sup>
        </h3>
        <h4>Категория: {species}</h4>
        <h4>Пол: {gender}</h4>
        <h4>Начало: {origin.name}</h4>
        <h4>Mестоположение: {location.name}</h4>
      </div>
    </div>
  );
};
