<!DOCTYPE html>

<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Welcome to hellosunschein, my own personal web playground.">
    <meta name="author" content="Lea Marolt Sonnenschein">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="dist/css/bootstrap.css" media="screen" type="text/css">
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Ubuntu:300,400' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Lobster+Two:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
    
    <link rel="shortcut icon" href="<?php if($other) {echo "images/icons/hellosunschein_other.ico";} else {
        echo "images/icons/hellosunschein.ico";} ?>" >

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-43332662-1', 'hellosunschein.com');
  ga('send', 'pageview');

</script>

    <title>hellosunschein</title>
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

                    <li><a href="about.php">About</a></li>

                    <li><a href="contact.php">Contact</a></li>

                    <li><a href="playground.php">Playground</a></li>

                    <li><a href="resources.php">Resources</a></li>
                </ul>
            </div><!--/.nav-collapse -->
        </div>
    </div>