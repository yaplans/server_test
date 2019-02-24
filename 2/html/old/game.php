<!DOCTYPE html>
<html>
    <head>
        <title>Игра</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script type="text/javascript" src="js/work.js"></script>
    </head>


<?php
session_start();
echo $_SESSION['m_pl'];echo '<br>';


//~ echo '<script type="text/javascript" src="js/work.js"></script>';

echo 'ready!';echo '<br>';
?>
<!--
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
-->

<!--
<link href="main.css" type="text/css" rel="stylesheet" />
-->
<!--
<link href="fileuploader.css" type="text/css" rel="stylesheet" />
-->
<!--
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
-->
<!--
<script src="fileuploader.js" type="text/javascript"></script>
-->


<?php
exit;


$file = fopen("game.txt","r");
if(!$file){//Если файла нет создаем новый
	echo '<br>';
	echo 'Если файла нет создаем новый';
	echo '<br>';
	$file = fopen("game.txt","x");
	if($file){
		$_SESSION['m_pl']='first';//Первый игрок
	} else {
		exit('Ошибка при создании файла!');
	}
}
echo '<br>';
echo $_SESSION['m_pl'];
if(isset($_SESSION['m_pl'])) {
	$a_my=fgets($file);//Моя таблица
	$a_hi=fgets($file);//Его таблица
} else {
	$a_my=fgets($file);//Пропустим
	$a_hi=fgets($file);//Пропустим
	$a_my=fgets($file);//Моя таблица
	$a_hi=fgets($file);//Его таблица
}

//~ var_dump($file);
//~ exit;
//~ echo fgetss($file);
fclose($file);


//~ if(isset($_SESSION['m_pl'])) {
	//~ $a_my=$_SESSION['a_f1'];//Моя таблица
	//~ $a_hi=$_SESSION['a_s1'];//Его таблица
//~ } else {
	//~ $a_my=$_SESSION['a_f2'];//Моя таблица
	//~ $a_hi=$_SESSION['a_s2'];//Его таблица
//~ }

//~ re

//~ $a_my=$_POST['a_my'];//Моя таблица
//~ var_dump($a_my);
//~ exit;

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Игра</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
		<form name='form' id='form' action='save.php' method='post'>
			<input type='submit' name='b_sub' value='Sub'>
			<input type='hidden' id='a_my' name='a_my' value='<?php echo $a_my;?>'>
			<input type='hidden' id='a_hi' name='a_hi' value='<?php echo $a_hi;?>'>
		</form>
        <div>
			<p>Расставь флот:</p>
			<p>Кликай на своем поле, расставляя флот. Когда будешь готов, нажми кнопку "Играть".</p>
			<p>Флот состоил из 1 - 4-х палубного, 2 - 3-х палубных, 3 - 2-х палубных, 4 - 1-х палубных.</p>
        </div>
<div class="m_inline">
<!--
    <p id="m_player">Есть противник</p>
-->
    <p id="m_player">Противника, пока, нет.</p>
    <p id="m_out">Здесь сообщения</p>
</div>
<div>
	<input id="b_play" class="btn btn-danger" type="button" onclick="play();" value="Играть"/>
</div>

        <div class="m_inline">
            <table id="my_tab" class="m_chess unselectable"  border="1">

            </table>
        </div>
        <div class="m_inline">
            <table id="his_tab" class="m_chess unselectable" border="1">
            
            </table>
        </div>
        
        <div id="m_text"></div>

        <script type="text/javascript" src="js/game.js"></script>
    </body>
</html>


<!--
Общий код
>>php
- файла-данных нет
  - создаем переменную ПЕРВЫЙ
  - создаем файл-ВТОРОЙ_ЖДИ
  - команда ЖДИ (пока цикл крутится)
  
Общий код
>>js
!- опрос есть-ли файл-ВТОРОЙ_ЖДИ
!  Первый и файл есть
!  - дальше!
!  иначе - цикл
!  Второй и файла нет
!   - дальше!
!  иначе - цикл

Общий код
  - команда ОГОНЬ
>> php
!простой - ожидание выстрела  
  - выстрел
 >> переход в другой файл по submit
##   - команда ЖДИ (перенес в начало, т.к. все равно вышли)
  - создаем файл-данных
  Первый - удаляем файл-ВТОРОЙ_ЖДИ
  Второй - создаем файл-ВТОРОЙ_ЖДИ
!- цикл
-->
