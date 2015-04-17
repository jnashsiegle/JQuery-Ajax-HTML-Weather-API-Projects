/*  
	HomeSmart.com
	PWA-2
	Author: Jana Nash-Siegle
*/




(function($) {

    //JQuery for Tooltips site wide

// Tooltip only Text
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


//JQuery for Project Page Accordion and h2 color toggle on active

    $('div.project h2').click(function(e){     //we do not want any h2's actively open on load
        e.stopImmediatePropagation();           //so let's stop any default browser acts
        e.preventDefault();
        var div = $(this).next('section');    //this creates a div out of the current p element
        $(this).toggleClass('active');    //keeps the active h2 background changed to active css
        $('div.project section').slideUp();              //calls the p to animate with a slide up to close...
        if (div.is(":visible")) return;         //if it is visible else...
        div.slideDown();                        //it will open on a slide down
    });

//JQuery for Modal

    $('.modalClick').click(function(e) {   //activates on click function to open modal
        e.stopImmediatePropagation();       //stops other event handlers from being called
        e.preventDefault();                 //stops the default action from activating
        $('#overlay')                       //grabs the overlay
            .fadeIn(1000)                       //fades the overlay in slowly rather than all at once appearing
            .find('#modal')                     //will find the actual modal now and..
            .fadeIn(2000);                      //it will now fade in over 2 secs

    });

    $('.close').click(function(e) {                 //activates on click of the "close" button 'X'
        e.stopImmediatePropagation();                  //stops other event handlers from being called
        e.preventDefault();                         //stops the default action from activating
        $('#overlay')                               // grabs the overlay
            .fadeOut(2000)                          //begins fading the overlay out over 2 secs
            .find('#modal')                         //finds the modal
            .fadeOut(1000);                         //and it fades out over 1 sec

    });

//jQuery for mouseover



    $('label.mystatus').mouseover(function () {         //when mouse moves over any label with "mystatus" class
        $(this).fadeTo('1000', 0.2, 'swing');           //it's gong to fade out over 1sec to an opacity of .2 s
    });                                                 //easing of swing is set, but not enough time for it to fully                                                           be seen
    $('label.mystatus').mouseout(function () {          //when mouse moves off the label
        $(this).fadeTo('1000', 1, 'linear');            //we will now fade back in over 1 sec with a linear easing
    });

    //jQuery for tabs
    $('#tabs p').hide().eq(0).show();                   //what is first visible tab
    $('#tabs p:not(:first)').hide();                    // hide all the rest,

    $('#tabs-nav li').click(function (e) {              //listener for click we will hide current tab
        e.preventDefault();                             //stops the default action from activating
        $('#tabs p').hide();                            //hide the current tab

        $('#tabs-nav .current').removeClass("current"); //removing the class to
        $(this).addClass('current');                    //replace active tab
        var clicked = $(this).find('a:first').attr('href'); //find first href of current class

        $('#tabs ' + clicked).fadeIn('fast');           //tabs that are activated will fade in fast
    }).eq(0).addClass('current');                       //their class is now current


















})(jQuery);