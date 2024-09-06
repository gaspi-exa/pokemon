class PokemonService {
  pokemonsList = [];

  constructor() {}

  onInit = () => {
    this.getPokemons().then((next) => {
      this.setPokemonsList(next);
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
    this.pokemonsList = next;
  };

  getPokemonsList = () => {
    return this.pokemonsList;
  };
}

export default PokemonService;
