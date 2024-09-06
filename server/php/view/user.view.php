<?php

require_once 'libs/Smarty.class.php';

class UserView
{

    private $smarty;

    public function __construct()
    {
        $this->smarty = new Smarty();
    }

    public function renderAuthForm($userName, $root)
    {
        $this->smarty->assign('userName', $userName);
        $this->smarty->assign('root', $root);
        $this->smarty->display('templates/index.tpl');
    }

    //* function renderAdminHome($userName, $allUsers)
    // {
    //     $this->smarty->assign('title', $userName . ' | ADMIN');
    //     $this->smarty->assign('allUsers', $allUsers);
    //     $this->smarty->assign('userName', $userName);
    //     $this->smarty->display('templates/user/adminHome.tpl');
    // }
}
