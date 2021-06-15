import React from 'react'

import './FavBar.scss'

function SideBar({favTeamState, removeTeamFromFav}){
    return(
        <div className="favbar">
            <div className="favorite-teams">
                <h3>Mes équipes :</h3>
                {favTeamState.map((team) =>
                    <p key={team.id}>{team.name}<button onClick={() => removeTeamFromFav(team.name)} >X</button></p>
                    
                )}
            </div>
            <div className="inc-matchs">
                <h3>Match a venir : </h3>
            </div>
            <div className="last-matchs">
                <h3>Match terminés :</h3>
            </div>
        </div>
    )
}

export default SideBar