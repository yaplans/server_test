<?php 
	require_once "main.php";
?>
<!DOCTYPE html>
<!--
Template ya
-->
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="Cache-Control" content="no-cache">
    <title><?php echo $m_title;?></title>
    
    <script type="text/javascript" src="./bootstrap/js/jquery-3.3.1.min.js"></script>
    <link rel="stylesheet" type="text/css" href="./bootstrap/css/bootstrap.min.css">
<!--
    <link rel="stylesheet" type="text/css" href="style.css">
-->
    
    <script type="text/javascript" src="script.js"></script>
  </head>
  <body>
<!--
	  <input id="ses" name="ses" type="hidden" value=<?php echo $_SESSION;?> />
-->
	  
	  
	  <h3>Hi</h3>
	  <p id="m_me"></p>
	  <p id="m_he"></p>
<?php 
	require_once "body.php";
?>
  </body>
</html>

