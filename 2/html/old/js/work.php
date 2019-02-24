<!DOCTYPE html>
<?php session_start();?>
<html>
    <head>
        <title>Игра</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
<?php
//~ $file_player="file_p2_wait";
$file_p2_wait="file_p2_wait";
$file_data="file_data";

/**
 * Создаем файл с именем $p
 * */
function l_create_file($p){
	$f=fopen($p,"a");
	var_dump($f);
	if($f){
		fclose($f);
	} else {
		exit("Не могу создать файл - ".$p);
	}
}

/**
 * Пишем данные $d в файл с именем $f
 * */
function l_write_to_file($f, $d){
	var_dump($f);
	var_dump($d);
	$h=fopen($f,"a");
	if($h){
		fwrite($h,$d + "\n");
		fclose($h);
	} else {
		exit("Не могу открыть файл - ".$f);
	}
}



/**
 * Начинаем
 * */

$l_butt=filter_input(INPUT_POST, "b");
// Если была нажата кнопка - УЖЕ играем
if($l_butt=="Выстрел"){
	$l_command='Жди!';
	$a=filter_input(INPUT_POST, "a");
	if(!isset($_SESSION['l_first_player'])){//первый выстрел и переменной еще нет
		$_SESSION['l_first_player']=FALSE;//Ты второй игрок
	}
	//~ echo $a.'<br>';
	l_write_to_file($file_data, $a);
	if($_SESSION['l_first_player']){
		unlink($file_p2_wait);
	} else {
		l_create_file($file_p2_wait);
	}
} else {// Это начало игры
	if (!file_exists($file_data)) {
		// файла данных нет - начало игры!
		$_SESSION['l_first_player']=TRUE;//Ты первый игрок
		$_SESSION['l_state']='Жди выстрела противника!';//Ты первый игрок
		$l_command='Огонь! Ты первый игрок';
		l_create_file($file_data);
		l_create_file($file_p2_wait);//Второй игрок - жди пока я выстрелю!
	} else {
		$_SESSION['l_first_player']=FALSE;//Ты второй игрок
		$_SESSION['l_state']='Жди выстрела противника!';//Ты первый игрок
		$l_command='Жди выстрела противника! Ты Второй игрок';
		//~ l_create_file($file_data);
		if (!file_exists($file_p2_wait)) {
			l_create_file($file_p2_wait);//Второй игрок - жди пока я выстрелю!
		}
	}
}

/**
 * Подготовка закончена - прорисуем страницу и в цикл!
 * */


//~ // Основной цикл игры
//~ if (file_exists($file_p2_wait)) {
	//~ if($_SESSION['l_first_player']){
		//~ $l_go=TRUE;//выход из цикла
	//~ } else {
		//~ $l_go=FALSE;//цикл продолжается
	//~ }
//~ } else {
	//~ if($_SESSION['l_first_player']){
		//~ $l_go=FALSE;//цикл продолжается
	//~ } else {
		//~ $l_go=TRUE;//выход из цикла
	//~ }
//~ }

//??? js
//~ $_SESSION['l_state']='Огонь!';//Ты первый игрок
//~ echo '<p>Огонь!</p>';



?>    
    <body>



<h1>Игра</h1>
<p id="id_player">
<?php 
if($_SESSION['l_first_player']){
	echo "Первый";
	} else {
	echo "Второй";	
		}

?>
</p>
<p id="id_state"><?php echo $l_command; ?></p>

<form name-"Form" action="#" method='post'>
	<input type="submit" name="b" value="Выстрел" ></>
	<input type="hidden" name="a" value="Нечто" ></>
	<!-- для передачи в js-->
	<input type="hidden" name="l_first_player" id="l_first_player"
		value="<?php echo $_SESSION['l_first_player'];?>" ></>
</form>

    </body>
	<script type="text/javascript" src="main.js"></script>
</html>
