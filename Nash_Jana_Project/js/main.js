/*  
	HomeSmart.com
	PWA-2
	Author: Jana Nash-Siegle
*/




//JQuery for Tooltips site wide
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
    })
        .mousemove(function(e) {
        var mousex = e.pageX + 20;       //gets us the X coordinates
        var mousey = e.pageY + 10;       //gets us the Y coordinates
        $('.tooltip').css({ top: mousey, left: mousex });   //so we can follow the mouse around
    });
});





//JQuery for Project Page Accordion and h2 color toggle on active
$(document).ready(function() {
    $('div.project h2').click(function(e){     //we do not want any h2's actively open on load
        e.stopImmediatePropagation();           //so let's stop any default browser acts
        e.preventDefault();
        var div = $(this).next('section');    //this creates a div out of the current p element
        $(this).toggleClass('active');    //keeps the active h2 background changed to active css
        $('div.project section').slideUp();              //calls the p to animate with a slide up to close...
        if (div.is(":visible")) return;         //if it is visible else...
        div.slideDown();                        //it will open on a slide down
    });
});


//js for radio buttons

function set_radio($inputid) {      //takes the radio button id and passes it to the button
    $("input#" + $inputid).click();
}
$(function () {
    $(".radio-picture").click(function() {    //on click add red border to chosen status image
        //$(this).css('border', "solid 2px red") ;
        // Unhighlight all the images
        $(this).css("background-image", "url(../images/new.png").toggleClass('highlighted');


    });


    });


$(document).ready(function() {

    //set opacity to 1.0 for all the images


    $('.radio-picture').css('opacity', 1);

    // when hover over the selected image change the opacity to 1
    $('.radio-picture').hover(
        function(){
            $(this).css("background-image", "url(../images/new.png").stop().fadeTo('slow', 0.4);
        },
        function(){
            $(this).css("background-image", "url(../images/new.png").stop().fadeTo('slow', 1);
        });

});
