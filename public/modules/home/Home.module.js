import Backdrop from "../../components/Backdrop.js";
import PokemonService from "../../services/pokemon.service.js";
import EPokemon from "../../constants/pokemon.js";
import Arena from "../../components/arena/Arena.js";

class HomeModule {
  $pokemonsList = [];
  $root;
  $service;

  constructor(root) {
    this.$root = root;
    this.$service = new PokemonService();
  }

  onInit = () => {
    this.$service.getPokemons().then((next) => {
      this.setPokemonsList(next);
      if (this.$pokemonsList?.length) {
        const backdrop = new Backdrop();
        backdrop.setImage(
          this.$pokemonsList.find((pok) => pok.name === EPokemon.MEWTWO)?.url
        );
        const arena = new Arena(this.$pokemonsList);
        // this.$root.appendChild(arena.getArena());
        this.$root.appendChild(backdrop.getbackdrop());
      }
    });
  };

  setPokemonsList = (next) => {
    this.$pokemonsList = next;
  };
}

export default HomeModule;
