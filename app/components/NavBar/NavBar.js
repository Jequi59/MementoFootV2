import React from 'react'
import {Link} from 'react-router-dom'

import '../NavBar/NavBar.scss'

function NavBar(){

    return(
        <div className="navbar">            
            <ul className="navbar-items">
                <Link to="/"  >
                    <li >Accueil</li>
                </Link>
                <Link to="/equipes">
                    <li >Equipes / Joueurs</li>
                </Link>
                <Link to="/calendrier">
                    <li >Calendrier / Résultats</li>
                </Link>
            </ul>
        </div>
    )
}

export default NavBar