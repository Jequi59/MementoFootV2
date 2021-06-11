import React from "react"
import ReactDOM from "react-dom"

import '../app/styles/app.scss'

import Component from './components/Component'

function App(){
  return (
    /* Happy Component Import ;) */
    <Component />
  )
}

ReactDOM.render(<App />, document.getElementById("app"))