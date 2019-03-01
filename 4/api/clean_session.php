<?php
session_start();
var_dump($_SESSION);
//~ exit;
echo "1";
echo "<br>";
foreach ($_SESSION as $key => $val) {
	echo $key;
	echo "<br>";
	unset($_SESSION[$key]);	
}
var_dump($_SESSION);
?>
