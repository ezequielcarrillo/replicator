#elements interaction
post '/click' do

	e_id = params[:id]
	e_class = params[:e_class]
	e_type = params[:type]
	e_tag = params[:tag]
	e_text = params[:text]
	e_val = params[:val]
	e_name = params[:name]
	url = params[:url]
	action = params[:action]
	input_value =params[:input_value]
	title = params[:title]

	
	browserSelector ="browser"
	selectorType =selectorType(e_tag,e_type)
	selectoridentifier = selectorproperties("#{e_id}", "#{e_class}", "#{e_type}", "#{e_tag}" ,"#{e_text}" ,"#{e_val}","#{e_name}")
	selectorAction = selectoraction("#{action}","#{input_value}")
	
	browser = findBrowser(url)
	Writetest( "#{browserSelector}"+ objectconstructor(selectorType, selectoridentifier, selectorAction))
	
	puts "#{browserSelector}"+ objectconstructor(selectorType, selectoridentifier, selectorAction)
	eval("#{browserSelector}"+ objectconstructor(selectorType, selectoridentifier, selectorAction))

end
