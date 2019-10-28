import React from 'react';

const getSeason = (lat,month) => {
    if (month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter' ; 
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDiplay = props => {
    const season = getSeason(props.lat, new Date().getMonth())
    console.log(season)
    return <h1>SeasonDisplay</h1>
}

export default SeasonDiplay;