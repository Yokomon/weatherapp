import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    // super is a reference to the parents constructor function
    constructor(props){
        super(props);
    }
    // Always call the render function whenever we want to show JSX on the root document
    render (){
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
    
        )
        return <h1>Latitude: </h1>
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));