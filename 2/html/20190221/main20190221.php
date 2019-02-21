<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Cache-Control" content="no-cache">
<!--
	<link rel="stylesheet" type="text/css" href="./bootstrap/css/bootstrap.min.css">
-->
	<script type="text/javascript" src="./bootstrap/js/jquery-3.3.1.min.js"></script>
	</head>
<?php
echo "Hi";
//~ вход
//~ ???- как-то проверяем, что прога еще не начата [1]
//~ Ты ПЕРВЫЙ - ДА - иди на 222
//~ Ты ВТОРОЙ - ДА - иди на 222
//~ ??? файл 2wate.txt есть, но старше 10мин??? - удаляем.
//~ ??? файл 2wate.txt есть
  //~ ты - ВТОРОЙ
  //~ иди на 222
//~ -==-
  //~ ты - ПЕРВЫЙ
  //~ создать файл 2wate.txt
  //~ иди на 222
//~ -==-


//~ )))222

//~ файл есть
//~ ===ПЕРВЫЙ===
//~ ДЕЙСТВУЙ
//~ иди на 333 --------
//~ ===ВТОРОЙ===       |
//~ ЖДИ                |
//~ иди на 222         |
                   //~ |
//~ файла нет          |
//~ ===ВТОРОЙ===       |
//~ ДЕЙСТВУЙ           |
//~ иди на 333-------  |
//~ ===ПЕРВЫЙ===     | |
//~ ЖДИ              | |
//~ иди на 222       | |
                 //~ | |
//~ )))333  <----------
//~ действие!!!
//~ ===ПЕРВЫЙ===
//~ удалить файл
//~ иди на 222
//~ ===ВТОРОЙ===
//~ создать файл
//~ иди на 222

/**
 * Создает файл
 * */
function l_fcreate($p){
	echo $p."<br>";
	if($h=fopen($p,"w")){
		fclose($h);
	} else {
		exit("Ошибка создания файла: ".$p);
	}
}

/**
 * Получаем id - четыре последние цифры времени
 * в секундах
 * */
function l_make_id(){
	$m_time=time();
	$id=$m_time%10000;//остаток
	return substr("0000".$id,-4);
}
/**
 * Ищем самый старый файл по маске ????.gid
 * */
function l_find_f_id1($p){
	$m_file=glob($p);
	$m_t=0;
	$m_f="";
	foreach ($m_file as $key => $value){
		if($m_t<filemtime($value)){
			$m_f=$value;// самый старый
			$m_t=filemtime($value);
		}
	}
	return $m_f;
}

//======================================//
// Start!
session_start();
echo "<br>";
var_dump($_SESSION);
//~ unset($_SESSION["m_first"]);
//~ unset($_SESSION["m_second"]);
//~ exit("Очистили");

//---------------------------------------//
// vars
//~ $m_wate_file="2wate.txt";
$m_timeold_file=10;// 10минут
//---------------------------------------//

