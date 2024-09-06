import useStyles from "../../utils/useStyle.js";
import Pokemon from "../pokemon/Pokemon.js";

class Arena {
  $arena = document.createElement("div");
  $pokemonsList = [];

  constructor(pokemonsList) {
    useStyles(this.$arena, arenaContainer);
    this.setPokemonsList(pokemonsList);
    this.onInit();
  }

  onInit = () => {
    this.$pokemonsList.map((_pokemon, index) => {
      const pokemon = new Pokemon(_pokemon);
      if (index % 2 === 0) {
        pokemon.invert();
      }
      this.$arena.appendChild(pokemon.getPokemon());
    });
  };

  setPokemonsList = (pokemonsList) => {
    this.$pokemonsList = pokemonsList;
  };

  getArena = () => {
    return this.$arena;
  };
}

const arenaContainer = {
  width: "100%",
  height: "100dvh",
  background: "rgba(0, 0, 0, .5)",
  display: "grid",
  gridTemplateColumns: "repeat(10, 1fr)",
  gridTemplateRows: "repeat(16, 1fr)",
  gap: "10px",
};

export default Arena;
