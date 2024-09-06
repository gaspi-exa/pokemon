import useStyles from "../../utils/useStyle.js";
import EAvatarMode from "../../constants/avatar-mode.js";

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
  $url;
  $id;
  $name;

  constructor({ _id, name, url }) {
    useStyles(this.$pokemon, container);
    this.setId(_id);
    this.setName(name);
    if (url) this.setUrl(url);
    this.onInit();
  }

  onInit = () => {
    const imgEl = document.createElement("img");
    useStyles(imgEl, imgStyle);
    imgEl.src = this.getSrcUrl(EAvatarMode.sprite_gif);
    imgEl.alt = this.$name;
    this.$pokemon.appendChild(imgEl);
  };

  getSrcUrl = (mode) => {
    const url = baseUrlsList[mode];
    switch (mode) {
      case EAvatarMode.sprite_png:
        return `${url}${this.$id}.png`;
      case EAvatarMode.sprite_gif:
        return `${url}${this.$name.replace("-", "")}.gif`;
      case EAvatarMode.png_normal:
        return `${url}${this.$name}.png`;
      case EAvatarMode.png_shiny:
        return `${url}${this.$name}.png`;
      case EAvatarMode.other:
        return `${url}${String(this.$id).padStart(3, "0")}.png`;
    }
  };

  invert = () => {
    this.$pokemon.style.transform = "scaleX(-1)";
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

  setUrl(url) {
    this.$url = url;
  }

  getUrl = () => {
    return this.$url;
  };
}

const container = {
  width: "50px",
  height: "50px",
};

const imgStyle = {
  height: "100%",
};

export default Pokemon;
