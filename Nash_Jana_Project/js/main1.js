/*  
 Your Project Title
 Author: Jana Nash-Siegle
 */

(function($){

    /*JQuery for Tooltips site wide */

/* Tooltip only Text*/
    $('.hsTooltip').hover(function () {
        // Hover over code
        var title = $(this).attr('title');         //using title attribute as our variable
        $(this).data('tipText', title).removeAttr('title');  //remove default tooltip, store data for later
        $('<p class="tooltip"></p>')    //create paragraph element with class of tooltip
            .text(title)       //set the tooltip contents
            .appendTo('body')     //add to page
            .fadeIn('slow');     //let's animate
    }, function () {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));   //restore title attr
        $('.tooltip').remove();             //remove tooltip
    })
        .mousemove(function (e) {
            var mousex = e.pageX + 20;       //gets us the X coordinates
            var mousey = e.pageY + 10;       //gets us the Y coordinates
            $('.tooltip').css({top: mousey, left: mousex});   //so we can follow the mouse around
        });


/*JQuery for Project Page Accordion and h2 color toggle on active*/

    $('div.project h2').click(function(e){     //we do not want any h2's actively open on load
        e.stopImmediatePropagation();           //so let's stop any default browser acts
        e.preventDefault();
        var div = $(this).next('section');    //this creates a div out of the current p element
        $(this).toggleClass('active');    //keeps the active h2 background changed to active css
        $('div.project section').slideUp();              //calls the p to animate with a slide up to close...
        if (div.is(":visible")) return;         //if it is visible else...
        div.slideDown();                        //it will open on a slide down
    });

/*JQuery for Modal*/


    ('.modalClick').on('click', function (e) {
        e.preventDefault();
        $('#overlay')
            .fadeIn()
            .find('#addModal')
            .fadeIn();

    })

    ('.close').on('click', function (e) {
        e.preventDefault();
        $('#overlay')
            .fadeOut()
            .find('#addModal')
            .fadeOut();

    });







})(jQuery); // end private scope




