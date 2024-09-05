<?php

require_once 'RouterClass.php';
require_once 'php/controller/pokemon.controller.php';
require_once 'php/controller/admin.controller.php';
require_once 'php/controller/auth/auth.controller.php';

define('BASE_URL', '//' . $_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'] . dirname($_SERVER['PHP_SELF']) . '/');
define('ADMIN', '//' . $_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'] . dirname($_SERVER['PHP_SELF']) . '/admin');

$r = new Router();

// PUBLIC
$r->addRoute('home', 'GET', 'PokemonController', 'getPokemons');

// ADMIN
$r->addRoute('admin', 'GET', 'AdminController', 'getPokemons');

// AUTHORIZATION
$r->addRoute('login', 'POST', 'AuthController', 'createUser');

// $r->addRoute('signup', 'GET', 'AuthController', 'getSignup');
// $r->addRoute('login', 'GET', 'AuthController', 'getLogin');
// $r->addRoute('logout', 'GET', 'AuthHelper', 'logOut');
// $r->addRoute('welcome', 'POST', 'AuthController', 'verifyUser');

// DEFAULT
$r->setDefaultRoute('PokemonController', 'getPokemons');

$r->route($_GET['action'], $_SERVER['REQUEST_METHOD']);
