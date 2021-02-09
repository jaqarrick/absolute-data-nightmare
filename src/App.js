import React from "react";
import * as Tone from "tone";
class App extends React.Component {
  constructor(props) {
    super(props);
    const transport = Tone.Transport;

    const synth = new Tone.MonoSynth().toDestination();

    const clicker = (time) => {
      console.log(time);
      synth.triggerAttackRelease(
        Math.floor(Math.random() * 440) + 200,
        0.3,
        time
      );
      randomString = getRandomString();
    };

    const getRandomString = () =>
      `Random String ${Math.floor(Math.random() * 1000000)}`;
    let randomString = getRandomString();
    const loop = new Tone.Loop(clicker, 0.2);
    const startLoop = () => {
      transport.start();
      loop.start(0);
      transport.start();
    };

    this.state = {
      startLoop,
      randomString,
    };
  }

  render() {
    return (
      <button onClick={this.state.startLoop}>
        {" "}
        {this.state.randomString}{" "}
      </button>
    );
  }
}

export default App;
