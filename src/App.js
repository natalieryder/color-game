import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Squares from "./components/Squares";
import Modal from "./components/Modal";
import Instructions from "./components/Instructions";

class App extends Component {
  state = {
    colors: [],
    round: 1,
    score: 0,
    clicked: [],
    modalIsOpen: false
  }

  toggleModal = win => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
    if (win) {
      this.setState({
        message: "You won! Try the next level!"
      })
    } else {
      this.setState({
        message: "You lost! Try an easier level!"
      })
    }
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setColors() {
    let numCards = 0,
    colors = [],
    r = this.state.round;


    switch(true) {
      // round 1 has 4 cards, so 3 + round 
      case (r > -3 &&  r <= 1):
      numCards = 3 + r;
      break;
      // for each after round 1, add 2 more
      case (r < 5):
      numCards = 4 + 2 * (r - 1);
      break;
      // for each after round 4, add 1 more
      default:
      numCards = 10 + (r - 4);
    }

    for (var i = 0; i < numCards; i++) {
      colors.push(this.getRandomColor());
    };

    this.setState({colors: colors});
  }
  handleLose() {
    console.log("lose");
    this.setState({
      score: 0,
      round: this.state.round - 1
    }, () => {
      this.setColors();
      this.toggleModal(false);
    });
 
  }
  checkWin() {
    if (this.state.score >= this.state.colors.length) {
      //use the callback so setColors only runs when the state has been updated
      this.setState({
        score: 0,
        round: this.state.round + 1,
      }, () => {
        this.setColors();
        this.toggleModal(true);
        });

    } else {
      this.shuffle();
    }
  }

  shuffle() {
    let colors = this.state.colors,
    currentIndex = colors.length,
    temporaryValue = [],
    randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = colors[currentIndex];
      colors[currentIndex] = colors[randomIndex];
      colors[randomIndex] = temporaryValue;
    }

    this.setState({colors: colors})
  }

  handleCardClick = color => {
    let clicked = this.state.clicked;

    if (clicked.includes(color)) {
      this.handleLose();
    } else {
      clicked.push(color);
      this.setState({
        score: this.state.score += 1,
        clicked: clicked
      }, this.checkWin);
    };
  }

  componentDidMount() {
    this.setColors();
  }
  render() {
    return (
        <div className="App">
          <Header score={this.state.score} round={this.state.round}/>
          <div className="topPadding">
            <Instructions/>
            <Squares colors={this.state.colors} handleCardClick={this.handleCardClick}/>
          </div>
          <Modal show={this.state.modalIsOpen}
            onClose={this.toggleModal} message={this.state.message}/>

        </div>
    );
  }
}

export default App;
