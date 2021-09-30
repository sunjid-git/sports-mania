import React, { useState } from "react";
import Header from "../Header/Header";
import playerData from "../data.json";
import PlayersList from "../PlayersList/PlayersList";

function Home() {
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState(playerData);
  const [category, setCategory] = useState("cricket");

  const [search, setSearch] = useState("");

  const matchedCategory = playerData.filter(
    (data) => data.category === category
  );

  const searchedResult = matchedCategory.filter((player) =>
    player.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  console.log("matchedCategory", matchedCategory);

  const getSpecificPlayers = (e) => {
    setSearch(e.target.value);
  };

  const getPLayerDetails = matchedCategory.filter((player) =>
    player.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  console.log("getPLayer", getPLayerDetails);
  return (
    <>
      <Header setCategory={setCategory}></Header>

      <div className="show-players">
        <div className="player-box-left">
          <div className="search-box">
            <input
              type="text"
              placeholder="Type Player Name"
              onChange={getSpecificPlayers}
            />
          </div>

          <div className="player-list">
              {
                getPLayerDetails?.map(player => <PlayersList player={player} key={player.id}></PlayersList> )
              }
          </div>


        </div>

        <div className="player-box-right"></div>
      </div>
    </>
  );
}

export default Home;
