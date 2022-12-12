import { Component } from 'react';
import './App.css';

class App extends Component {
  //Runs first
  constructor() {
    super();

    this.state = {
      monsters: [],       
    };
  }

  //Runs 3rd
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(()=> {
        return {monsters: users}
          },
          () => {
            console.log(this.state);
          }
        ))
  }
  //Runs second, then runs 4th
   render() { 
      return (
          <div className="App">
            {
              this.state.monsters.map((monster) => {
                return <div key={monster.id}><h1>{monster.name}</h1></div>
              })
            }
          </div>
      );
    }
}

export default App;
