$(document).ready(function(){
	$("#submitButton").on("click", checkRiddle1Answer);

	function checkRiddle1Answer (){
		var riddle1input = $("#riddle1input").val();
		var thisInput = riddle1input.toString().toLowerCase(); 

		if (thisInput === ""){
			return false;
		}
		else if (thisInput === "timemachine" || thisInput === "time machine"){
			$(".wrongButton").addClass("hideWrongButton");
			$(".correctButton").removeClass("hideCorrectButton");
			if (!$(".correctButton").hasClass("hideCorrectButton") && !$(".correctButton2").hasClass("hideCorrectButton2")){
				$(".blackBackground").removeClass("hide");
				$(".successKey").removeClass("hide");
				$(".successKey").addClass("animated fadeInDown");
			}
			return false;
		}
		else {
			$(".wrongButton").removeClass("hideWrongButton");
			return false;
		}
	};

});