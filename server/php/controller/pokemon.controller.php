<?php

require_once 'php/model/pokemon.model.php';
require_once 'php/view/pokemon.view.php';

class PokemonController
{

    private $model;
    private $view;
    private $allPokemons;

    public function __construct()
    {
        $this->model = new PokemonModel();
        $this->view = new PokemonView();
        $this->allPokemons = $this->getPokemons();
        $this->getHome();
    }


    public function getPokemons()
    {
        return $this->model->getPokemons();
    }

    public function getHome()
    {
        $this->view->renderHome($this->allPokemons, "signup");
    }
}
