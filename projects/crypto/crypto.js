$(document).ready(function() {
	$(".button").on("click", function() {
		if ($(this).is("#en")) {
			$("#en_answer").empty();
			var text = String($("#encrypt").val().toLowerCase());
			console.log(text);
			text = text.replace(/be right back/g, "brb");
			text = text.replace(/what the hell/g, "wth");
			text = text.replace(/oh my god/g, "omg");
			text = text.replace(/talk to you later/g, "ttyl");
			text = text.replace(/i don't know/g, "idk");
			text = text.replace(/i don't care/g, "idc");
			text = text.replace(/away from keyboard/g, "afk");
			text = text.replace(/got to go/g, "g2g");
			text = text.replace(/laugh out loud/g, "lol");
			text = text.replace(/i know right/g, "ikr");
			text = text.replace(/i know, right/g, "ikr");
			text = text.replace(/ ok /g, " k ");
			text = text.replace(/ please /g, " plz ");
			text = text.replace(/own/g, "pwn");
			text = text.replace(/rock/g, "rawk");
			text = text.replace(/sorry/g, "sry");
			text = text.replace(/totally/g, "ttly");
			text = text.replace(/yeah really/g, "yarly");
			text = text.replace(/oh really/g, "orly");
			text = text.replace(/oh, really/g, "orly");
			text = text.replace(/yeah, really/g, "yarly");
			text = text.replace(/thanks/g, "thx");
			text = text.replace(/cutie/g, "qt");
			text = text.replace(/ r /g, "are");
			text = text.replace(/oh i see/g, "oic");
			text = text.replace(/loser/g, "lsr");
			text = text.replace(/newbie/g, "n00b");
			text = text.replace(/like/g, "lyk");
			text = text.replace(/people/g, "ppl");
			text = text.replace(/this/g, "diz");
			text = text.replace(/to/g, "2");
			text = text.replace(/too/g, "2");
			text = text.replace(/ate/g, "8");
			text = text.replace(/at/g, "@");
			text = text.replace(/for/g, "4");
			text = text.replace(/e/g, "3");
			text = text.replace(/a/g, "4");
			text = text.replace(/s/g, "5");
			text = text.replace(/i/g, "1");
			text = text.replace(/o/g, "0");
			text = text.replace(/g/g, "6");
			$("#en_answer").append(text);

		$("#encrypt").on("click", function () {
			$(this).val("");
			$("#en_answer").empty();
		});

		}
		if ($(this).is("#de")) {
			$("#de_answer").empty();
			var text = String($("#decrypt").val().toLowerCase());
			text = text.replace(/brb/g, "be right back");
			text = text.replace(/wth/g, "what the hell");
			text = text.replace(/omg/g, "oh my god");
			text = text.replace(/ttyl/g, "talk to you later");
			text = text.replace(/idk/g, "I don't know");
			text = text.replace(/idc/g, "I don't care");
			text = text.replace(/afk/g, "away from keyboard");
			text = text.replace(/g2g/g, "got to go");
			text = text.replace(/lol/g, "laugh out loud");
			text = text.replace(/ikr/g, "I know, right");
			text = text.replace(/ k /g, " ok ");
			text = text.replace(/plz/g, "please");
			text = text.replace(/pwn/g, "own");
			text = text.replace(/rawk/g, "rock");
			text = text.replace(/sry/g, "sorry");
			text = text.replace(/ttly/g, "totally");
			text = text.replace(/orly/g, "oh, really");
			text = text.replace(/yarly/g, "yeah, really");
			text = text.replace(/thx/g, "thanks");
			text = text.replace(/qt/g, "cutie");
			text = text.replace(/ r /g, " are ");
			text = text.replace(/oic/g, "oh I see");
			text = text.replace(/lsr/g, "loser");
			text = text.replace(/noob/g, "newbie");
			text = text.replace(/lyk/g, "like");
			text = text.replace(/ppl/g, "people");
			text = text.replace(/diz/g, "this");
			text = text.replace(/ 2 /g, " to ");
			text = text.replace(/ 4 /g, " for ");
			text = text.replace(/8/g, "ate");
			text = text.replace(/@/g, "at");
			text = text.replace(/3/g, "e");
			text = text.replace(/4/g, "a");
			text = text.replace(/5/g, "s");
			text = text.replace(/1/g, "i");
			text = text.replace(/0/g, "o");
			text = text.replace(/6/g, "g");
			text = text.replace(/ i /g, " I ");
			text = text.replace(/ i'/g, " I'");
			text = text.charAt(0).toUpperCase() + text.slice(1);
			$("#de_answer").append(text);

		$("#decrypt").on("click", function () {
			$(this).val("");
			$("#de").empty();
		});
		}

	});
});