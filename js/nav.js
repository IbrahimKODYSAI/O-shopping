$(document).ready(function(){

	$('#gender a').click(function(){
		$('#gender a').removeClass('active');/*enlève tout les éléments qui ont suceptiblement la classe active*/
		$(this).addClass('active');
		var id = $(this).attr('href');
	    scrollTo(id);
	    return false;
	});

	function scrollTo(target){
  	     if($(target).length>=1){
  		     height=$(target).offset().top;
  	}
  	$('html,body').animate({scrollTop:height}, 1000);
  	return false;
  }

});