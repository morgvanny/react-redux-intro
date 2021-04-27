import "./App.css";
import Timer from "./Timer.js";
import NewPerson from "./NewPerson";
import PokemonList from "./PokemonList";
import PokemonContainer from "./PokemonContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Counter from "./Counter";
import React, { Component } from "react";
const names = ["Theodore", "Stacey", "Riley"];
export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { people: [{ name: "Alex" }, { name: "Rick" }] };
  // }

  state = { people: [{ name: "Alex" }, { name: "Rick" }] };

  // addPerson = () => {
  //   // this.state.people.push({ name: names[0] });
  //   this.setState((state) => {
  //     return {
  //       people: [
  //         ...state.people,
  //         { name: names[Math.floor(Math.random() * names.length)] },
  //       ],
  //     };
  //   });
  // };

  addPerson = (name) => {
    this.setState((state) => {
      return {
        people: [...state.people, { name }],
      };
    });
  };

  render() {
    const people = this.state.people.map((p) => {
      return <li key={p.name}>{p.name}</li>;
    });
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
            <li>
              <Link to="/timer">Timer</Link>
            </li>
            <li>
              <Link to="/pokemon">Pokemon</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/people">
            <h1>Hello</h1>
            <p>My name is {this.props.name}</p>
            <h2>Here are some people:</h2>
            <ul>{people}</ul>
            <NewPerson addPerson={this.addPerson} />
          </Route>
          <Route path="/timer">
            <Timer />
          </Route>
          <Route
            path="/pokemon/:id"
            render={(routerProps) => (
              <PokemonContainer
                url={`https://pokeapi.co/api/v2/pokemon/${routerProps.match.params.id}`}
                history={routerProps.history}
              />
            )}
          />
          <Route
            path="/pokemon"
            render={(routerProps) => <PokemonList routerProps={routerProps} />}
          />

          <Route path="/">
            <h1>Welcome to the App</h1>
            <Counter />
          </Route>
        </Switch>
        {/* <button onClick={this.addPerson}>New Person</button> */}
      </Router>
    );
  }
}
