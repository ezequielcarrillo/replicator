post '/createtestplan'  do 

	testplanName = params[:testplanName]
	createnewtestplan("#{testplanName}")
	
end