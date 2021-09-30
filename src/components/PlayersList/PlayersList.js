import React from 'react'

function PlayersList(props) {

    const {name, img, email, hirePrice, currentClub} = props.player;
    return (
        <div className="single-player">
            <img src={img} alt="Player Name" />
            <h1>{name}</h1>
            <p>Hiring Price: <strong> ${email}</strong> </p>
            <p>Hiring Price: <strong> ${hirePrice}</strong> </p>
            <p>Current Club: <strong> ${currentClub}</strong> </p>
        </div>
    )
}

export default PlayersList
