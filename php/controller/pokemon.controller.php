<?php

require_once 'php/model/pokemon.model.php';
require_once 'php/model/user.model.php';
require_once 'php/view/pokemon.view.php';
require_once 'php/controller/auth/auth.controller.php';

class PokemonController
{

    private $pokemonModel;
    private $userModel;
    private $view;
    private $allPokemons;
    private $authController;

    public function __construct()
    {
        $this->authController = new AuthController();
        $this->pokemonModel = new PokemonModel();
        $this->userModel = new UserModel();
        $this->view = new PokemonView();
        $this->allPokemons = $this->getPokemons();
        $this->getHome();
    }

    public function verifyUser()
    {
        $name = $_POST['userName'];
        $password = $_POST['userPassword'];
        if (
            isset($name) && !empty($name) &&
            isset($password) && !empty($password)
        ) {
            $user_db = $this->userModel->getUser($name);
            if (isset($user_db) && $user_db) {
                if (password_verify($password, $user_db->password)) {
                    session_start();
                    $_SESSION['NAME'] = $user_db->name;
                    //$_SESSION['LAST_ACTIVITY'] = time();
                    $this->authController->showLogInForm($user_db->name);
                } else {
                    $this->authController->showLogInForm('', 'Invalid password');
                }
            } else {
                $this->authController->showLogInForm('User do not exist', '');
            }
        } else {
            $this->authController->showLogInForm('Input is empty!', '');
        }
    }

    public function getPokemons()
    {
        return $this->pokemonModel->getPokemons();
    }

    public function getHome()
    {
        $this->view->renderHome($this->allPokemons, "home");
    }
}
