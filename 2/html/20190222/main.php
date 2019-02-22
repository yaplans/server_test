<?php
session_start();
//~ vars
$m_title="My page";
$m_timeold_file=10;// 10минут

//~ functions

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

function l_write_to_file($f, $t){
	if($h=fopen($f, "w")){
		if(fwrite($h, $t)<4){
			exit("Ошибка записи файла:".$f);
		}
		fclose($h);
	} else {
		exit("Ошибка открытия файла на запись:".$f);
	}
}

//~ ====================================


//~ echo "<br>";
//~ var_dump($_SESSION);
//~ unset($_SESSION["m_first"]);
//~ unset($_SESSION["m_second"]);
//~ unset($_SESSION);
//~ exit("Очистили");

//~ Ты ПЕРВЫЙ - ДА - иди на 222
if(!isset($_SESSION["m_first"])){
echo "	//нет ты не ПЕРВЫЙ - проверим дальше"."<br>";
	//~ Ты ВТОРОЙ - ДА - иди на 222
	if(!isset($_SESSION["m_second"])){
echo "	//нет ты не ВТОРОЙ - проверим дальше"."<br>";
///		m_id=l_make_id();
		
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
echo "1	//~  файл 2wate.txt есть"."<br>";
			l_write_to_file($m_wate_file, $id_2);
echo "2	//~  файл 2wate.txt есть"."<br>";


			$id_1=basename($m_wate_file,".gid");
echo "3	//~  файл 2wate.txt есть"."<br>";			
			$m_wate_file = $id_1."_".$id_2.".gid";
			echo $m_wate_file;
			echo "<br>";

//~ exit("   ЖДЕМ ФАЙЛ		$m_wate_file	");			
echo "   ЖДЕМ ФАЙЛ		$m_wate_file	";
			
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
			
echo "	ждем пока не появится запись и sec_id";
//~ exit("	ждем пока не появится запись и sec_id");
			
			
		//~ иди на 222
		}
	}
} else {
	//~ $m_wate_file=l_find_f_id1($_SESSION["id"]."*.gid");
	$_SESSION["file"] = l_find_f_id1($_SESSION["id"]."*.gid");
}
echo "	//~ 222"."<br>";

$m_wate_file=$_SESSION["file"];
echo '<input type="hidden" name="file_name" id="m_move" value="'. $m_wate_file.'" />';

//~ exit;
