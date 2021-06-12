import React from 'react'

import './filterBar.scss'

function filterBar({orderedGroups, setFilterState}){
    return(
        <div className="filterbar">
            <label htmlFor="filtre">Filtré par : </label>
            <select name="filtre" id="filtre" onChange={(e) => setFilterState(e.target.value)} >
                <option value="">Ordre Alphabetique</option>
                {orderedGroups.map((group, index) => 
                    <option key={index} value={group}>{group}</option>
                )}
            </select>
        </div>
    )
}

export default filterBar