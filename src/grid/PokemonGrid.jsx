import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import "./pokemonGrid.css";
import PokemonUtils from "../utils/PokemonUtils";

export function PokemonGrid() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(PokemonUtils.getAllPokemon())
  }, []);

  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonGrid;
