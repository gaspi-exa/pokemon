<?php

require_once 'php/controller/auth/auth.helper.php';
require_once 'php/model/user.model.php';
require_once 'php/view/user.view.php';

class AuthController
{

    // private $authHelper;
    private $model;
    private $view;
    private $allUsers;
    private $userName;


    public function __construct()
    {
        // // $this->authHelper = new AuthHelper();
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
                // $this->getSignup('User already exist');
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
        // $this->getSignup('Input is empty!');
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


    public function showSignUpForm()
    {
        $this->view->renderAuthForm(
            $this->userName,
            "signup",
            // $errors,
        );
    }

    public function showLogInForm()
    {
        $this->view->renderAuthForm(
            $this->userName,
            "login",
            // $errors,
        );
    }

    public function showLogOutForm()
    {
        $this->view->renderAuthForm($this->userName, "logout");
    }
}
