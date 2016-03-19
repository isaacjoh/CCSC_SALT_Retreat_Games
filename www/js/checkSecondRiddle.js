$(document).ready(function(){
	var riddle2Counter = 0; 
	var riddle2Answer = "NENWS";
	var riddle2Guess = ""; 
	$(".arrow-up").on("click", directionCounterUp);
	$(".arrow-down").on("click", directionCounterDown);
	$(".arrow-right").on("click", directionCounterRight);
	$(".arrow-left").on("click", directionCounterLeft);

	$("#submitButton2").on("click", checkRiddle2Guess);

	function directionCounterUp() {
		riddle2Counter++;
		riddle2Guess += "N"; 
	};

	function directionCounterDown() {
		riddle2Counter++;
		riddle2Guess += "S";
	};

	function directionCounterRight() {
		riddle2Counter++;
		riddle2Guess += "E";
	};

	function directionCounterLeft() {
		riddle2Counter++;
		riddle2Guess += "W";
	};

	function checkRiddle2Guess() {
		if (riddle2Guess === ""){
			return false;
		}
		else if (riddle2Guess === riddle2Answer){
			$(".wrongButton2").addClass("hideWrongButton2");
			$(".correctButton2").removeClass("hideCorrectButton2");
			if (!$(".correctButton").hasClass("hideCorrectButton") && !$(".correctButton2").hasClass("hideCorrectButton2")){
				$(".blackBackground").removeClass("hide");
				$(".successKey").removeClass("hide");
				$(".successKey").addClass("animated fadeInDown");
			}
			return false; 
		}
		else {
			$(".wrongButton2").removeClass("hideWrongButton2");
			riddle2Guess = "";
			return false;
		}
	}
});