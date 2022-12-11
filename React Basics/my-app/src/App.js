import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Winser',
      job: 'Project Manager'
    }
  }

   render() { 
      return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Hello {this.state.name}, you are a great {this.state.job}!
              </p>
              <button onClick={() => {
                if (this.state.name === 'Winser'){
                  this.setState({ name: 'Katherine' })
                }else{
                  this.setState({ name: 'Winser' })
                }
                console.log(this.state.name)
              }}>
                Change Name
              </button>
            </header>
          </div>
      );
    }
}

export default App;
