<?php
session_start();
$a_my = filter_input(INPUT_POST,'a_my');//Первый игрок
$a_hi = filter_input(INPUT_POST,'a_hi');//Второй игрок

//Сохраняем предыдущее состояние
$file = fopen("game.txt","r");

$a_1=fgets($file);
$a_2=fgets($file);//Пропустим
$a_3=fgets($file);
$a_4=fgets($file);
fclose($file);

//~ $_SESSION['m_pl']
$file = fopen("game.txt","w");
if(isset($_SESSION['m_pl'])) {
	fwrite($file,$a_my);
	fwrite($file,$a_hi);
	fwrite($file,$a_3);
	fwrite($file,$a_4);
	//~ exit('f1');
} else {
	fwrite($file,$a_1);
	fwrite($file,$a_2);
	fwrite($file,$a_my);
	fwrite($file,$a_hi);
	//~ exit('f2');
}
fclose($file);

header('Location: game.php');
exit;
?>


<!--

Общий код
- файла-данных нет
  - создаем переменную ПЕРВЫЙ
  - создаем файл-ВТОРОЙ_ЖДИ

Общий код
!- опрос есть-ли файл-ВТОРОЙ_ЖДИ
!  Первый и файл есть
!  - дальше!
!  иначе - цикл
!  Второй и файла нет
!   - дальше!
!  иначе - цикл

Общий код
  - команда ОГОНЬ
!простой - ожидание выстрела  
  - выстрел
  - команда ЖДИ
  - создаем файл-данных
  Первый - удаляем файл-ВТОРОЙ_ЖДИ
  Второй - создаем файл-ВТОРОЙ_ЖДИ
!- цикл

-->
