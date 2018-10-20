$(document).ready(function(){
	$('.myOption').click(function(){
		if ($(this).hasClass('Clicked')) {
			$(this).addClass('Default').removeClass('Clicked');
		}
		else{
			$(this).addClass('Clicked').removeClass('Default');
		}
	});
});