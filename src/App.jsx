import React, { useEffect, useState } from "react";
import NothingFound from "./components/NothingFound";
import "./App.css";
import List from "./components/List";
import Header from "./components/Header";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [episode, setEpisodes] = useState("");

  const changeHandler = e => {
    setEpisodes(e.target.value);
  };
  const filterByEp = v => {
    if (!episode) return true;
    return v.episode.includes(
      `https://rickandmortyapi.com/api/episode/${episode}`
    );
  };
  // const filterBySeason =v={
  //  .filter(v => v.substring(v.lastIndexOf("/") + 1, v.length) / 10 <= 1)
  //   return v.
  // }
  const toShow = heroes.filter(filterByEp);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(json => {
        // json.results.forEach(v => {
        // });
        setHeroes(json.results);
        return;
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      {/* {console.log(heroes)} */}
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
