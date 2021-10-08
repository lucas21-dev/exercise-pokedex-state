import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokeindex: 0,
      type: 'Fire',
    }

    this.handlePokeRender = this.handlePokeRender.bind(this);
    this.handleFirePokeRender = this.handleFirePokeRender.bind(this);
    this.handlePsychicPokeRender = this.handlePsychicPokeRender.bind(this);
  }

  handlePokeRender() {
    if(this.state.pokeindex === (this.props.pokemons.filter((poke) => poke.type === this.state.type).length -1)){
      this.setState((_estadoAnterior, _props) => ({
        pokeindex: 0,
      }))
    } else {
        this.setState((estadoAnterior, _props)=> ({
          pokeindex: estadoAnterior.pokeindex + 1,
        }))
    }
  }

  handleFirePokeRender() {
    this.setState((_oldState, _props) => ({
      type: "Fire",
    }))
  }

  handlePsychicPokeRender() {
    this.setState((_oldState, _props) => ({
      type: 'Psychic',
    }))
  }



  render() {
    return (
      <div className="content">
        <div className="pokedex">
          {<Pokemon pokemon={this.props.pokemons.filter((poke) => poke.type === this.state.type)[this.state.pokeindex]} />}
        </div>
        <nav className="nav-buttons">
          <button className="fire-pokemon" onClick={this.handleFirePokeRender}>Fire</button>

          <button className="next-pokemon" onClick={this.handlePokeRender}>{'Next Pokemon >>'}</button>
          
          <button className="psychic-pokemon" onClick={this.handlePsychicPokeRender}>Psychic</button>

        </nav>
      </div>
    );
  }
  }

export default Pokedex;