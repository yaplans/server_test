<?php
session_start();
//~ vars
$m_title="My page";
$m_timeold_file=10;// 10минут

$_SESSION["ddd"]="m_ddd";

//~ var_dump($_SESSION);echo "<br>";

foreach ($_SESSION as $key => $value){
	//~ echo $key ."=>". $value."<br>";
	echo '<input class="ses" name="'.$key.'" type="hidden" value="'.$value.'" />';
}
	

