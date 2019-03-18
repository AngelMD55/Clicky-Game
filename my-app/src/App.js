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
    selectedIds: [],
    highScore: 0
  }

  handleIncrement = (id) => {
    this.setState({ count: this.state.count + 1 }, () => {

      let matched = (this.state.selectedIds).includes(id)

      if (matched) {
        this.setState({ count: 0 })
        this.onClearArray();
        this.randomPics()

      } else {
        this.pushIds(id)
        this.renderHighestScore()
        this.randomPics()
      }
    });
  };

  renderHighestScore = () => {
    if (this.state.count >= this.state.highScore) {
      this.setState({ highScore: this.state.count })
    }
  }

  onClearArray = () => {
    this.setState({ selectedIds: [] });
  };

  pushIds = (id) => {
    this.setState({ selectedIds: [...this.state.selectedIds, id] })
  }

  randomPics() {
    let pictures = this.state.characters

    for (let i = pictures.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pictures[i], pictures[j]] = [pictures[j], pictures[i]];
    }
    this.setState({ characters: pictures })
    return pictures;
  }

  render() {
    return (
      <div className="App">
      <div>
        <Navbar count={this.state.count}
            highScore={this.state.highScore}
        />
      </div>
      <div  style={{paddingTop: "73px"}}>
        <Jumbotron />
      </div>  
        <div className="container">
          <div id="imgContainer" className="justify-content-center align-self-center">
            {this.state.characters.map(character => (
              <ImageCard
                image={character.image}
                name={character.name}
                id={character.id}
                incrementCounter={() => this.handleIncrement(character.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
