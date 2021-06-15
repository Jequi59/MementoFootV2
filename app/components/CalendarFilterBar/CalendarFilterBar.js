import React, { Fragment } from 'react'

import './CalendarFilterBar.scss'

function CalendarFilterBar({orderedGroups, teams, setCalendarFilterState}){

    return(
        <div className="calendar-filterbar">
            <label htmlFor="filtre">Filtré par : </label>
            <select name="filtre" id="filtre" onChange={(e)=> setCalendarFilterState(e.target.value)} >
                <option value="">Tous les matchs</option>
               {orderedGroups.map(function(groupe, index){
                   const GroupTeams = teams.filter(team => team.groupe === groupe)
                    return(
                        <Fragment key={index} >
                            <option  key={index} value={groupe} className="group-option">{groupe}</option>
                            {GroupTeams.map((GroupTeam) => 
                                <option key={GroupTeam.id} value={GroupTeam.name} >{GroupTeam.name} </option>)}
                        </Fragment>)
                    }                 
                )}
                <option value="Huitieme" className="group-option">Huitieme de Finale</option>
                <option value="Quart">Quart de Finale</option>
                <option value="Demi" className="group-option">Demie-Finale</option>
                <option value="Final">Finale</option>
            </select>
        </div>
    )
}

export default CalendarFilterBar