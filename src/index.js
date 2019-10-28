import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    // constructor function is also used to initialize our state object
    // super is a reference to the parents constructor function
    constructor(props){
        super(props);

        this.state ={lat: null, err: ""};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // to update the state object, we called setState function
            this.setState({lat: position.coords.latitude});
            }
    
        )
    }
    // Always call the render function whenever we want to show JSX on the root document
    render (){
        return <h1>Latitude: {this.state.lat} </h1>
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));