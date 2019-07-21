import React, { Component } from 'react';
import Search from './Search';
import CharacterCard  from './CharacterCard';
import Card from './Card';
import './App.css';
import 'tachyons'
import ReactCardFlip from 'react-card-flip';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      searchfield: '',
      isFlipped: false,
     };
     this.handleClick = this.handleClick.bind(this);
  }

  

  componentDidMount() {
    fetch('https://api.got.show/api/show/characters/')
    .then(resp => resp.json())
    .then(data => {
      const charImg = data.map(
        (charHouse) => {
          return charHouse; 
        }
      ); 
      this.setState({
        searchfield: '',
        items: charImg,
      })
    })
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e.currentTarget.innerText);
    
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 
  dropDownValue = (e) => {
    this.setState({ searchfield: e.target.value})
    
  }
  
  render() { 
    const { searchfield, items, selectValue } = this.state;
    const selectedChar = this.state.items.filter(char => {
      return char.house === this.state.searchfield;
    })
    
    
    
     return (
        <div>
          <Search selectItem={items}  dropDown={this.dropDownValue} initSelect={selectValue}/>
          <hr className='lin3 mt3'/>
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
            <div key="front">
              {/* This is the front of the card. */}
              <CharacterCard characters={selectedChar} clickedItem={this.handleClick}/>
            </div>

            <div key="back">
              {/* This is the back of the card. */}
              <Card charName={selectedChar} clickedItem={this.handleClick}/> 
            </div>
          </ReactCardFlip>
        </div>
          )
  }
}
 
export default App;

