import React, { useState } from 'react'

import '../CalendarPage/CalendarPage.scss'

import teams from '../../datas/teams'

import CalendarFilterBar from '../CalendarFilterBar/CalendarFilterBar'

function CalendarPage(){

    const [calendarFilterState, setCalendarFilter] = useState("")

     const orderedGroups = teams.reduce(
        (acc, team) =>
          acc.includes(team.groupe) ? acc : acc.concat(team.groupe),[]
        ).sort()

    return(
        <div className="calendar-page">
            <CalendarFilterBar orderedGroups={orderedGroups} teams={teams}/>
        </div>
    )
}

export default CalendarPage