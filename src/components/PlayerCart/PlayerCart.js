import React from "react";
import "./PlayerCart.css";

function PlayerCart(props) {
  const listedPlayer = props.listedPlayer;
  // console.log('PlayerCart',props);
  // const removePlayer = props.removePlayer;
  // console.log(listedPlayer);

  const totalCost = listedPlayer.reduce(
    (player, index) => player + index.hirePrice,
    0
  );

  return (
    <div className="player-cart">
      <h1>Total Players : {listedPlayer.length}</h1>
      <h3>Total Cost : ${totalCost}</h3>
      {listedPlayer.map((player) => (
        <div>
          
          <span> {player.name} </span>
          <span>${player.hirePrice}</span>
          <span>
            <button onClick={()=>props.removePlayer(player.id)}>Remove</button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default PlayerCart;
