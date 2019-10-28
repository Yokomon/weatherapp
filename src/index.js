import React from 'react';
import ReactDOM from 'react-dom';
import PreLoader from "./PreLoader"
import SeasonDisplay from './SeasonDisplay'
class App extends React.Component{
    state = {lat: null, errMessage: ""};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errMessage: err.message})
        )
    }

    renderContent(){
        if(this.state.lat && !this.state.errMessage){
            return <SeasonDisplay lat = {this.state.lat} />
            
        }
        if(!this.state.lat && this.state.errMessage){
            return <h2>Error: {this.state.errMessage}</h2>
        }
        return <PreLoader msg = "Please allow location access" />
    }
    // Always call the render function whenever we want to show JSX on the root document
    render (){
        return (<div>            
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));