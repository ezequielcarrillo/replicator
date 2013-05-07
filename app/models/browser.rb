def openbrowser(identifier)
	
	identifier = identifier
	browser = Watir::Browser.new
	browser.goto "#{identifier}"

end

