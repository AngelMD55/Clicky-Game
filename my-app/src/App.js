import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ImageCard from "./components/ImageCard/ImageCard"
import characters from "./characters.json";
import './App.css';


class App extends Component {

  state = {
    characters,
    count: 0,
    selectedIds :[]
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log(this.state.characters.id)
      this.randomPics()
    });
  };

  // pushIds = () => {
  //   this.setState({ selectedIds: })
  // }

  randomPics() {
    let pictures = this.state.characters

      for (let i = pictures.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [pictures[i], pictures[j]] = [pictures[j], pictures[i]];
      }    
      this.setState({characters:pictures})
      return pictures;
  }

   
  

  render() {
    return (
      <div className="App">
        <Navbar count={this.state.count} />
        <Jumbotron />
        <div className="container">
          <div id="imgContainer" className="justify-content-center align-self-center">
            {this.state.characters.map(character => (
              <ImageCard
                image={character.image}
                name={character.name}
                id={character.id}
                incrementCounter={this.handleIncrement.bind(this)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
