<?php
//~ var_dump($_POST);
$f=filter_input(INPUT_POST,"f");
$gamer=filter_input(INPUT_POST,"gamer");

if(file_exists($f)){
	echo 'yes';
} else {
	echo 'no';
}
exit;
?>
