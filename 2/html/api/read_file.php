<?php
$f=filter_input(INPUT_POST,"f");
//~ $fun=filter_input(INPUT_POST,"fun");

if($h=open($f,"r")){
	fclose($h);
}


?>
