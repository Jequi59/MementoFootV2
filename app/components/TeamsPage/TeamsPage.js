import React, { useState } from 'react'

import '../TeamsPage/TeamsPage.scss'

import FilterBar from '../FilterBar/FilterBar'
import TeamCard from '../TeamCard/TeamCard'

import teams from '../../datas/teams'

const orderedGroups = teams.reduce(
    (acc, team) =>
      acc.includes(team.groupe) ? acc : acc.concat(team.groupe),[]
    ).sort()

function TeamsPage({setUpModal, addTeamToFav, favTeamState}){

    const [filterState, setFilterState] = useState("")

    function orderTeamsByAlpha(a, b){
        return a.name > b.name
    }

    return(
        <div className="teams-page">
            <FilterBar orderedGroups={orderedGroups} setFilterState={setFilterState} />
            <div className="teams-list">
                {teams.sort(orderTeamsByAlpha).map((team) => 
                    !filterState || filterState === team.groupe ?
                    ( <TeamCard key={team.id} team={team} setUpModal={setUpModal} 
                        addTeamToFav={addTeamToFav} favTeamState={favTeamState}/>) :
                    null
                )}

                
            </div>
        </div>
    )
}

export default TeamsPage