<?php

require_once 'libs/Smarty.class.php';

class PokemonView
{

    private $smarty;

    function __construct()
    {
        $this->smarty = new Smarty();
    }

    function renderHome($allPokemons, $rootId)
    {
        $this->smarty->assign('allPokemons', $allPokemons);
        $this->smarty->assign('root', $rootId);
        $this->smarty->display('templates/index.tpl');
    }

    function renderAdmin($allPokemons, $rootId)
    {
        $this->smarty->assign('allPokemons', $allPokemons);
        $this->smarty->assign('root', $rootId);
        $this->smarty->display('templates/index.tpl');
    }
}
