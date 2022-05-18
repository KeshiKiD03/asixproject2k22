//el intervalo
var timers = [];
$( ".banner-enroll-fixed" ).each(function( index ) {
	var dataId = $(this).attr("data-id");
	 var timer = "timerId-"+dataId;
	 timers[dataId] = timer;
});
//Inicia la alerta con el countdown
function initCountdownAlert(idAlert) {
	clearInterval(timers[idAlert]);
	var $alert = $(".banner-enroll-fixed[data-id='" + idAlert +"']");
	$alert.show();
	var countdownNumber = $alert.find(".countdown-number");
	var countdownTime =  parseFloat($alert.find(".comp-timer").attr("data-time"));
	var countdown = countdownTime;
	var countdownDecrease = 0;
	var fullCircle = 95;
	$alert.find("svg.path circle").css("stroke-dashoffset", 0);

	countdownNumber.text(countdownTime);
	timers[idAlert] = setInterval(function() {
	  countdown = --countdown;
	  if (countdown == -1) {
		  clearInterval(timers[idAlert]);
		  $alert.hide();
	  }
	  else {
		  countdownDecrease = ++countdownDecrease;
		  countDownCircle = (countdownDecrease * fullCircle) / countdownTime
		  countdownNumber.text(countdown);
		  $alert.find("svg.path circle").css("stroke-dashoffset", countDownCircle);
	  }
	}, 1000);
	
	$alert.find(".close").click(function(){
		$alert.hide();
	});

}
