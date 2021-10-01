import React from "react";

function PlayerCartList(props) {
  console.log("PlayerCartList", props.player);
  const { name, hirePrice } = props.player;
  return (
    <div className="player-cart-list">
      <table>
        <tr>
          <td>{name}</td>
          <td>{hirePrice}</td>
          <td>
            <button>
              <i
                className="fas fa-user-minus fa-lg"
                onClick={() => removePlayer(props.player)}
              ></i>
              Remove
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default PlayerCartList;
