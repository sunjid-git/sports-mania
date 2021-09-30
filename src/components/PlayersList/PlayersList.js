import React from "react";
import "./PlayersList.css";

function PlayersList(props) {
  const { name, img, email, hirePrice, currentClub } = props.player;
  return (
    <div className="single-player">
      <img src={img} alt="Player Name" />
      <p>{name}</p>
      <p>
        Hiring Price: <strong> ${email}</strong>{" "}
      </p>
      <p>
        Hiring Price: <strong> ${hirePrice}</strong>{" "}
      </p>
      <p>
        Current Club: <strong> ${currentClub}</strong>{" "}
      </p>

      <button>
      <i class="fas fa-money-check-alt fa-lg"></i>Hire
      </button>
    </div>
  );
}

export default PlayersList;
