import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Footer extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: 'Winser', lastName: 'Espinal', job: 'Project Manager'},
    }
  }

   render() { 
      return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Hello {this.state.name.firstName}, you are a great {this.state.name.job}!
              </p>
              <button 
              onClick={() => {                       
                this.setState(() => {
                    if(this.state.name.firstName === 'Winser') {
                    return {
                        name: { firstName: 'Katherine', lastName: 'Rodriguez', job: 'Accountant' }
                    }
                    }else{
                        return{
                        name: { firstName: 'Winser', lastName: 'Espinal', job: 'Project Manager' }
                        }
                    }
                    }, () => {
                        console.log(this.state)
                    });
               
              }}>
                Change Name
              </button>
            </header>
          </div>
      );
    }
}

export default Footer;
