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
    const weatherText = season === 'winter' ? "It's gonna rain today, go out with an umbrella" : "It's a sunny weather over there";

    return <h1>{weatherText}</h1>
}

export default SeasonDiplay;