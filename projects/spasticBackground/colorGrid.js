$(document).on('mousemove',function(e){
	// get x coordinate
	var x = e.pageX;
	// get y coordinate
	var y = e.pageY;
	
	var randomColor="#" + (2*(x+y)).toString(16);

	$("body").css('background', randomColor);
}); 