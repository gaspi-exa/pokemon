import useStyles from "../../utils/useStyle.js";

class Pokemon {
  $pokemon = document.createElement("div");
  $src;
  $id;
  BASE_URL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  constructor(id) {
    useStyles(this.$pokemon, _);
    this.onInit(id);
  }

  onInit = (id) => {
    const img = document.createElement("img");
    img.setAttribute("src", this.BASE_URL + id + ".png");
    this.$pokemon.appendChild(img);
  };

  getPokemon = () => {
    return this.$pokemon;
  };

  setId = (id) => {
    this.$id = id;
  };

  setSrc = (src) => {
    this.$src = src;
  };
}

const _ = {};

export default Pokemon;
