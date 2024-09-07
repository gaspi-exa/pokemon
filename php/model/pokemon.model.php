<?php

require_once 'php/db/connection.model.php';

class PokemonModel
{

    private $db;

    function __construct()
    {
        $connection = new Connection();
        $this->db = $connection->getConnection();
    }

    function getPokemons()
    {
        $query = $this->db->prepare('SELECT * FROM pokemon');
        $query->execute();
        return $query->fetchAll(PDO::FETCH_OBJ);
    }
}
