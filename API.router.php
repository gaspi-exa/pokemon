<?php

require_once 'php/API/controller/API.pokemon.controller.php';
require_once 'RouterClass.php';

$r = new Router();

$r->addRoute('pokemons', 'GET', 'APIPokemonController', 'getPokemons');

$r->route($_GET['resource'], $_SERVER['REQUEST_METHOD']);
