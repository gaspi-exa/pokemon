{include file='head.tpl'}

<body>
    <div id="{$root}"></div>
    <section class="pokemonBox" id="pokemonsSection">
        <section class="pokemonsTableSection">
            <div class="tableBox">
                <table>
                    <tbody>

                        {foreach from=$allPokemons item=pokemon}
                            <tr>
                                <td>{$pokemon->_id}</td>
                                <td>{$pokemon->name}</td>
                            </tr>
                        {/foreach}

                    </tbody>
                </table>
            </div>
            <div class="showAllPokemonBox">
                <a id="js-btnShowAllPokemons">
                    Available: {count($allPokemons)} pokemons
                </a>
            </div>
        </section>
    </section>
</body>

</html>