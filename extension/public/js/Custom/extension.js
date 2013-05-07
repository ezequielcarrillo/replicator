//this js is executed on the extension pop up windows
function runextension() {

      chrome.tabs.getSelected(null, function(tab) {
        
        tabUrl = tab.url;
        var url = tab.url;
        
        $.ajax({
            url: 'http://localhost:4567/open', 
            type: "POST",        
            data: {url: url},   
            success: function(data, textStatus){
               // alert('request successful');
            },
            error: function(xhr, textStatus, errorThrown){
            	
                alert(xhr); alert(textstatus); alert(errorThrown);
            }
        });
    });
}

function createtestplan(){

    var testplanName = $('#test-name').val();
    $.ajax({
            type: 'POST',
            url: 'http://localhost:4567/createtestplan',
            data: {testplanName: testplanName},
            success: function() {},
            error: function() {
                dialog();
            },
        });


}

function more(){

    $('.more_m_c').toggle();

}

function advanced(){

    $('.option_m_c').toggle();

}

function workflow(){

    $('#test-name').toggle();
}

function opentest(){

    $('#run_test').hide();

        $('#openTest').change(function(){
       
              var testName = $('#openTest').val();

             if (testName == ''){

                $('#run_test').hide();
            }
           else{

               $('#run_test').show();
            }

        });

}
	document.addEventListener('DOMContentLoaded', function() {
        
        $('.more_m_c').hide();
        $('.option_m_c').hide();

		$('#open').click(function(){

			runextension();
            status();
		});	  

        $('#more_m_c').click(function(){

            more();
        });

        $('#advance_options_m_c').click(function(){

            advanced();
        });

        $('#workflow').click(function(){

            workflow();
        });

        opentest();

        $('#test-name').blur(function(){
            
            if ($('#test-name').val() !=''){
        
                createtestplan();
            }

        });
});