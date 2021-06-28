import React from 'react'

import '../HomePage/HomePage.scss'

import matchs from '../../datas/matchs'
import teams from '../../datas/teams'

function HomePage(){

    const now = new Date()

    function tranformDate(matchDate, matchHour){
        const correctDate = matchDate.split('/');
        const correctHour = matchHour.split(':')
        var finalDate = new Date(correctDate[2], correctDate[1] - 1, correctDate[0],correctHour[0], correctHour[1]);
        finalDate.setHours(finalDate.getHours() + 2)
        return finalDate    
    }

    function GetPastMatchs(){
        const now = new Date()
        const pastMatchs = matchs.filter(match => tranformDate(match.date, match.heure) < now)
        const index = pastMatchs.length
        const finalLastMatchs = [pastMatchs[index - 4],pastMatchs[index - 3],pastMatchs[index - 2],pastMatchs[index - 1]]
        return finalLastMatchs      
    }

    function GetNextMatchs(){
        const now = new Date()
        const nextMatchs = matchs.filter(match => tranformDate(match.date, match.heure) >= now)
        const finalNextMatchs = [nextMatchs[0],nextMatchs[1],nextMatchs[2],nextMatchs[3]]
        return finalNextMatchs      
    }

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
        <div className="home-page">
                <h3 className="home-last-matchs-title">Derniers matchs : </h3>
                <div className="home-last-matchs-title-container">
                {GetPastMatchs().map((finalLastMatch) => 
                    <div className="match-card">
                        <div className="match-card-header">
                            <p>Match N° {finalLastMatch.id} / Match de {finalLastMatch.phase}</p>
                        </div>
                        <div className="match-card-body">
                            <img className="match-card-logo"src={findLogo(finalLastMatch.equipeDom)} alt="" />
                            <p className="team-name" >{finalLastMatch.equipeDom}</p>
                            <p className="match-score" >{getResult(finalLastMatch.scoreDom)} - {getResult(finalLastMatch.scoreExt)}</p>
                            <p className="team-name" > {finalLastMatch.equipeExt}</p>
                            <img className="match-card-logo"src={findLogo(finalLastMatch.equipeExt)} alt="" />
                        </div>
                        <div className="match-card-footer">
                            <p>{finalLastMatch.date} à {finalLastMatch.heure}</p>
                        </div>
                    </div>
                    )}
                </div>
                <h3 className="home-next-matchs-title">Prochains matchs : </h3>
                <div className="home-next-matchs-title-container">
                {GetNextMatchs().map((finalNextMatch) => 
                    <div className="match-card">
                        <div className="match-card-header">
                            <p>Match N° {finalNextMatch.id} / Match de {finalNextMatch.phase}</p>
                        </div>
                        <div className="match-card-body">
                            <img className="match-card-logo"src={findLogo(finalNextMatch.equipeDom)} alt="" />
                            <p className="team-name" >{finalNextMatch.equipeDom}</p>
                            <p className="match-score" >{getResult(finalNextMatch.scoreDom)} - {getResult(finalNextMatch.scoreExt)}</p>
                            <p className="team-name" > {finalNextMatch.equipeExt}</p>
                            <img className="match-card-logo"src={findLogo(finalNextMatch.equipeExt)} alt="" />
                        </div>
                        <div className="match-card-footer">
                            <p>{finalNextMatch.date} à {finalNextMatch.heure}</p>
                        </div>
                    </div>
                )}
                </div>
        </div>
    )
}

export default HomePage