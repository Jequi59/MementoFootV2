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
import Modal from "./components/Modal/Modal"

function App(){

  const [modalState, changeModalState] = useState(false)
  const [modalTeam, changeModalTeam] = useState()
  const [favTeamState, changeFavTeamState] = useState([])

  function setUpModal(modalValue, team){
    changeModalState(modalValue)
    changeModalTeam(team)
  }

  function addTeamToFav(e, team){
    e.stopPropagation()
    const isAdded = favTeamState.find(favTeam => favTeam.name === team.name)
    if (!isAdded) {
      return changeFavTeamState([...favTeamState, team])
    }
  }

  function removeTeamFromFav(currentTeam){
    const filteredFavTeams = favTeamState.filter(favTeam => favTeam.name !== currentTeam)
    changeFavTeamState(filteredFavTeams)
  }

  return (
    <>
    <Banner />
    <Router>
      <NavBar />
       <div className="main-container">
         <FavBar favTeamState={favTeamState} removeTeamFromFav={removeTeamFromFav} />
         <Route exact path="/" component={HomePage}/>

         <Route exact path="/equipes" 
            render={(props) => 
              <TeamsPage {...props} setUpModal={setUpModal}
              addTeamToFav={addTeamToFav} favTeamState={favTeamState} />} />

         <Route exact path="/calendrier" component={CalendarPage}/>
       </div>
    </Router>
    {modalState ? <Modal changeModalState={changeModalState} modalTeam={modalTeam} 
      favTeamState={favTeamState} addTeamToFav={addTeamToFav} removeTeamFromFav={removeTeamFromFav} /> : null}
    
        
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))