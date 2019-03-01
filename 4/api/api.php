<?php
session_start();


/**
 * Проверим существует-ли файл
 * */
function j_file_exists($f){
	return file_exists($f);
}

/**
 * Читаем файл
 * */
function j_file_read($f){
	$h = fopen($f,"r");
	$v = fread($h);
	fclose($h);
	return $v;
}


/**
 * Пишем файл
 * */
function j_file_write($f, $t) {
	$h = fopen($f,"w");
	$x = fwrite($h, $t);//Количество записанных байт
	fclose($h);
	return $x;
}


$f=filter_input(INPUT_POST,"f");
$fun=filter_input(INPUT_POST,"fun");
$t=filter_input(INPUT_POST,"t");

switch($fun){
case "j_file_exists":
	if(j_file_exists($f)){
		echo "yes";
	} else {
		echo "no";
	}
	break;

case "j_file_read":
	echo j_file_read($f);
	break;

case "j_file_write":
	echo j_file_write($f,$t);
	break;

case "j_get_session":
	echo $_SESSION[$f];
	break;

case "j_set_session":
	$_SESSION[$f]=$t;
	//sess
	echo $_SESSION[$f];
	break;

default:
	echo "Неопознанная функция.";
//	
}




?>

