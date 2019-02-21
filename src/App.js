import React from "react";
import CrystalPics from "./components/CrystalPictures";
import Scores from "./components/Scores";
import Header from "./components/Header"
import crystals from "./crystals.json";
import Data from "./components/HistoricData"
import './App.css';

class App extends React.Component {
  state = {
    crystals,
    score: 0,
    value: [0, 0, 0, 0],
    target: 0,
    wins: 0,
    loses: 0
  };

  componentDidMount=()=>{
    this.updateValues()
    this.setTarget()
  }

  handleIncrement = (id, value) => {
    this.setState({score: this.state.score + value})
    if (this.state.score > this.state.target) {
      let newLoses = this.state.loses + 1
      this.setState({score: 0, loses: newLoses})
      this.updateValues()
      this.setTarget()
    } else if (this.state.score == this.state.target){
      let newWins = this.state.wins + 1
      this.setState({score: 0, wins: newWins})
      this.updateValues()
      this.setTarget()
    }
  };

  updateValues=()=>{
    let newValues = this.state.value.map(x => (x = (Math.floor(Math.random() * 12) + 1)))
    this.setState({value: newValues})
  }

  setTarget=()=>{
    let newTarget = (Math.floor(Math.random() * (120-19+1)));
    this.setState({ target: newTarget})
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Scores target={this.state.target} score={this.state.score}/>
          {
            this.state.crystals.map(crystal=> (
              <CrystalPics
              ClassName="image"
              image={crystal.picture}
              id={crystal.id}
              key={crystal.id}
              value={this.state.value[crystal.id]}
              score={this.handleIncrement}
              />
            ))
          }
        <Data wins={this.state.wins} loses={this.state.loses} />
      </div>
    )
  };
};
export default App;
