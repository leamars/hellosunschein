<!DOCTYPE html>

<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dist/css/bootstrap.css" media="screen" type="text/css">
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Ubuntu:300,400' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Source+Code+Pro:200,300,400,500,600' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Coming+Soon' rel='stylesheet' type='text/css'>
    
    <link rel="shortcut icon" href="<?php if($other) {echo "images/icons/hellosunschein_other.ico";} else {
        echo "images/icons/hellosunschein.ico";} ?>" >

    <title>hellosunschein*</title>
</head>

<body>
    <div class="navbar navbar-inverse navbar-fixed-top h_nav <?php if($other) {echo "other";} ?>">
        <div class="container">
        <div class="<?php if($other) {echo "other";} ?>">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
	                <span class="icon-bar"></span>
	                <span class="icon-bar"></span>
	                <span class="icon-bar"></span>
	        </button>
        </div>
            <div class="navbar-brand h_title">
                <a id="main" href="index.php">hellosunschein*</a>
            </div>

            <div class="nav-collapse collapse">
                <ul class="nav navbar-nav pull-right index h_nav_nav <?php echo $activeClass ?>">
                    <li><a href="index.php">Home</a></li>

                    <li><a href="contact.php">Contact</a></li>

                    <li><a href="playground.php">Playground</a></li>

                    <li><a href="resources.php">Resources</a></li>
                </ul>
            </div><!--/.nav-collapse -->
        </div>
    </div>