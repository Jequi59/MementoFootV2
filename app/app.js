import React, { useState } from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route} from 'react-router-dom'
//style
import '../app/styles/app.scss'
//components
import Banner from './components/Banner/Banner'
import NavBar from "./components/NavBar/NavBar"
import FavBar from './components/FavBar/FavBar'
import HomePage from './components/HomePage/HomePage'
import TeamsPage from './components/TeamsPage/TeamsPage'
import CalendarPage from './components/CalendarPage/CalendarPage'

function App(){

  const [favoriteState, changeFavoriteState] = useState(false)

  return (
    <>
    <Banner />
    <Router>
      <NavBar favoriteState={favoriteState} changeFavoriteState={changeFavoriteState} />
       <div className="main-container">
         <FavBar />
         <Route exact path="/" component={HomePage}/>
         <Route exact path="/equipes" component={TeamsPage}/>
         <Route exact path="/calendrier" component={CalendarPage}/>
       </div>
    </Router>
        
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))