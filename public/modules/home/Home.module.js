import Backdrop from "../../components/Backdrop.js";
import Arena from "../../components/Arena.js";
import EPokemon from "../../constants/pokemon.js";
// import EModules from "../../constants/modules.js";
import Form from "../../components/form/Form.js";
import EUserStatus from "../../constants/user-status.js";

class HomeModule {
  $pokemonsList = [];
  $root;

  constructor(root) {
    this.setRoot(root);
  }

  onInit = () => {
    this.getPokemons().then((next) => {
      this.setPokemonsList(next);

      const backdrop = new Backdrop();
      const arena = new Arena();

      if (this.$pokemonsList?.length) {
        backdrop.setImage(
          this.$pokemonsList.find((pok) => pok.name === EPokemon.MEWTWO)?.url
        );
      }

      const form = new Form(EUserStatus.LOGGED_OUT, false);
      form.setAction("http://localhost/_TP_2024/server/api/login");
      arena.getArena().appendChild(form.getform());

      this.$root.appendChild(backdrop.getbackdrop());
      this.$root.appendChild(arena.getArena());
    });
  };

  getPokemons = async () => {
    try {
      const resp = await fetch(
        `http://localhost/_TP_2024/server/api/pokemons/`,
        {
          method: "GET",
          mode: "cors",
        }
      );

      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`);
      }

      const data = await resp.json();
      return data;
    } catch (error) {
      console.error("Error fetching pokemons:", error);
      return [];
    }
  };

  setPokemonsList = (next) => {
    this.$pokemonsList = next;
  };

  setRoot(root) {
    this.$root = root;
  }
}

export default HomeModule;
