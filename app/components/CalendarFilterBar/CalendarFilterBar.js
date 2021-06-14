import React, { Fragment } from 'react'

import './CalendarFilterBar.scss'

function CalendarFilterBar({orderedGroups, teams}){

    return(
        <div className="calendar-filterbar">
            <label htmlFor="filtre">Filtré par : </label>
            <select name="filtre" id="filtre" >
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
            </select>
        </div>
    )
}

export default CalendarFilterBar