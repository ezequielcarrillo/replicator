def createnewtestplan(testplanname)

	  outFile = File.new("./testPlan/"+"#{testplanName}","w")
      outFile.close
end