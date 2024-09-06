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
    this.$pokemonsList.map((_pokemon) => {
      const pokemon = new Pokemon(_pokemon);
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

const _img = {
  width: "100px",
  height: "100px",
};

export default Arena;
