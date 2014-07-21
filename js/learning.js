jQuery(document).ready(function($) {
  
  $('dd')/*.filter(':nth-child(n+4)')*/.addClass('hide');
  
  $('dl').on('mouseenter','dt', function() {
  	$(this)
  	.next()
  		 .slideDown(200)
  			.siblings('dd')
  				.slideUp(200);
 	});

  	$('heading.title').delegate('h1', 'click', function() {
  		console.log('clicked');
  		$(this).clone().appendTo('.title');
  	});

  var co = $('span.co').each(function() {
  	var $this = $(this);

  	$('<blockquote></blockquote>', {
  		class: 'quote',
  		text: $this.text()
  	}).prependTo( $this.closest('p') );
  	
  });
});	


