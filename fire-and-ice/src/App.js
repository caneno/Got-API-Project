import React, { Component } from 'react';
import Search from './Search';
import CharacterCard  from './CharacterCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      isLoaded: false,
     }
  }

  componentDidMount() {
    fetch('https://api.got.show/api/show/characters/')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        isLoaded: true,
        items: data,
      })
    })
  }

  render() { 
    const { isLoaded, items } = this.state;
     
      if (!isLoaded) {
        return <div>Loading...</div>
      } else {
          return (
            <div>
            <Search/>
              <ul>
                {items.map(item => (
                 <li key={item.id}>
                   <img src={item.image} alt={item.name} height='300'/>
                   
                 </li>
                  
                ))}
              </ul>
            </div>
          )
      }
  }
}
 
export default App;

