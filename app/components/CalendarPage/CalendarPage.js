import React, { useState } from 'react'

import '../CalendarPage/CalendarPage.scss'

import teams from '../../datas/teams'

import CalendarFilterBar from '../CalendarFilterBar/CalendarFilterBar'
import MatchCard from '../MatchCard/MatchCard'

import matchs from '../../datas/matchs'

function CalendarPage(){
    const [calendarFilterState, setCalendarFilterState] = useState("")

     const orderedGroups = teams.reduce(
        (acc, team) =>
          acc.includes(team.groupe) ? acc : acc.concat(team.groupe),[]
        ).sort()   

    

    return(
        <div className="calendar-page">
            <CalendarFilterBar orderedGroups={orderedGroups} 
                teams={teams} 
                calendarFilterState={calendarFilterState}
                setCalendarFilterState={setCalendarFilterState} />
            <div className="match-cards">
                {matchs.map((match) =>
                !calendarFilterState || calendarFilterState === match.equipeDom ||
                calendarFilterState === match.equipeExt || calendarFilterState === match.detail || calendarFilterState === match.phase ?
                (<MatchCard key={match.id} match={match} />) : null
            )}
            </div>
            
        </div>
    )
}

export default CalendarPage