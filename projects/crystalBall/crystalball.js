$(document).ready(function() {
	// get text from input box, make some sort of webkit animation thing happen when you click, 
	// set timer, so it looks like the ball is thinking
	// make sure you get the first word of a question, and choose from the appropriate answers, arrays?
	// make sure the same question is not entered twice, and provide sassy responses
	var clicks = 0;
	
	function outOfControl() {
		window.location = "http://www.hellosunschein.com";
	}
	
	function angryBall() {
		$(".ball").replaceWith("<div class='text goAway'>I've had enough of your whining!</div>");

	}
	
	var answerBox = $("#answerBox");
	
	var question = String($("#question").val());
	var answers = ["Nope.", "There's a 50/50 chance.", "You can't always get what you want.", "I believe it is so.", 
		"Affirmative.", "Aye, aye cap'n!", "I regret to inform you, but the answer is no.", "Hahahahahahahaha. No.", "If you play your cards right ;)", "Anything can happen.", "The chances are slim. But don't stop believin' (listen to that feeeeelin'...!)", "NEIN, NEIN, NEIN, NEIN, NEIN!", "As per usual, things will go your way.", "Maybe yes, maybe no, maybe baby I don't know...", "My favourite color is purple.", 
		"Whatever happens, just know that you're fabulous!", "Houston, we have a problem.", "Miow.", "Love is all you need.", "There seems to be a disturbance in the force.", "Can. Not. Compute.", "I am undecided.", "YES!", "I have a headache. Try again tomorrow.", "Most definitely.", "What kind of a question is that?", "Don't worry. Be happy.", "Definitely maybe.", "My supervisors refuse to let me answer that question.", "I'm not in the mood to be your answer slave today.", "How DARE you?!", "It's not looking too good.", "All is well.", "Anything is possible.", "Of course!", "Your thoughts are unclear.", "In this case, I'd say just flip a coin.", "Get a grip...", "Come on. Let's be real.", "Occpuado. You shall remain filled with wonder.", "The odds are forever in your favor.", "Let's leave this for another day.", "That's crazy talk.", "Sometimes, you just need to come up with your own answers.", "What do you think? Of course!", "I would consult another's opinon.", "Did you really expect a groundbreaking answer from a piece of CSS code?", "Boop.", "I think I'll go with yes.", "That's not the best idea.", "Lord, no!"];
	
	$(".ball").on("click", function() {
	
		answerBox.empty();
		
		if (clicks >= 20) {
			$(".ball").fadeOut();
			setTimeout(angryBall, 2000);
			setTimeout(outOfControl, 5000);
		}
		
		else {
		// get random value from answer array
		var answer = answers[Math.floor(Math.random() * answers.length)];
		answerBox.hide().append(answer).fadeIn(1000);
		
		clicks++;
		}
	});
});