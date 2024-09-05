import useStyles from "../../utils/useStyle.js";
import Pokemon from "../pokemon/Pokemon.js";

class Arena {
  $arena = document.createElement("div");

  constructor() {
    useStyles(this.$arena, arenaContainer);
    this.onInit();
  }

  onInit = () => {
    for (let i = 1; i <= 151; i++) {
      const pokemon = new Pokemon(i);
      this.$arena.appendChild(pokemon.getPokemon());
    }
  };

  getArena = () => {
    return this.$arena;
  };
}

const arenaContainer = {
  width: "100%",
  height: "100dvh",
  background: "rgba(0, 0, 0, .5)",
};

const _img = {
  width: "100px",
  height: "100px",
};

export default Arena;
