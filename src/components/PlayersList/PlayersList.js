import React from "react";
import "./PlayersList.css";

function PlayersList(props) {
  const { name, img, email, hirePrice, currentClub } = props.player;
  return (
    <div className="single-player">
      <img src={img} alt="Player Name" />
      <p>{name}</p>
      <p>
      Email <strong> ${email}</strong>{" "}
      </p>
      <p>
        Hiring Price: <strong> ${hirePrice}</strong>{" "}
      </p>
      <p>
        Club: <strong> ${currentClub}</strong>{" "}
      </p>

      <button onClick={()=> props.addPlayer(props.player)}>
      <i className="fas fa-user-plus fa-lg"></i>Hire
      </button>
    </div>
  );
}

export default PlayersList;
