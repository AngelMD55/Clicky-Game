import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ImageCard from "./components/ImageCard/ImageCard";
import Footer from "./components/Footer/Footer";
import characters from "./characters.json";
import './App.css';

//App component 
class App extends Component {

  state = {
    characters,
    count: 0,
    selectedIds: [],
    highScore: 0
  };

  //handles increment for the Counter component.
  handleIncrement = (id) => {
    this.setState({ count: this.state.count + 1 }, () => {

      let matched = (this.state.selectedIds).includes(id);
      let count = (this.state.count)
      if (count === 12){
        alert("You Win!!!")
      }

      if (matched) {
        this.setState({ count: 0 });
        this.onClearArray();
        this.randomPics();
        alert("You lose!!! Play again")

      } else {
        this.pushIds(id);
        this.renderHighestScore();
        this.randomPics();
      };
    });
  };

  // Sets the highest score.
  renderHighestScore = () => {
    if (this.state.count >= this.state.highScore) {
      this.setState({ highScore: this.state.count });
    };
  };

  //clear array of selectedIds when someone hits the same image more than once. 
  onClearArray = () => {
    this.setState({ selectedIds: [] });
  };

  //pushes the image id to an array of selected images.
  pushIds = (id) => {
    this.setState({ selectedIds: [...this.state.selectedIds, id] });
  };

  // shuffles the images 
  randomPics() {
    let pictures = this.state.characters;

    for (let i = pictures.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pictures[i], pictures[j]] = [pictures[j], pictures[i]];
    };
    this.setState({ characters: pictures });
    return pictures;
  };

  render() {
    return (
      <div className="App">
        <div>
          <Navbar count={this.state.count}
            highScore={this.state.highScore}
          />
        </div>
        <div style={{ paddingTop: "73px" }}>
          <Jumbotron />
          <p id="lost" style={{ display: "none", color:"red" }}>You lose!! please try again</p>
          <p id="win" style={{ display: "none", color: "red" }}>You win!!!</p>
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
            ))};
          </div>
        </div>
        <Footer />
      </div>

    );
  };
};

export default App;
