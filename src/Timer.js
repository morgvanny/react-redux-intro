import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    this.stop = this.stop.bind(this);
  }

  componentDidMount() {
    this.start();
  }

  start = () => {
    console.log(this);
    this.interval = setInterval(() => {
      this.setState((state) => {
        return { seconds: state.seconds + 1 };
      });
    }, 1000);
  };

  stop() {
    clearInterval(this.interval);
  }

  reset = () => {
    clearInterval(this.interval);
    this.setState({ seconds: 0 });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>{this.state.seconds}</p>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
