import React, { useEffect, useState } from "react";
import NothingFound from "./components/NothingFound";
import "./App.css";
import List from "./components/List";
import Header from "./components/Header";
import beautify from "./helper";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [episode, setEpisodes] = useState("");

  const changeHandler = e => {
    setEpisodes(e.target.value);
  };

  const filterByEp = v => {
    if (!episode) return true;
    return v.episode.includes(Number(episode));
  };

  const toShow = heroes.filter(filterByEp);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(json => setHeroes(beautify(json.results)))
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <Header onChange={changeHandler} episode={episode} />
      {toShow.length ? (
        <List episode={episode} heroes={toShow} />
      ) : (
        <NothingFound />
      )}
    </>
  );
}

export default App;
