import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ImageCard from "./components/ImageCard/ImageCard"
import characters from "./characters.json";
import './App.css';


class App extends Component {

  state = {
    characters
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        {this.state.characters.map(character => (
          <ImageCard
          image={character.image}
          name={character.name}
          
          />
        ))}
        
      
      </div>
    );
  }
}

export default App;
