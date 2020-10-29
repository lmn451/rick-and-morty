import React from "react";

export default ({
  image,
  id,
  name,
  status,
  species,
  gender,
  location,
  origin,
  seasons,
}) => {
  const uid = `#${name.split(" ").join("").toLowerCase()}ID${id}`;
  const className = `upper ${status.toLowerCase()}`;
  return (
    <div className='container'>
      <img src={image} alt='' />
      <div>
        <h5>{uid}</h5>
        <h3>
          {name}
          <sup className={className}>{status}</sup>
        </h3>
        <h4>Категория: {species}</h4>
        <h4>Пол: {gender}</h4>
        <h4>Начало: {origin.name}</h4>
        <h4>Mестоположение: {location.name}</h4>
        <h4>Был в сезоне: {seasons.map(x => x + " ")}</h4>
      </div>
    </div>
  );
};
