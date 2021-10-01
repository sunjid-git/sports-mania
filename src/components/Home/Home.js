import React, { useEffect, useState } from "react";
import "./Home.css";

import Header from "../Header/Header";
import playerData from "../data.json";
import PlayersList from "../PlayersList/PlayersList";
import PlayerCart from "../PlayerCart/PlayerCart";

function Home() {
  //   const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [players, setPlayers] = useState([]);

  const [category, setCategory] = useState("cricket");
  const [listedPlayer, setListedPlayer] = useState([]);

  useEffect(() => {
    setPlayers(playerData);
  }, []);

  const matchedCategory = players.filter((data) => data.category === category);
  //   console.log(matchedCategory);

  const searchedResult = matchedCategory.filter((player) =>
    player.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  //   console.log("matchedCategory", matchedCategory);

  const getSpecificPlayers = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  const getPLayerDetails = searchedResult.filter((player) =>
    player.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
  //   console.log("getPLayer", getPLayerDetails);

  const addPlayer = (add) => {
    const addedPlayer = [...listedPlayer, add];
    const selectedPlayers = addedPlayer.reduce((unique, player) => {
      if (unique.includes(player)) {
        return unique;
      } else {
        return [...unique, player];
      }
    }, []);
    setListedPlayer(selectedPlayers);
    // console.log('addedPlayer', addedPlayer);
    // console.log('selectedPlayers', selectedPlayers);
  };

  const removePlayer = (id) => {
    const removedPlayer = listedPlayer.filter((player) => player.id !== id);
    setListedPlayer(removedPlayer);
    console.log("removed Player", removedPlayer);
    // console.log("removed Player");
  };

  return (
    <>
      <Header setCategory={setCategory}></Header>

      <div className="show-all-players">
        <div className="player-box-left">
          <div className="search-box">
            <input
              type="text"
              placeholder="Type Player Name"
              onChange={getSpecificPlayers}
            />
          </div>

          <div className="player-list">
            {getPLayerDetails?.map((player) => (
              <PlayersList
                key={player.id}
                player={player}
                addPlayer={addPlayer}
              ></PlayersList>
            ))}
          </div>
        </div>

        <div className="player-box-right">
          <PlayerCart
            listedPlayer={listedPlayer}
            removePlayer={removePlayer}
          ></PlayerCart>
        </div>
      </div>
    </>
  );
}

export default Home;
