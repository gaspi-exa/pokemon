<?php

require_once 'php/controller/auth/auth.helper.php';
require_once 'php/model/user.model.php';
require_once 'php/view/user.view.php';

class AuthController
{

    private $authHelper;
    private $model;
    private $view;
    private $allUsers;
    private $userName;


    public function __construct()
    {
        $this->authHelper = new AuthHelper();
        $this->model = new UserModel();
        $this->view = new UserView();
        $this->allUsers = $this->model->getAllUsers();
    }

    public function createUser()
    {

        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $clearence = 'null';
        if (isset($name) && !empty($name) && isset($email) && !empty($email) && isset($password) && !empty($password)) {
            $name = strtoupper($name);
            $encriptedPass = password_hash($password, PASSWORD_DEFAULT);

            if (!$this->getExistingUser($name, $email)) {
                echo 'User already exist';
                $this->getSignup('User already exist');
                return;
            }

            $this->model->createUser($name, $email, $encriptedPass, $clearence);
            $this->userName = $name;
            session_start();
            $_SESSION['NAME'] = $name;
            $this->showLogInForm($name);
            echo 'User created';
            return;
        }
        echo 'Input is empty!';
        $this->getSignup('Input is empty!');
    }

    public function getExistingUser($name, $email)
    {
        $exist = 0;
        foreach ($this->allUsers as $user_db) {
            if ($name == $user_db->name || $email == $user_db->email) {
                $exist++;
            }
        }
        return $exist == 0;
    }

    public function verifyUser()
    {
        $name = $_POST['userName'];
        $password = $_POST['userPassword'];
        if (
            isset($name) && !empty($name) &&
            isset($password) && !empty($password)
        ) {
            $user_db = $this->model->getUser($name);
            if (isset($user_db) && $user_db) {
                if (password_verify($password, $user_db->password)) {
                    $this->userName = $name;
                    session_start();
                    $_SESSION['NAME'] = $user_db->name;
                    //$_SESSION['LAST_ACTIVITY'] = time();
                    $this->showLogInForm($user_db->name);
                } else
                    $this->getLogin('', 'Invalid password');
            } else
                $this->getLogin('User do not exist', '');
        } else
            $this->getLogin('Input is empty!', '');
    }

    public function getLogin($msgName = null, $msgPass = null)
    {
        // $this->view->renderLogin($this->allTickets, $this->ticketsData, $this->quantityTicketsByCategory, $msgName, $msgPass);
    }

    public function getSignup($message = null)
    {
        // $this->view->renderSignup($this->allTickets, $this->ticketsData, $this->quantityTicketsByCategory, $message);
    }

    public function showSignUpForm($userName)
    {
        $this->view->renderAuthForm($userName, "signup");
    }

    public function showLogInForm($userName)
    {
        $this->view->renderAuthForm($userName, "login");
    }
}
