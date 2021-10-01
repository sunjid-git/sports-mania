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
      <h3>Total Cost : $ {totalCost}</h3>
      {listedPlayer.map((player) => (
        <div className="add-remove-player-div-outer">
        <div className="add-remove-player-div-inner">
          <div> {player.name} </div>
          <div>$ {player.hirePrice}</div>
          <div>
            <button onClick={() => props.removePlayer(player.id)} className="sports-button">
             
              Remove
            </button>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default PlayerCart;
