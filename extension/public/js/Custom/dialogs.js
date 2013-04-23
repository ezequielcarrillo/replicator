	function dialog(){
	
		$('body').append("<div id='dialog-message-r-c' title='Browser error'>there was an error trying to launch the browser , please try again</div>");
		
		$( "#dialog-message-r-c" ).dialog({
				modal: true,
				buttons: {
						Ok: function() {
							$( this ).dialog( "close" );
							$('#dialog-message-r-c').remove();
							}
				}
			});
	
	}
	function dialogclick(){
	
		$('body').append("<div id='dialog-message-r-c' title='object error'>there was an error ,object was not found , please try again</div>");
		
		$( "#dialog-message-r-c" ).dialog({
				modal: true,
				buttons: {
						Ok: function() {
							$( this ).dialog( "close" );
							$('#dialog-message-r-c').remove();
							}
				}
			});
	
	}