import { Component } from 'react';
import './App.css';

class App extends Component {
  //Runs 1st
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      test: ''       
    };
    console.log('constructor')
  }

  //Runs 3rd
  componentDidMount(){
    console.log('componentDidMount')
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
  //Method created in order to optimize app by removing said method from render
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return { searchField };
    })              
  }

  //Runs 2nd, then runs 4th
   render() {
    console.log('render');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

      return (
          <div className="App">
            <input 
            className='search-box' 
            type='search' 
            placeholder='search monsters' 
            onChange = {onSearchChange}/>
            {
              filteredMonsters.map((monster) => {
                return <div key={monster.id}><h1>{monster.name}</h1></div>
              })
            }
          </div>
      );
    }
}

export default App;
