import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    state = {lat: null, errMessage: ""};
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errMessage: err.message})
        )
    }
    // Always call the render function whenever we want to show JSX on the root document
    render (){
    if(this.state.lat && !this.state.errMessage){
        return <h1>Latitude: {this.state.lat}</h1>
        
    }
    if(!this.state.lat && this.state.errMessage){
        return <h2>Error: {this.state.errMessage}</h2>
    }
    return <h1>Loading...</h1>
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));