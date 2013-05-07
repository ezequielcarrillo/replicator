$(document).ready(function(){
	
	function open(){
		
		var url = location.href;
		
		$.ajax({
			type: 'POST',
			url: 'http://localhost:4567/open',
			data: {url: url},
			success: function() {},
			error: function() {
				dialog();
			},
		});
	}
	
	
	$(window).bind('keydown', function(event) {
	
    if (event.ctrlKey || event.metaKey) {
        switch (String.fromCharCode(event.which).toLowerCase()) {	
		case 'b':
			event.preventDefault();
            open();
            break;		
		case 'x':
            event.preventDefault();
            stopReplicate();
            break;		
        }
    }
	
  });


	replicate();
 
});