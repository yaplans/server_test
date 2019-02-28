<?php

$f=filter_input(INPUT_POST,"f");
//~ $f="pink.txt";
//~ echo $f."888<br>";
if(file_exists($f)){
	echo "yes";
} else {
	echo "no";
}
?>
