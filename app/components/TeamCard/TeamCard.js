import React from 'react'

import './TeamCard.scss'

function TeamCard({team, setUpModal, addTeamToFav,favTeamState}) {

    function isAdded(currentTeam){
        const teamAdded = favTeamState.find(team => team.name === currentTeam)
        if (teamAdded) {
            return null
        } else {
            return(
                <div className="add-button" title="Ajouter au favoris" 
                onClick={(e) => addTeamToFav(e, team)}>Ajouter</div>
            )
        }
    }
    return(
        <div className="team-card" onClick={() => setUpModal(true, team)} >
            <div className="team-card-header">
                {team.name}
            </div>
            <div className="team-card-body">                               
                <img src={team.logo} alt={"logo "+ team.name} />
                {isAdded(team.name)} 
            </div>
            <div className="team-card-footer">
                
                {team.groupe}
            </div>
        </div>
    )
}

export default TeamCard