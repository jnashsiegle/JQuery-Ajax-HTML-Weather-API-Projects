/*  
	HomeSmart.com
	PWA-2
	Author: Jana Nash-Siegle
*/

/*(function($){




		

	
})(jQuery); // end private scope  */




$(document).ready(function() {
// Tooltip only Text
    $('.hsTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');         //using title attribute as our variable
        $(this).data('tipText', title).removeAttr('title');  //remove default tooltip, store data for later
        $('<p class="tooltip"></p>')    //create paragraph element with class of tooltip
            .text(title)       //set the tooltip contents
            .appendTo('body')     //add to page
            .fadeIn('slow');     //let's animate
    }, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));   //restore title attr
        $('.tooltip').remove();             //remove tooltip
    }).mousemove(function(e) {
        var mousex = e.pageX + 20;       //gets us the X coordinates
        var mousey = e.pageY + 10;       //gets us the Y coordinates
                                            //so we can follow the mouse around
        $('.tooltip')
            .css({ top: mousey, left: mousex })
    });
});





