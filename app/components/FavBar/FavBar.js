import React from 'react'

import './FavBar.scss'

import matchs from '../../datas/matchs'

function SideBar({favTeamState, removeTeamFromFav}){

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
        const pastMatchs = teamMatchs.filter(teamMatch => tranformDate(teamMatch.date) <= now)
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
                {/* {favTeamState.map((favTeam) => 
                    GetFuturMatchs(GetTeamMatchs(favTeam.name))).map((match) =>
                        match.map((match)=> 
                            <p>{match.id}</p>
                    )
                )} */}
                {favTeamState.map(function (favTeam) {
                    const futurMatchs = GetFuturMatchs(GetTeamMatchs(favTeam.name))
                    return console.log(futurMatchs);
                }
                )}
            </div>
            <div className="last-matchs">
                <h3>Match terminés :</h3>
            </div>
        </div>
    )
}

export default SideBar