import { useState } from 'react';
import './App.css';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  console.log(searchField);

  const onSearchChange = (event) => {
         const searchFieldString = event.target.value.toLocaleLowerCase();
         setSearchField(searchFieldString);
         
  }

  return (
    <div className="App">
      <h1 className='app-title'>The Monsters</h1>
        {
           <SearchBox 
              className = 'monsters-search-box'  
              onChangeHandler = {onSearchChange} 
              placeholder='search monsters'            
              />    /*       
          <Cardlist monsters = {filteredMonsters} className='card-list' /> */
        }            
    </div>
  )
  
}

// class App extends Component {
//   //Runs 1st
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//       test: ''       
//     };
//     console.log('constructor')
//   }

//   //Runs 3rd
//   componentDidMount(){
//     console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(()=> {
//         return {monsters: users}
//           },
//           () => {
//             console.log(this.state);
//           }
//         ))    
//   }
//   //Method created in order to optimize app by removing said method from render
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(()=>{
//       return { searchField };
//     })              
//   }

//   //Runs 2nd, then runs 4th
//    render() {
//     console.log('render');

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//       return (
//           <div className="App">
//             <h1 className='app-title'>The Monsters</h1>
//             <SearchBox 
//               className = 'monsters-search-box'  
//               onChangeHandler = {onSearchChange} 
//               placeholder='search monsters'            
//               />           
//             <Cardlist monsters = {filteredMonsters} className='card-list' />
//           </div>
//       );
//     }
// }

export default App;
