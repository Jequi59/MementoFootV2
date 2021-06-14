import React from 'react'

import './MatchCard.scss'

import teams from '../../datas/teams'

function MatchCard({match}) {

    function findLogo(equipe){
        const teamObj = teams.find(team => team.name === equipe) 
        if (teamObj) {
            return teamObj.logo
        } else {
            return console.log('logo UEFA');
        }
    }

    return(
        <div className="match-card">
            <p>Match N° {match.id}, <img src={findLogo(match.equipeDom)} alt="" /> contre <img src={findLogo(match.equipeExt)} alt="" /></p>
        </div>
    )
}

export default MatchCard