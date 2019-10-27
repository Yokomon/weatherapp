import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
   render(){
       return <h1>This is where the document takes place!</h1>
   }
}

ReactDOM.render(<App />, document.querySelector("#root"));