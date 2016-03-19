$(document).ready(function(){
	$("#splashScreenButton").on("click", checkSplashScreenAnswer);

	function checkSplashScreenAnswer (){
		var splashScreenInput = $("#splashScreen").val();
		var thisInput = splashScreenInput.toString().toLowerCase(); 

		if (thisInput === ""){
			return false;
		}
		else if (thisInput === "readysetg0" || thisInput === "ready set g0"){
			$("#pagetwo").addClass("hide");
			return false;
		}
		else {
			$("#warning").text("Stop guessing...");
			return false;
		}
	};

});