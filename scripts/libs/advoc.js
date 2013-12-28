function toStep2fb(){
	$('.advoc-step1-panel').addClass('animated fadeOutLeft');
	$('.advoc-stepper1').css("background-color","#ffffff");
	$('.advoc-stepper1 b,h4,h5').css("color","#575757");
	$('.advoc-stepper1 span').css("visibility","visible");
	$('.advoc-step1-panel').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function() {
		$('.advoc-step1-panel').css("display","none");
		$('.advoc-step2-fb-panel').css("display","block");
		$('.advoc-step2-fb-panel').addClass('animated fadeInRight');
		$('.advoc-stepper2').css("background-color","#45B571");
		$('.advoc-stepper2 b,.advoc-stepper2 h4,.advoc-stepper2 h5').css("color","#ffffff");
	});
};
function toStep2tw(){
	$('.advoc-step1-panel').addClass('animated fadeOutLeft');
	$('.advoc-stepper1').css("background-color","#ffffff");
	$('.advoc-stepper1 b,h4,h5').css("color","#575757");
	$('.advoc-stepper1 span').css("visibility","visible");
	$('.advoc-step1-panel').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function() {
		$('.advoc-step1-panel').css("display","none");
		$('.advoc-step2-tw-panel').css("display","block");
		$('.advoc-step2-tw-panel').addClass('animated fadeInRight');
		$('.advoc-stepper2').css("background-color","#45B571");
		$('.advoc-stepper2 b,.advoc-stepper2 h4,.advoc-stepper2 h5').css("color","#ffffff");
	});
};
function fbtoStep3(){
	$('.advoc-step2-fb-panel').addClass('animated fadeOutLeft');
	$('.advoc-stepper2').css("background-color","#ffffff");
	$('.advoc-stepper2 b,h4,h5').css("color","#575757");
	$('.advoc-stepper2 span').css("visibility","visible");
	$('.advoc-step2-fb-panel').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function() {
		$('.advoc-step2-fb-panel').css("display","none");
		$('.advoc-step3-panel').css("display","block");
		$('.advoc-step3-panel').addClass('animated fadeInRight');
		$('.advoc-stepper3').css("background-color","#45B571");
		$('.advoc-stepper3 b,.advoc-stepper3 h4,.advoc-stepper3 h5').css("color","#ffffff");
	});
	return false;
};
function twtoStep3(){
	$('.advoc-step2-tw-panel').addClass('animated fadeOutLeft');
	$('.advoc-stepper2').css("background-color","#ffffff");
	$('.advoc-stepper2 b,h4,h5').css("color","#575757");
	$('.advoc-stepper2 span').css("visibility","visible");
	$('.advoc-step2-tw-panel').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function() {
		$('.advoc-step2-tw-panel').css("display","none");
		$('.advoc-step3-panel').css("display","block");
		$('.advoc-step3-panel').addClass('animated fadeInRight');
		$('.advoc-stepper3').css("background-color","#45B571");
		$('.advoc-stepper3 b,.advoc-stepper3 h4,.advoc-stepper3 h5').css("color","#ffffff");
	});
	return false;
};
function addToCart(){

};
