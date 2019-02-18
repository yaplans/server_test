<?php
$file_fgr_test=filter_input(INPUT_GET, "f");
if($file_fgr_test==""){
	$file_fgr_test="file_p2_wait";
}

$f=fopen($file_fgr_test,"r");
if($f){
	echo 'File Ok!';
	fclose($f);
} else {
	echo 'NON :(';
}
?>
