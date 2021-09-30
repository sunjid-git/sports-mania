import React from 'react'

function PlayersList(props) {

    const {name, img, email, hirePrice, currentClub, category} = props.player;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default PlayersList
