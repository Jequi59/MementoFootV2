import React from 'react'

import './FavBar.scss'

function SideBar({favTeamState, removeTeamFromFav}){
    return(
        <div className="favbar">
            <div className="favorite-teams">
                <h3>Mes équipes :</h3>
                {favTeamState.map((team) =>
                    <div key={team.id} className="fav-team">
                        <div className="fav-team-logo">
                            <img src={team.logo} alt="" />
                        </div>
                        <div className="fav-team-name">
                            <p key={team.id}>{team.name}</p>
                        </div>
                        <button onClick={() => removeTeamFromFav(team.name)} >X</button>
                    </div>               
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