import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Squares from "./components/Squares";
import Modal from "./components/Modal";
import Instructions from "./components/Instructions";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as MUIColors from 'material-ui/colors';
import Button from 'material-ui/Button';
import { createMuiTheme } from 'material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import MyButton from "./components/Button";


const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#333',
    },
    secondary: {
      main: '#ff0000',
    },
    error: {
      main: '#bc0980'
    }
  },
})

const error = createMuiTheme({
  palette: {
    primary: {
      main:'#bc0980',
    },
    secondary: {
      main: '#989893',
    },
    error: {
      main: '#bc0980'
    }
  },
})


//Add reset colors button
class App extends Component {
  state = {
    colors: [],
    round: 1,
    score: 0,
    clicked: [],
    modalIsOpen: false,
    highestRound: 1,
    showInstructions: true,
    fadeOut: false
  }

  toggleModal = win => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
    if (win) {
      this.setState({
        modalMessage: "You won! Try the next level!"
      })
    } else {
      this.setState({
        modalMessage: "You lost! Try an easier level!"
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

    var randomProperty = function (obj) {
      var keys = Object.keys(obj)
      return obj[keys[ keys.length * Math.random() << 0]];
    };
  }
  getRandomMUIColor = (colorset) => {
    var keys = Object.keys(MUIColors);
    var randomSet = MUIColors[keys[keys.length * Math.random() <<  0]];
    console.log(randomSet);
    var keys2 = Object.keys(randomSet);
    var randomColor = randomSet[keys2[ keys2.length * Math.random() << 0]];
    console.log(randomColor);
    //if it's not already in the set, return the color, otherwise try again
    if (!colorset.includes(randomColor)) {
      return randomColor;
    } else {
      return this.getRandomMUIColor(colorset);
    }    
  }

  setColors() {
    let numCards = 0,
    colorset = [],
    r = this.state.round;
    this.setState({clicked: []});

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
      // colors.push(this.getRandomColor());
      colorset.push(this.getRandomMUIColor(colorset));
    };

    this.setState({colors: colorset});
  }
  handleLose() {
    console.log("lose");
    this.setState({
      score: 0,
      round: this.state.round - 1
    }, () => {
      this.setColors();
      setTimeout(()=>this.setState({fadeOut: false}), 250);
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
        if (this.state.round > this.state.highestRound) {
          this.setState({highestRound: this.state.round})
        }
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
    this.setState({fadeOut: true});
    if (clicked.includes(color)) {
      this.handleLose();
    } else {
      clicked.push(color);
      
      setTimeout(() => {
        this.setState({
          score: this.state.score + 1,
          clicked: clicked
        }, () => {
          this.checkWin();
          this.setState({fadeOut: false});
        });
      }, 250);

    };
  }

  componentDidMount() {
    this.setColors();
  }

  buttonClicked() {
    alert("hi");
  }

  render() {
    
    return (
        
        <MuiThemeProvider theme={theme}>

        <Header score={this.state.score} round={this.state.round} highestRound={this.state.highestRound}/>
          <div className="main-content">

          <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {this.state.showInstructions ? (
              <Instructions>
                <Button align={"center"} className="dismiss" onClick={() => this.setState({showInstructions: false})}> Got It </Button>
              </Instructions>
            ) : ""}
          </ReactCSSTransitionGroup>

          <Squares fadeOut={this.state.fadeOut} colors={this.state.colors} handleCardClick={this.handleCardClick}/>

         <MyButton clicked={() => this.setColors()} disabled={this.state.clicked.length > 0}> Get New Colors </MyButton>
          </div>
          <Modal show={this.state.modalIsOpen}
            onClose={this.toggleModal} message={this.state.modalMessage}/>
            

        </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;
