import React from 'react'

import './MatchCard.scss'

import teams from '../../datas/teams'

import logo_UEFA from '../../assets/uefa_logo.png'

function MatchCard({match}) {

    function findLogo(equipe){
        const teamObj = teams.find(team => team.name === equipe) 
        if (teamObj) {
            return teamObj.logo
        } else {
            return logo_UEFA
        }
    }

    function getResult(result){
        if (result === "NC") {
            return null
        } else {
            return result
        }
    }

    return(
        <div className="match-card">
            <div className="match-card-header">
                <p>Match N° {match.id} / Match de {match.phase}</p>
            </div>
            <div className="match-card-body">
                <img className="match-card-logo"src={findLogo(match.equipeDom)} alt="" />
                <p className="team-name" >{match.equipeDom}</p>
                <p className="match-score" >{getResult(match.scoreDom)} - {getResult(match.scoreExt)}</p>
                <p className="team-name" > {match.equipeExt}</p>
                <img className="match-card-logo"src={findLogo(match.equipeExt)} alt="" />
            </div>
            <div className="match-card-footer">
                <p>{match.date} à {match.heure}</p>
            </div>
        </div>
    )
}

export default MatchCard