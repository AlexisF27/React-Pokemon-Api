import PokemonCard from "./PokemonCard";
import "./pokemonGrid.css"

export function PokemonGrid(){
    return(
        <div className="pokemon-grid">
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            
        </div>
    )

}

export default PokemonGrid;