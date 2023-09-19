import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonUtils from "../utils/PokemonUtils";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function PokemonDetail() {
  const { name } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState([]);

  useEffect(() => {
    setPokemonDetail(PokemonUtils.getDetailPokemon());
  }, []);

  return (
    <div className="pokemon-detail">
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
            <div className="pokemon-ability"> 
              {pokemonDetail?.abilities?.map((item) => (
                <div key={item.ability.name}>
                  Ability Name - {item.ability.name}
                </div>
              ))}
            </div>
            <div className="pokemon-base-experience">
              Base experience - {pokemonDetail.base_experience}
            </div>
            <div className="pokemon-game-indices">
              {pokemonDetail?.game_indices?.map((item) => (
                <div key={item.version.name}>
                  Game version - {item.version.name} 
                  <br/>
                  Index in the game - {item.game_index}
                </div>
              ))}
            </div>
            <div className="pokemon-height">
                Pokemon Height - {pokemonDetail.height}
            </div>
            <div className="pokemon-id">
              Pokemon id - {pokemonDetail.id}
            </div>
            <div className="pokemon-held-items">
              {pokemonDetail?.held_items?.map((item) => (
                <div key={item.item.name}>
                  Item that can be hold - {item.item.name} 
                  <br/>

                </div>
              ))}
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default PokemonDetail;
