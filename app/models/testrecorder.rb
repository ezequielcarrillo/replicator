def Writetest(step)

	file = File.open("./testPlan/test.rb", "w")
 	file.write("\n"+"#{step}") 
	file.close
end