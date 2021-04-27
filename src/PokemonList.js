import React, { Component } from "react";
import PokemonContainer from "./PokemonContainer";

export default class PokemonList extends Component {
  state = { pokemon: [] };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((r) => r.json())
      .then((data) => {
        // data.results.forEach((pokemon) => {
        //   fetch(pokemon.url)
        //     .then((r) => r.json())
        //     .then((data) => {
        //       this.setState((state) => {
        //         return { pokemon: [...state.pokemon, data] };
        //       });
        //     });
        // });
        this.setState({ pokemon: data.results });
      });
  }

  render() {
    console.log(this.props.routerProps);
    const pokemon = this.state.pokemon.map((p) => {
      return (
        <div>
          {/* <p>{p.name}</p>
          <p>Height: {p.height}</p>
          <img src={p.sprites.front_default} /> */}
          <PokemonContainer name={p.name} url={p.url} />
        </div>
      );
    });
    return <div>{pokemon}</div>;
  }
}
