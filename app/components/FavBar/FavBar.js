import React from 'react'

import './FavBar.scss'

import matchs from '../../datas/matchs'

function FavBar({favTeamState, removeTeamFromFav}){

    function GetTeamMatchs(teamName){
        const filteredTeamMatchs = matchs.filter(match => match.equipeDom === teamName || match.equipeExt === teamName)
        return filteredTeamMatchs;
    }

    function tranformDate(matchDate){
        const correctDate = matchDate.split('/');
        var finalDate = new Date(correctDate[2], correctDate[1] - 1, correctDate[0]).toLocaleDateString();
        return finalDate    
    }

    function GetPastMatchs(teamMatchs){
        const now = new Date().toLocaleDateString()
        const pastMatchs = teamMatchs.filter(teamMatch => tranformDate(teamMatch.date) < now)
        return pastMatchs      
    }

    function GetFuturMatchs(teamMatchs){
        const now = new Date().toLocaleDateString()
        const futurMatchs = teamMatchs.filter(teamMatch => tranformDate(teamMatch.date) >= now)
        return futurMatchs
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
                        <div className="last-match">
                            <h3>Dernier Match :</h3>
                            {<p>{GetPastMatchs(GetTeamMatchs(team.name))[0].id}</p>}
                        </div>
                        <div className="next-match">
                            <h3>Prochain Match :</h3>
                            {<p>{GetFuturMatchs(GetTeamMatchs(team.name))[0].id}</p>}
                        </div>    
                    </div>                                 
                )}
            </div>            
        </div>
    )
}

export default FavBar