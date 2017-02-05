// Modules
import React, {Component} from 'react';
import axios from 'axios'; // client to make requests with

// Components
import Output from './Output';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      paras: 4,
      html: true, // shows p tag
      text: ''
    }
  }

  componentWillMount(){
    this.getText();
  }

  /*
    get request from API
    take parameters from state
  */
  getText(){
    axios.get('http://hipsterjesus.com/api?paras=' + this.state.paras + '&html=' + this.state.html)
      .then((response) => {
        this.setState({
          text:response.data.text
        },function(){
          console.log(this.state);
        });
      }).catch((err) => {
        console.log(err);
      }); // get request from API
  }

  render(){
    return (
      <div>
        <h1>Dummy Text Generator</h1>
        <Output value={this.state.text}/>
      </div>
    );
  }
}

export default App;
