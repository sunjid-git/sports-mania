import React from "react";
import "./PlayersList.css";

function PlayersList(props) {
  const { name, img, email, hirePrice, currentClub } = props.player;
  return (
    <div className="single-player">
      <img src={img} alt="Player Name" />
      <p>{name}</p>
     
      <p>
        Hiring Price: <strong> ${hirePrice}</strong>{" "}
      </p>
      <p>
        Club: <strong> {currentClub}</strong>{" "}
      </p>
      <p>
      Email: <strong> {email}</strong>{" "}
      </p>

      <button onClick={()=> props.addPlayer(props.player)} className="sports-button">
      <i className="fas fa-user-plus fa-lg"></i>Hire
      </button>
    </div>
  );
}

export default PlayersList;
