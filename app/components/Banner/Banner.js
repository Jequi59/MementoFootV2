import React from 'react' 

import '../Banner/banner.scss'

import uefa_logo from '../../assets/uefa_logo.png'

function Banner(){
    return(
        <div className="banner">
            <img src={uefa_logo} alt="logo uefa euro 2020" />
            <h1>FIFA Euro 2021 Memento</h1>
            <img src={uefa_logo} alt="logo uefa euro 2020" />
        </div>
    )
}

export default Banner