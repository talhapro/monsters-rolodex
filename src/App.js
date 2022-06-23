// import { Component } from 'react';
import {useState, useEffect} from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';


const App = () => {


  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
  });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  

  const onKeySearch = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
   }



  return (

    <div className="App">

    <div className='app-title'>
      MonsterS RoloDeX

    </div>


    <SearchBox 
      className = 'monster-search-box'
      onChangeHandler = {onKeySearch}
      placeholder={'search monsters'}
    />
    
    <CardList monsters = {filteredMonsters}/ >

  </div>

  );
}


// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//        monsters: [],
//        searchField: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) =>
//       this.setState(
//       () => {
//         return {monsters: users}
//       },
//       () => {
        
//       }
//     ));
//   }
  
//   onKeySearch = (event) => {
    
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField }
//     });
//   }


//   render () {

//     const {monsters, searchField} = this.state;
//     const { onKeySearch } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
     

//       <div className="App">

//         <div className='app-title'>
//           MonsterS RoloDeX

//         </div>


//         <SearchBox 
//           className = 'monster-search-box'
//           onChangeHandler = {onKeySearch}
//           placeholder={'search monsters'}
//         />
//         <CardList monsters = {filteredMonsters}/ >

//       </div>
//     );
//   }
// }


export default App;
