import * as React from "react";
import "./pokemonCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import pokemonImage from "../assets/Pokeball.png";
import { Link } from "react-router-dom";

export function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <Card sx={{ maxWidth: 345, minWidth: 200 }} className="pokemon-container">
        <img width="50%" src={pokemonImage} alt="green iguana" />
        <CardActionArea className="pokemon-container">
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {pokemon.name.toUpperCase()}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={`pokemon/${pokemon.name}`}>Detail</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default PokemonCard;
