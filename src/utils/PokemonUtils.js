import pokemons from "../json/pokemons.json" assert { type: "json" };
import pokemonDetail from "../json/pokemon.json" assert { type: "json" };

class PokemonUtils {
  static getAllPokemon = () => {
    try {
      return pokemons.results;
    } catch (error) {
      new TypeError("Error loading pokemons");
    }
  };

  static getDetailPokemon = () => {
    try {
      return pokemonDetail;
    } catch (error) {
      new TypeError("Error loading the pokemon ability detail");
    }
  };

}

export default PokemonUtils;
