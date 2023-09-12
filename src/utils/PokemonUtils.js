import pokemons from '../json/pokemons.json' assert {type: 'json'};
class PokemonUtils {
    static getAllPokemon = ()=>{
        try {
            return pokemons.results;
        } catch (error) {
            new TypeError("Error loading pokemons");
        }
    }
}

export default PokemonUtils;
