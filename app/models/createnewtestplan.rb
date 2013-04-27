#create new test plan 
#need also to save datat on a db

def createnewtestplan(testplanname)

	  outFile = File.new("./testPlan/"+"#{testplanName}","w")
      outFile.close
end