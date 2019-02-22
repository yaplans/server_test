<?php
//~ session_start();


/**
 * Проверим существует-ли файл
 * */
function j_file_exists($f){
	return file_exists($f);
}

$f=filter_input(INPUT_POST,"f");
$fun=filter_input(INPUT_POST,"fun");
//~ $_SESSION[$p]=$v;
//~ var_dump($_SESSION);

switch($fun){
case "j_file_exists":
	if(j_file_exists($f)){
		echo "yes";
	} else {
		echo "no";
	}
	break;

default:
//	
}




?>

