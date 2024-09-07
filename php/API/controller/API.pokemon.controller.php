<?php

require_once 'php/model/pokemon.model.php';
require_once 'php/API/view/API.view.php';
require_once 'php/API/controller/API.controller.php';

class APIPokemonController extends APIController
{

    private $model;
    private $view;

    public function __construct()
    {
        parent::__construct();
        $this->model = new PokemonModel();
        $this->view = new APIView();
    }

    public function getPokemons()
    {
        $pokemons = $this->model->getPokemons();
        $this->view->response($pokemons, 200);
    }
}
