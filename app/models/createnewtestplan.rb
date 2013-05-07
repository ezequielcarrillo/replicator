#create new test plan 
#need also to save datat on a db

def createnewtestplan(testplanname)

	  outFile = File.new("../../testPlan/"+"#{testplanname}","w")
      outFile.close

end

