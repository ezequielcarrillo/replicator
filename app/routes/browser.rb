#open browser
post '/open' do
	 
	 puts params[:url]
	 identifier = params[:url]
	 openbrowser(identifier)

end