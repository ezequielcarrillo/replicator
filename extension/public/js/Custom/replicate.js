		function sendData(id, e_class, type, tag, text, val, url, action, title, input_value, name){
	
		 $.ajax({
				type: 'POST',
				url: 'http://localhost:4567/click',
				data: {id: id, e_class: e_class, type: type, tag: tag, text: text, val: val, url: url, action: action, title: title, input_value: input_value, name: name},
				success: function() {},
				error: function() {
					dialogclick();
				},
			});
	}
	
	function replicate(){
				
			$(document).click(function(){
					
					var e_id = event.target.id;
					var e_class = event.target.className;
					var e_type = event.target.type;
					var e_tag = event.target.tagName;
					var e_text = event.target.text;
					var e_val = event.target.value;
					var url = location.href;
					var input_value = event.target.value;
					var e_name = event.target.name;
					var title = $(document).find("title").text();
					var state = event.target.checked;
					var e_href = event.target.href;
					var e_src = event.target.src;
					
					if (e_class =='ui-button-text'){
						return false;
					}
					else{
							if (e_type == 'radio'){
							
								var action = 'set';
								
							}
							
							
							if (e_type == 'checkbox' && state == true){
							
								var action = 'set';
								
							}
							
							if (e_type == 'checkbox' && state == false){
							
								var action = 'clear';
								
							}
							
							else{
								var action = 'click';
							}
							sendData(e_id, e_class, e_type, e_tag, e_text, e_val, url, action, title, input_value, e_name);
					}						
				});
			
			$("input[type='text']").change(function(){
			
					var e_id = $(this).attr('id');
					var e_class = $(this).attr('class');
					var e_type = $(this).attr('type');
					var e_tag = $(this).prop('tagName');
					var e_text = $(this).text();
					var e_val = $(this).val();
					var e_name = $(this).attr('name');
					var url = location.href;
					var input_value = $(this).val();
					var title = $(document).find("title").text();
					var action = 'set';
					
					sendData(e_id, e_class, e_type, e_tag, e_text, e_val, url, action, title, input_value, e_name);
				});
				
				$("textarea").blur(function(){
			
					var e_id = $(this).attr('id');
					var e_class = $(this).attr('class');
					var e_type = $(this).attr('type');
					var e_tag = $(this).prop('tagName');
					var e_text = $(this).text();
					var e_val = $(this).val();
					var e_name = $(this).attr('name');
					var url = location.href;
					var input_value = $(this).val();
					var title = $(document).find("title").text();
					var action = 'set';
					
					sendData(e_id, e_class, e_type, e_tag, e_text, e_val, url, action, title, input_value, e_name);
				});
				
			$("select").change(function(){
			
					var e_id = $(this).attr('id');
					var e_class = $(this).attr('class');
					var e_type = $(this).attr('type');
					var e_tag = $(this).prop('tagName');
					var e_text = $(this).text();
					var e_name = $(this).attr('name');
					var e_val = $(this).val();
					var url = location.href;
					var input_value = $(this).val();
					var title = $(document).find("title").text();
					var action = 'select';
					
					sendData(e_id, e_class, e_type, e_tag, e_text, e_val, url, action, title, input_value, e_name);
			});	
	
	}
	
	function stopReplicate(){
	 $('html').unbind('click',replicate())
		
	}