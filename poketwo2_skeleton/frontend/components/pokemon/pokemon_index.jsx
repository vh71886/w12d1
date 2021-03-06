import React from 'react';
import PokemonIndexItem from "./pokemon_index_item"

class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }
  
  render(){
    return (
    <section className="pokedex">
      <ul>
      {this.props.pokemon.map((poke) => (
        // <li className="pokemon-index-item" key={poke.id}>
          <PokemonIndexItem key={poke.id} pokemon={poke} />
        // </li>
      ))}
      </ul>
    </section>
    )
  }
  }

  export default PokemonIndex;