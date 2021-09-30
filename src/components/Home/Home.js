import React, { useState } from "react";
import Header from "../Header/Header";
import playerData from "../data.json";

function Home() {
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState(playerData);
  const [category, setCategory] = useState("cricket");

  console.log(players);
  console.log(loading);
  console.log(category);
  return (
    <>
      <Header></Header>

      <div className="players">
      {/* search field */}
        <div className="search-box">
          {/* <i class="fas fa-search"></i> */}
          <input type="text" placeholder="Type Player Name" />
        </div>


      </div>
    </>
  );
}

export default Home;
