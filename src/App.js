import React from "react";
import * as Tone from 'tone'
class App extends React.Component {
  constructor(props) {
    super(props)
    const transport = Tone.Transport
    const clicker = time => {
      console.log(time)
      randomString = getRandomString()
    }

    const getRandomString = () => `Random String ${Math.floor(Math.random() * 1000000)}`
    let randomString = getRandomString()
    const loop = new Tone.Loop(clicker, 1)
    const startLoop = () => {
      transport.start()
      loop.start(0)
      transport.start()
    }

    this.state = {
      startLoop,
      randomString
    }
  }

  render() {

    return (<button onClick={this.state.startLoop}> {this.state.randomString} </button>)
  }

}


export default App
