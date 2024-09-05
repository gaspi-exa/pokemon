<?php

require_once 'php/db/connection.model.php';

class UserModel
{

    private $db;

    public function __construct()
    {
        $connection = new Connection();
        $this->db = $connection->getConnection();
    }

    public function getAllUsers()
    {
        $query = $this->db->prepare('SELECT * FROM users');
        $query->execute();
        return $query->fetchAll(PDO::FETCH_OBJ);
    }

    public function getUserByID($user_id)
    {
        $query = $this->db->prepare("SELECT * FROM users WHERE user_id=?");
        $query->execute(array($user_id));
        return $query->fetch(PDO::FETCH_OBJ);
    }

    public function getUser($userName)
    {
        $query = $this->db->prepare("SELECT * FROM users WHERE name=?");
        $query->execute(array($userName));
        return $query->fetch(PDO::FETCH_OBJ);
    }

    public function createUser($name, $email, $password, $clearence)
    {
        $query = $this->db->prepare('INSERT INTO users(name, email, password, clearence) VALUES(?, ?, ?, ?)');
        $query->execute(array($name, $email, $password, $clearence));
    }

    //ADMIN

    public function updateUserClearence($user_id, $clearence)
    {
        $query = $this->db->prepare('UPDATE users SET clearence=? WHERE user_id=?');
        $query->execute(array($clearence, $user_id));
    }

    public function deleteUser($user_id)
    {
        $query = $this->db->prepare('DELETE FROM users WHERE user_id=?');
        $query->execute(array($user_id));
    }

    //API

    public function deleteUserFromAPI($user_id)
    {
        $query = $this->db->prepare("DELETE FROM users WHERE user_id=?");
        $query->execute(array($user_id));
        return $query->rowCount();
    }

    public function updateUserFromAPI($name, $email, $password, $clearence, $id)
    {
        $query = $this->db->prepare('UPDATE users SET name=?, email=?, password=?, clearence=? WHERE user_id=?');
        $query->execute(array($name, $email, $password, $clearence, $id));
        return $query->rowCount();
    }

    public function addUserFromAPI($name, $email, $password, $clearence)
    {
        $query = $this->db->prepare('INSERT INTO users(name, email, password, clearence) VALUES(?, ?, ?, ?)');
        $query->execute(array($name, $email, $password, $clearence));
        return $this->db->lastInsertId();
    }
}
