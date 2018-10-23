$(document).ready(function() {
  $('#mainNav li a').click(function(e) {
  	
    alert('Clicked');
    
    e.preventDefault();
  });
});
$(document).ready(function() {
  $('#mainNav li a').click(function(e) {
  	
  	var targetHref = $(this).attr('href');
	  
	$('html, body').animate({
		scrollTop: $(targetHref).offset().top
	}, 1000);
    
    e.preventDefault();
  });
});