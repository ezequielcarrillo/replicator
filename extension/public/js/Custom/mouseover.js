/**
 * Created with JetBrains RubyMine.
 * User: ecarrillo
 * Date: 5/7/13
 * Time: 4:20 PM
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function(){

        function hover(){

            $.ajax({
                type: 'POST',
                url: 'http://localhost:4567/mouseover',
                data: {},
                success: function() {},
                error: function() {
                    dialogclick();
                },
            });

        }

});