//~ Ты ПЕРВЫЙ - ДА - иди на 222
if(!isset($_SESSION["m_first"])){
echo "	//нет ты не ПЕРВЫЙ - проверим дальше"."<br>";
	//~ Ты ВТОРОЙ - ДА - иди на 222
	if(!isset($_SESSION["m_second"])){
echo "	//нет ты не ВТОРОЙ - проверим дальше"."<br>";
		$m_wate_file=l_find_f_id1("????.gid");
var_dump($m_wate_file);
//~ exit;

		if(file_exists($m_wate_file)){
echo "	//~ ??? файл 2wate.txt есть, но старше 10мин???"."<br>";
			$m_mtime=filemtime($m_wate_file);
			$m_time=time();
			if(($m_time-$m_mtime)/60>$m_timeold_file){
				//~ unset($m_wate_file);
				unlink($m_wate_file);
				echo "	//~ ??? файл 2wate.txt - удаляем."."<br>";
			}
		}
		
		
		
		
		//~ ??? файл 2wate.txt есть
		if(file_exists($m_wate_file)){
echo "	//~  файл 2wate.txt есть"."<br>";
			$id_2=l_make_id();
			$id_1=basename($m_wate_file,".gid");
			$m_wate_file = $id_1."_".$id_2.".gid";
			echo $m_wate_file;
			echo "<br>";
		//~ ты - ВТОРОЙ
			$_SESSION["m_second"] = TRUE;
			$_SESSION["id"] = $id_2;
			$_SESSION["file"] = $m_wate_file;
		//~ иди на 222
		} else {
		//~ ты - ПЕРВЫЙ
			$id_1=l_make_id();
			echo $id_1;
			echo "<br>";
			$m_wate_file = $id_1.".gid";
			
			$_SESSION["m_first"] = TRUE;
			$_SESSION["id"] = $id_1;
echo "	//~ создать файл 2wate.txt=".$m_wate_file."<br>";
			l_fcreate($m_wate_file);
			$_SESSION["file"] = $m_wate_file;
		//~ иди на 222
		}
	}
} else {
	//~ $m_wate_file=l_find_f_id1($_SESSION["id"]."*.gid");
	$_SESSION["file"] = l_find_f_id1($_SESSION["id"]."*.gid");
}
echo "	//~ 222"."<br>";

$m_wate_file=$_SESSION["file"];

//~ exit;
//~ )))222

$num_gamer="first";
if($_SESSION["m_second"]){
	$num_gamer="second";
}


// следующий код должен быть на js
/*
if(file_exists($m_wate_file)){
	//~ файл есть
	if(isset($_SESSION["m_first"])){
		//~ ===ПЕРВЫЙ===
		//~ ДЕЙСТВУЙ
		$m_move = "m_first !!!Жми :)";
		//~ иди на 333 --------
	} else {
		if(isset($_SESSION["m_second"])){
//~ ===ВТОРОЙ===       |
//~ ЖДИ                |
		$m_move = "m_second ???Жди :(";
//~ иди на 222         |
		}
		exit "Здесь не должны были оказаться!?";
	}
} else {
//~ файла нет          |
	if(isset($_SESSION["m_second"])){
//~ ===ВТОРОЙ===       |
//~ ДЕЙСТВУЙ           |
		$m_move = "m_second !!!Жми :)";
//~ иди на 333-------  |
	} else {
		if(isset($_SESSION["m_first"])){
	//~ ===ПЕРВЫЙ===     | |
	//~ ЖДИ              | |
			$m_move = "m_first ???Жди :(";
	//~ иди на 222       | |
		}
		exit "Здесь не должны были оказаться!?";
	}
}

*/


                 //~ | |
//~ )))333  <----------
//~ действие!!!
// ждем сабмит формы и передаем изменения (сохраняем их в файл, чтобы и второму
// игроку было видно) и номер игрока
// php описанный в action работает по сценарию:
//~ ===ПЕРВЫЙ===
//~ удалить файл
//~ иди на 222
//~ ===ВТОРОЙ===
//~ создать файл
//~ иди на 222




















?>
	<body>
		<p>Прювет!</p>
		Первый = <?php var_dump($_SESSION["m_first"]);?>
		<br>
		Второй = <?php var_dump($_SESSION["m_second"]);?>
		<br>
		Файл существует? <?php var_dump(file_exists($m_wate_file));?>

<form name="form" method="POST" action="">
	<input type="hidden" name="file_name" id="file_name" value="<?php echo $m_wate_file;?>" />
	<input type="hidden" name="num_gamer" id="num_gamer" value="<?php echo $num_gamer;?>" />
</form>

<script type="text/javascript">
	$(document).ready(function (){
		//~ alert("Готов!");
		var fileName=document.getElementById("file_name");
		var numGamer=document.getElementById("num_gamer");
		alert("Готов!"+fileName.value+"**"+numGamer.value);
		$.ajax({
			url: "read_file.php",
			type: "POST",
			dataType: "text",
			data: "f="+fileName.value+"&gamer="+numGamer.value,
			success: function (data){
				alert(data);
			},
			error: function (){
				alert("error");
			}
		});
	});
</script>

	</body>
</html>
