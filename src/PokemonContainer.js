import React, { Component } from "react";
import Pokemon from "./Pokemon";

export default class PokemonContainer extends Component {
  state = { displayFront: true };

  componentDidMount() {
    this.controller = new AbortController();
    const { signal } = this.controller;
    fetch(this.props.url, { signal })
      .then((r) => r.json())
      .then((data) => {
        this.setState({
          name: data.name,
          height: data.height,
          front: data.sprites.front_default,
          back: data.sprites.back_default,
        });
      });
  }

  flip = () => {
    this.setState((state) => {
      return { displayFront: !state.displayFront };
    });
  };

  componentWillUnmount() {
    this.controller.abort();
  }

  render() {
    console.log(this.props.routerProps);
    return (
      <div>
        <Pokemon flip={this.flip} name={this.state.name} {...this.state} />
      </div>
    );
  }
}
