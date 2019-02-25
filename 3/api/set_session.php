<?php
session_start();
$p=filter_input(INPUT_POST,"p");
$v=filter_input(INPUT_POST,"v");
$_SESSION[$p]=$v;
var_dump($_SESSION);
?>
