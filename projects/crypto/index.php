<!DOCTYPE html>
<html>
	<head>
		<title>Encrypt/Decrypt</title>
		<link rel="stylesheet" href="../normalize.css" type="text/css">
		<link rel="stylesheet" href="../default.css" type="text/css">
		<link rel="stylesheet" href="style.css" type="text/css">
		<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	</head>
	<body>
		<div class="header">
			<p><a href="../../playground.php">&laquo; Playground</a></p>
		</div>
		<div class="container">
			<p>Encrypt or Decrypt a secret message in ch4tsp3ak!</p>
			<input type="text" class="box" id="encrypt">
			<div class="button" id="en">
				<span id="text">Encrypt</span>
			</div>
			<div class="box answer" id="en_answer"></div>
			<div class="button" id="de"> 
				<span id="text">Decrypt</span>
			</div>
			<input type="text" class="box" id="decrypt">
			<div class="box answer" id="de_answer"></div>
		</div>
		<script type="text/javascript" src="crypto.js">
		</script>
		
	</body>
</html>