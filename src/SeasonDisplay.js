import React from 'react';
import "./SeasonDisplay.css"
const seasonConfig = {
    summer : {
        text: "It's a sunny weather over here",
        iconName:  'sun'
    },
    winter : {
        text: "It's gonna rain today.",
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
    <div className={`season-display ${season}`}>
        <i className = {`left-icon massive ${iconName} icon`} />
        <h3>{text}</h3> 
        <i className = {`right-icon massive ${iconName} icon`} />
    </div>)
}

export default SeasonDiplay;