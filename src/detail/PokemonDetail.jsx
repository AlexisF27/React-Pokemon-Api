import {useParams} from "react-router-dom"

function PokemonDetail(){

const {name} = useParams()

 return (
    <div className="pokemon-detail">
        Pokemon detail - {name}
    </div>
 )
}

export default PokemonDetail;