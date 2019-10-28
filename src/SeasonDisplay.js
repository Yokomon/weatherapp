import React from 'react';

const seasonConfig = {
    summer : {
        text: "It's a sunny weather over here",
        iconName:  'sun'
    },
    winter : {
        text: "It's gonna rain today, go out with an umbrella",
        iconName: 'snowflake'
    }
}

const getSeason = (lat,month) => {
    if (month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter' ; 
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDiplay = props => {
    const season = getSeason(props.lat, new Date().getMonth())
    const {text, iconName} = seasonConfig[season];
    return (
    <div>
        <i className = {`${iconName} icon`} />
        <h1>{text}</h1> 
        <i className = {`${iconName} icon`} />
    </div>)
}

export default SeasonDiplay;