#search for browser
def findBrowser(identifier)

	identifier = identifier.split('?').first
	urls = Regexp.new '.*' 
	return Watir::IE.attach(:url, urls)
end

#watir object type
def selectorType(tag,type)
	
	# .text.include?,  .h1-h6, .table, .area, .modal_dialog,

	if tag =='A' 
		return  '.a'
	end
	
	if tag =='LI' 
		return  '.link'
	end
	
	if tag =='INPUT' && type =='text'
		return  '.text_field'
	end
	
	if tag =='TEXTAREA' 
		return  '.text_field'
	end
	
	if tag =='INPUT' && type =='email'
		return  '.text_field'
	end


	if tag =='INPUT' && type =='password'
		return  '.text_field'
	end

	if tag =='INPUT' && type =='image'
		return  '.button'
	end
		
	if tag =='INPUT' && type =='submit'
		return  '.button'
	end	

	if tag =='BUTTON'
		return  '.button'
	end

	if tag =='INPUT' && type =='checkbox'
		return  '.checkbox'
	end

	if tag =='INPUT' && type =='radio'
		return  '.radio'
	end	 

	if tag =='SELECT'
		return '.select_list'
	end	
	
	if tag =='LI'
		return '.li'
	end
	 
	if tag =='SPAN'
		return '.span'
	end

	if tag =='DIV'
		return '.div'
	end
	
	if tag =='P'
		return '.p'
	end

	if tag =='LABEL'
		return '.label'
	end
	
end

#watir object selector
def selectorproperties(id, e_class, type, tag ,text ,val, name)
	
	if tag == 'DD' or tag == 'LABEL' or tag == 'PRE' or tag == 'MAP' or tag == 'P' or tag == 'TR' or tag == 'SPAN' or tag == 'STRONG' or tag == 'TABLE' or tag == 'TBODY' or tag == 'TD'
		
		return 	  '(:id =>'+"\'#{id}\'"+',:class =>'+"\'#{e_class}\'"+',:name =>'+"\'#{name}\'"+',:text =>'+"\'#{text}\'"+')'
	end
	
	if tag == 'DIV' 
		
		return 	  '(:id =>'+"\'#{id}\'"+',:class =>'+"\'#{e_class}\'"+')'
	end
	
	if type == 'RADIO' 	or type == 'CHECKBOX' or tag == 'SELECT'
		
		return 	  '(:id =>'+"\'#{id}\'"+',:class =>'+"\'#{e_class}\'"+')'
	end
	
	if tag == 'A'
	
		return	'(:id =>'+"\'#{id}\'"+',:class =>'+"\'#{e_class}\'"+',:text =>'+"\'#{text}\'"+')'#add	:href
	end
	
	if tag == 'BUTON' or tag == 'INPUT' && type == 'button' or tag == 'INPUT' && type == 'image' or tag == 'INPUT' && type == 'submit' or tag == 'INPUT' && type == 'text' or tag == 'INPUT' && type == 'password' or tag == 'INPUT' && type == 'email'
	
		return  '(:id =>'+"\'#{id}\'"+',:class =>'+"\'#{e_class}\'"+',:name =>'+"\'#{name}\'"+')'  	
	end
	
	if tag == 'TEXTAREA'
	
		return  '(:id =>'+"\'#{id}\'"+',:class =>'+"\'#{e_class}\'"+',:name =>'+"\'#{name}\'"+')'  	
	end
	
end

#build watir action
def selectoraction(action,value)
	
	if action == 'click' #element
		return '.'+"#{action}"
	end	

	if action == 'set' #text box ,# textarea
		return '.'+"#{action}" +' '+"\'#{value}\'"
	end
	
	if action == 'select' #drop down
		return '.'+"#{action}" +' '+"\'#{value}\'"
	end

	if action == 'clear' #radio, checkbox
		return '.'+"#{action}" +' '+"\'#{value}\'"
	end

	if action == 'set' #radio, checkbox
		return '.'+"#{action}" +' '+"\'#{value}\'"
	end

	if action =='' #verify value or text
		return ''#'.'+"#{action}" +' '+"\'#{value}\'"
	end
	
	if action =='fire_event' #fire event mouse over
		return '.'+"#{action}" +' '+"\'onmouseover\'"
	end

end

def objectconstructor(obj_type, obj_selector, obj_action)

		return "#{obj_type}" + "#{obj_selector}" + "#{obj_action}"

end	