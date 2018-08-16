import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hue: "180",
      saturation: "50",
      lightness: "50"
    }
  }

  updateColor = (event) => {
    const newColor = event.target.value;
    console.log('updating Color', newColor)
  }

  hueUpdated = (event) => {
    const newHue = event.target.value;
    this.setState({ hue: newHue })
  }

  saturationUpdated = (event) => {
    const newSaturation = event.target.value;
    this.setState({ saturation: newSaturation })
  }

  lightnessUpdated = (event) => {
    const newLightness = event.target.value;
    this.setState({ lightness: newLightness })
  }

  // alphaUpdated = (event) => {
  //   const newAlpha = event.target.value / 100
  //   this.setState({alpha: newAlpha})
  // }

  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <span className="App-Title-1">A Pretty Useful</span>
          <span className="App-Title-2" style={
            {
              color: `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`
            }}>Color Picker</span>
          <span className="App-Title-3">Created by Somebody/Somehow/Maybe</span>
        </header>
        <section>
          <section className="Main-Picker">
            <div className="ColorBox" style={
              {
                backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`
              }}>
            </div>
            <section className="Sliders">
              <div className="Captions">Hue</div>
              <input type="range" min="0" max="360" onInput={this.updateColor} onChange={this.hueUpdated} value={this.state.hue} />
              <div className="Captions">Saturation</div>
              <input type="range" min="0" max="100" onInput={this.updateColor} onChange={this.saturationUpdated} value={this.state.saturation} />
              <div className="Captions">Lightness</div>
              <input type="range" min="0" max="100" onInput={this.updateColor} onChange={this.lightnessUpdated} value={this.state.lightness} />
              {/* <caption className="Captions">Alpha</caption>
            <input type="range" min="0" max="1" onInput={this.updateColor} onChange={this.alphaUpdated} value={this.state.alpha}/> */}
            </section>
          </section>
          <section>
            <input className="ColorInputs" placeholder={`hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`} type="text"/>
          </section>  
        </section>
      </div>
    );
  }
}

export default App;
