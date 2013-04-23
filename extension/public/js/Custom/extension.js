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

function more(){

    $('.more_m_c').toggle();

}

function advanced(){

    $('.option_m_c').toggle();

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
});