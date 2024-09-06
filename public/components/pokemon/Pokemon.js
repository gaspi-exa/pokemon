import useStyles from "../../utils/useStyle.js";

const baseUrlsList = {
  sprite_png:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/", // 1.png
  sprite_gif: "https://play.pokemonshowdown.com/sprites/xyani/", // bulbasaur.gif
  png_normal: "https://img.pokemondb.net/sprites/home/normal/", // bulbasaur.png
  png_shiny: "https://img.pokemondb.net/sprites/home/shiny/", // bulbasaur.png
  other: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/", // 001.png
};

class Pokemon {
  $pokemon = document.createElement("div");
  $src;
  $id;
  $name;

  constructor({ _id, name }) {
    useStyles(this.$pokemon, _);
    this.setId(_id);
    this.setName(name);
    this.onInit();
  }

  onInit = () => {
    const img = document.createElement("img");
    img.src = this.getUrl("other");
    img.alt = this.$name;
    this.$pokemon.appendChild(img);
  };

  getUrl = (mode) => {
    const url = baseUrlsList[mode];
    switch (mode) {
      case "sprite_png":
        return `${url}${this.$id}.png`;
      case "sprite_gif":
        return `${url}${this.$name}.gif`;
      case "png_normal":
        return `${url}${this.$name}.png`;
      case "png_shiny":
        return `${url}${this.$name}.png`;
      case "other":
        return `${url}${String(this.$id).padStart(3, "0")}.png`;
    }
  };

  getPokemon = () => {
    return this.$pokemon;
  };

  setId = (id) => {
    this.$id = id;
  };

  setName = (name) => {
    this.$name = name;
  };

  setSrc = (src) => {
    this.$src = src;
  };
}

const _ = {};

export default Pokemon;
