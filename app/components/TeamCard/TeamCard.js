import React from 'react'

import './TeamCard.scss'

function TeamCard({team, setUpModal}) {
    return(
        <div className="team-card" onClick={() => setUpModal(true, team)} >
            <div className="team-card-header">
                {team.name}
            </div>
            <div className="team-card-body">
                <img src={team.logo} alt={"logo "+ team.name} />
            </div>
            <div className="team-card-footer">
                {team.groupe}
            </div>
        </div>
    )
}

export default TeamCard