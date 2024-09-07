<?php

class AuthHelper
{

    function checkLoggedIn()
    {
        return !isset($_SESSION['NAME']);
    }

    function logOut()
    {
        session_start();
        session_destroy();
        header('Location: ' . BASE_URL);
    }
}
