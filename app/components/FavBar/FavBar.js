import React from 'react'

import './FavBar.scss'

import matchs from '../../datas/matchs'
import teams from '../../datas/teams'
import uefa_logo from '../../assets/uefa_logo.png'

function FavBar({favTeamState, removeTeamFromFav}){

    function GetTeamMatchs(teamName){
        const filteredTeamMatchs = matchs.filter(match => match.equipeDom === teamName || match.equipeExt === teamName)
        return filteredTeamMatchs;
    }

    function tranformDate(matchDate, matchHour){
        const correctDate = matchDate.split('/');
        const corectHour = matchHour.split(':')
        var finalDate = new Date(correctDate[2], correctDate[1] - 1, correctDate[0], corectHour[0], corectHour[1])
        finalDate.setHours(finalDate.getHours() + 2 )
        return finalDate    
    }

    function GetPastMatchs(teamMatchs){
        const now = new Date()
        const pastMatchs = teamMatchs.filter(teamMatch => tranformDate(teamMatch.date, teamMatch.heure) < now)
        return pastMatchs      
    }

    function CreateLastMatchDiv(equipe){
        const teamMatchs = GetTeamMatchs(equipe)
        const pastMatchs = GetPastMatchs(teamMatchs)
        const lastMatch = pastMatchs[pastMatchs.length - 1]

        const infoTeamDom = teams.find(team => team.name === lastMatch.equipeDom)
        const infoTeamExt = teams.find(team => team.name === lastMatch.equipeExt)
        
        return (
            <>
            <div className="last-match">
                <div className="last-match-top">
                    <img src={infoTeamDom.logo} alt="" height="20px" width="20px"/>
                    <p className="team-name">{lastMatch.equipeDom}</p>
                    <p>{lastMatch.scoreDom}</p>
                </div>
                <div className="last-match-bottom">
                    <img src={infoTeamExt.logo} alt="" height="20px" width="20px"/>
                    <p className="team-name">{lastMatch.equipeExt}</p>
                    <p>{lastMatch.scoreExt}</p>
                </div>
            </div>
            </>
        )
    }

    function findInfoTeam(equipe){
        const teamObj = teams.find(team => team.name === equipe) 
        if (teamObj) {
            return teamObj
        } else {         
            return {id: 'NoID', name: 'NC', logo: uefa_logo}
        }
    }

    function GetNextMatchs(teamMatchs){
        const now = new Date()
        const nextMatchs = teamMatchs.filter(teamMatch => tranformDate(teamMatch.date, teamMatch.heure) >= now)
        return nextMatchs      
    }

    function CreateNextMatchDiv(equipe){
        const teamMatchs = GetTeamMatchs(equipe)
        const nextsMatchs = GetNextMatchs(teamMatchs)
        
        if (nextsMatchs.length > 0 ) {
            const nextMatch = nextsMatchs[0]

            const infoTeamDom = findInfoTeam(nextMatch.equipeDom)
            const infoTeamExt = findInfoTeam(nextMatch.equipeExt)

            return (
                <>
                <div className="next-match">
                    <div className="next-match-top">
                        <img src={infoTeamDom.logo} alt="" height="20px" width="20px"/>
                        <p className="team-name">{infoTeamDom.name}</p>
                    </div>
                    <div className="next-match-bottom">
                        <img src={infoTeamExt.logo} alt="" height="20px" width="20px"/>
                        <p className="team-name">{infoTeamExt.name}</p>
                    </div>
                    <div className="next-match-date">
                        <p>le {nextMatch.date} à {nextMatch.heure}</p>
                    </div>
                </div>
                </>)
            
        } else {
            return (
               <div className="next-match finish">
                <p>Equipe Eliminée</p>
            </div> 
            )
            
        }
    }

    return(
        <div className="favbar">
            <div className="favorite-teams">
                <h3>Mes équipes :</h3>
                {favTeamState.map((team) =>
                    <div key={team.id} className="fav-team-container">
                        <div  className="fav-team">
                            <div className="fav-team-logo">
                                <img src={team.logo} alt="" />
                            </div>
                            <div className="fav-team-name">
                                <p key={team.id}>{team.name}</p>
                            </div>
                            <button onClick={() => removeTeamFromFav(team.name)} >X</button>
                        </div>  
                        <div className="last-match-container">
                            <h3>Dernier Match :</h3>
                            {CreateLastMatchDiv(team.name)}
                        </div>
                        <div className="next-match-container">
                            <h3>Prochain Match :</h3>  
                            {CreateNextMatchDiv(team.name)}                    
                        </div>    
                    </div>                                 
                )}
            </div>            
        </div>
    )
}

export default FavBar