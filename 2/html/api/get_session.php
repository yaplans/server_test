<?php
session_start();
$p=filter_input(INPUT_POST,"p");
echo $_SESSION[$p];
//~ echo "_SESSION";
echo $p;
?>
