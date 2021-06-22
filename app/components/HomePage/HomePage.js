import React from 'react'

import '../HomePage/HomePage.scss'

import matchs from '../../datas/matchs'

function HomePage(){

    const now = new Date()

    function tranformDate(matchDate){
        const correctDate = matchDate.split('/');
        var finalDate = new Date(correctDate[2], correctDate[1] - 1, correctDate[0]);
        return finalDate    
    }

    const dateMatch1 = tranformDate(matchs[15].date)

    console.log(now);
    console.log(dateMatch1);

    if (now > dateMatch1) {
        console.log("passé");
    } else {
        console.log("futur");
    }

    
    return(
        <div className="home-page">
                <h3 className="home-last-matchs-title">Derniers matchs : </h3>
                <h3 className="home-next-matchs-title">Prochains matchs : </h3>
        </div>
    )
}

export default HomePage