<?php

class Connection
{

    private $db;

    function __construct()
    {
        $host = 'host=localhost;';
        $dbname = 'dbname=pokemon_db;charset=utf8';
        $user = 'root';
        // $password = '123456';
        $password = '';
        try {
            $pdo = new PDO('mysql:' . $host . $dbname, $user, $password);
            // echo 'Successful connection.';
            $this->db = $pdo;
        } catch (PDOException $exc) {
            echo 'Connection error: ' . $exc->getMessage();
        }
    }


    function getConnection()
    {
        return $this->db;
    }
}
