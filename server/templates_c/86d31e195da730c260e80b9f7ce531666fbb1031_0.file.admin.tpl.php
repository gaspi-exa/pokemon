<?php
/* Smarty version 3.1.34-dev-7, created on 2024-09-04 02:35:48
  from 'C:\xampp\htdocs\_TP_2024\server\templates\admin.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_66d7ab6420daf9_03441617',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '86d31e195da730c260e80b9f7ce531666fbb1031' => 
    array (
      0 => 'C:\\xampp\\htdocs\\_TP_2024\\server\\templates\\admin.tpl',
      1 => 1725410144,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:head.tpl' => 1,
  ),
),false)) {
function content_66d7ab6420daf9_03441617 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_subTemplateRender('file:head.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

<body>
    <div id="<?php echo $_smarty_tpl->tpl_vars['root']->value;?>
"></div>
    <section class="pokemonBox" id="pokemonsSection">
        <section class="pokemonsTableSection">
            <div class="tableBox">
                <table>
                    <tbody>

                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['allPokemons']->value, 'pokemon');
$_smarty_tpl->tpl_vars['pokemon']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['pokemon']->value) {
$_smarty_tpl->tpl_vars['pokemon']->do_else = false;
?>
                            <tr>
                                <td><?php echo $_smarty_tpl->tpl_vars['pokemon']->value->_id;?>
</td>
                                <td><?php echo $_smarty_tpl->tpl_vars['pokemon']->value->name;?>
</td>
                            </tr>
                        <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>

                    </tbody>
                </table>
            </div>
            <div class="showAllPokemonBox">
                <a id="js-btnShowAllPokemons">
                    Available: <?php echo count($_smarty_tpl->tpl_vars['allPokemons']->value);?>
 pokemons
                </a>
            </div>
        </section>
    </section>
</body>

</html><?php }
}
