// calculator inspiration and guidance 
// credited to: http://thecodeplayer.com/

// get all keys from the document

var keys = document.querySelectorAll(".calculator span");
var operators = ["+", "-", "x", "÷"];
var decimalAdded = false;

// add onclick events to keys

for (var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// get input, querySelector returns the
		// first element within the document
		// so basically gets what is put into the
		// result box
		var input = document.querySelector("#result");
		// gets the HTML syntax of the object's descendants
		// emtpy at first
		var inputVal = input.innerHTML;
		// gets the value of whatever's clicked
		var btnVal = this.innerHTML;
		
		
		// if clear key is pressed, erase
		if(btnVal == "C"){
			input.innerHTML = "";
		}
		
		// if equals key is pressed, evaluate result
		else if(btnVal == "=") {
			var equation = inputVal;
			
			//replace "x", "÷" with * and /
			
			equation = equation.replace(/x/g, "*");
			
			var lastChar = equation.charAt(i-1);
			
			// if ther last character is an operator or a decimal, remove it
			if (operators.indexOf(lastChar) > -1 || lastChar == ".") {
				equation = equation.replace(/.$/, "");
			}
			
			// change the input in the result box
			// to the evaluated equation
			input.innerHTML = eval(equation);
			decimalAdded = false;
		}
		
		// an expression can't start with an operator, unless it's -
		// and it also can't end with an operator
		// and also, you can't have two operators at the same time
		
		// check what the last character of the inputVal is and only
		// add operator if it's not an operator
		
		// find the index of the btnVal, only add operator if the index is positive
		
		else if (operators.indexOf(btnVal) > -1){
		
			// check what the last character of the inputVal is and only
			// add operator if it's not an operator
			var lastChar =  inputVal[inputVal.length - 1];
		
			
			if (inputVal != "" && operators.indexOf(lastChar) == -1) {  
				input.innerHTML += btnVal;		
			}
			
			// exception if - pressed
			else if (inputVal == "" && btnVal == "-") {
				input.innerHTML += btnVal;
			}
			
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			decimalAdded = false;
		}
		
		// only make it possible to add one decimal
		
		else if(btnVal == ".") {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
		// otherwise get all the key values and append them 
		// to inputVal, so we have a string of the whole
		// mathematical expression
		// only execute if btnVal was properly recorded
		else {
		input.innerHTML += btnVal;
		decimalAdded = false;
		}
		
	}
}
