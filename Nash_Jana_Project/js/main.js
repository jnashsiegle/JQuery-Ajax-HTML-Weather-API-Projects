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


    //JQuery for Project Page Accordion and h2 color toggle on active  (try to reactivate for wk 4 - ran out of time wk3

    /*$('div.projects').click(function (e) {     //we do not want any h2's actively open on load
     e.stopImmediatePropagation();           //so let's stop any default browser acts
     e.preventDefault();
     var div = $(this).next('.projectid');    //this creates a div out of the current p element
     $(this).toggleClass('active');    //keeps the active h2 background changed to active css
     $('div.projects').slideUp();              //calls the p to animate with a slide up to close...
     if (div.is(":visible")) return;         //if it is visible else...
     div.slideDown();                        //it will open on a slide down
     });*/

    //JQuery for Modal

    $('.modalClick').click(function (e) {   //activates on click function to open modal
        e.stopImmediatePropagation();       //stops other event handlers from being called
        e.preventDefault();                 //stops the default action from activating
        $('#overlay')                       //grabs the overlay
            .fadeIn(1000)                       //fades the overlay in slowly rather than all at once appearing
            .find('#modal')                     //will find the actual modal now and..
            .fadeIn(2000);                      //it will now fade in over 2 secs

    });

    $('.close').click(function (e) {                 //activates on click of the "close" button 'X'
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
    });                                                 //easing of swing is set, but not enough time for it to fully                                                                                                       be seen
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


    //Log In

    $('#signinButton').click(function () {
        console.log("are we locked and loaded?");              //checking to see if script loads
        var user = $('#user').val();            //declaring var of user called to id of user
        var pass = $('#pass').val();            //password var called to id of pass
        console.log("This should tell you if the pass is working.");
        $.ajax({
            url: 'xhr/login.php',           //connects us to the login.php
            type: 'post',                   //we will be posting data
            dataType: 'json',               //using json
            data: {                             //specifying the data we will be using
                username: user,                 //username called to user
                password: pass                  //password called to pass
            },
            success: function (response) {      //on a response from user we will console log "test user"
                console.log("Success!!");
                if (response.error) {           //if response errs we'll do an alert
                    alert(response.error);
                } else {                        //else if no error we will go to the admin.html
                    window.location.assign('admin.html');
                }
            }


        });
    });

    //Log Out
    $('#logOut').click(function (e) {
        e.preventDefault(); //stop action of button until we tell it to go to xhr file
        $.get('xhr/logout.php', function () { //get the logout.php process
            window.location.assign('index.html'); //send back to index.html
        });
    });

    //Go to projects page

    $('.projectsbtn').click(function (e) {
        e.preventDefault(); //stops click action until it is called
        window.location.assign('projects.html'); //redirects to projects.html page upon completion
    });

    //Go to Dashboard

    $('#dashBtn').click(function (e) {
        e.preventDefault(); //stops click action until it is called
        window.location.assign('admin.html'); //redirects to admin.html page upon completion
    });

    //Go to myAccount

    $('#myAccount').click(function (e) {
        e.preventDefault(); //stops click action until it is called
        window.location.assign('account.html'); //redirects to accounts.html page upon completion - page hopefully set up for wk.  ran out of time
    });

    //Display username

    $.getJSON("xhr/check_login.php", function (data) { //pull the login.php and making a function named data
        console.log(data); //everytime it's called it will pull up the data first_name
        $.each(data, function (key, val) {
            console.log(val.first_name); //spits out the first_name into the console
            $(".userid").html("Welcome " + val.first_name + " to your Project Keeper");
        });
    });

    //Register

    $('#register').click(function () {
        var firstname = $('#first-name').val(), //set vars from data keys (id's)
            lastname = $('#last-name').val(), //set vars from data keys (id's)
            username = $('#user-name').val(), //set vars from data keys (id's)
            email = $('#email').val(), //set vars from data keys (id's)
            password = $('#password').val(); //set vars from data keys (id's)
        console.log(firstname + " " + lastname + " " + username + " " + email + " " + password); //confirm data in console

        $.ajax({
            url: 'xhr/register.php', //url to php file
            type: 'post', //using post method
            dataType: 'json', //json data type
            data: {
                firstname: firstname, //calls for fields
                lastname: lastname, //calls for fields
                username: username, //calls for fields
                email: email, //calls for fields
                password: password //calls for fields
            },
            success: function (response) { //calls for the success function response
                if (response.error) { //if an error do:
                    alert(response.error); //an alert error message
                } else {
                    window.location.assign('admin.html'); //redirect to admin.html
                }
            }
        });
    });

    // New Project

    $('#addButton').click(function () { //calls an add button function/modal
        var projName = $('#pName').val(), //set vars from css ids
            projDesc = $('#pDesc').val(), //set vars from css ids
            projDue = $('#pDate').val(), //set vars from css ids
            status = $('input[name = "status"]:checked').prop("id"), //set vars from css ids
            PID = $('.projectid').val(); ////set vars from css ids - used during experimentation with delete
        console.log(projName + " " + projDesc + " " + projDue + " " + status); //console out info

        $.ajax({
            url: "xhr/new_project.php", //url to new_project.php file
            type: 'post', //posting data
            dataType: 'json', //using json
            data: {
                projectName: projName, //calls database names into vars above
                projectDescription: projDesc, //calls database names into vars above
                dueDate: projDue, //calls database names into vars above
                status: status //calls database names into vars above

            },
            success: function (response) { //success funtion
                console.log('Testing for success Gooooo me!'); //consoling for are we in function
                if (response.error) { //if an error respond by
                    alert(response.error); //popping an alert box with message
                } else {
                    window.location.assign('projects.html'); //else go back to projects page
                }
            }
        });
    });


//Get Projects

    var projects = function () {

        $.ajax({
            url: 'xhr/get_projects.php', //calling dynamically for the projects info from db
            type: 'get', //using GET method
            dataType: 'json', //type json
            success: function (response) { //if success go on to for loop
                if (response.error) { //if error
                    console.log(response.error); //respond with a console.log error message
                } else { //with success we will.....

                    for (var i = 0, j = response.projects.length; i < j; i++) { //loop through the object array
                        var result = response.projects[i]; //gathering info into result

                        console.log(result); //lists out all projects and data fields with values (result variable)

                        $(".projects").append( //we are going to insert this information into the .projects class div
                           // '<div style = "border: 1px solid black">' +
                            '<div id = "sortable" class = "ui-state-default">' +
                            "<input class = 'projectid' type = 'hidden' value = '" + result.id + "'  > " + "<br>" +
                            " Project Name: " + result.projectName + "<br>" +
                            " Project Description: " + result.projectDescription + "<br>" +
                            " Project Status: " + result.status + "<br>" +
                            "Project Due Date: " + result.dueDate + "<br>" +
                            "Project ID: " + result.id + "<br><br>" +
                            '<button class = "deletebtn" >Delete</button>' +
                            '<button class = "editbtn">Edit</button>' + '<br></div>' //this is one long concatanation of how the information will be displayed within the html including the css and field vars of information from the db
                        );
                        console.log("This is " + result.id); //logs out what the result.id is at moment used when trying to figuree out how to assign id to delete button so correct record is deleted.

                    }
                    $(".deletebtn").on('click', function () { //calls a function on the delete button to delete a record

                        var PID = $(this).parent().find(".projectid").val();  //finds the value of the project id, saves the value in PID and deletes
                        /* $(this).remove(PID); */
                        /* var PID = $(this)("projectid").val(); //these are all expressions trying to figure out how to get right record deleted, from here..*/
                        /* $(this).PID.remove();*/
                        /*$(this).closest(projects(projectID)).remove();*/
                        /* $(this).closest(".projects").remove(result.id);*/
                        /*UNTIL HERE */
                        console.log("after the delete button function PID is : " + PID); //console trying to troubleshoot delete button
                        /* $(".projectid").remove();  --------  More attempts here and below*/
                        /* var parent = $(this).result.id();*/
                        /*$(this).closest(result.id).remove();*/
                        console.log('test delete' + "this is the result.id:  " + result.id); //more console trying to work out when delete finishes what is the result.id
                        $.ajax({
                            url: 'xhr/delete_project.php', //calling the delete_project file
                            data: {
                                projectID: PID //YES!!!!!! This is what I was missing..got it.....all's deleting!!!!!!!this ties projectID to PID
                            },
                            type: 'POST', //using POST method
                            dataType: 'json', //json

                            success: function (response) { //upon success of deletion of any record ANY being keyword here

                                console.log('Testing for superior success!' + parent); //this message displays in console

                                if (response.error) { //if it errors pop the alert message
                                    alert(response.error);
                                } else {
                                    console.log(result.id); //still following the id info for troubleshooting
                                    window.location.assign("projects.html"); //redirect upon successful completion to projects.html
                                }
                            }
                        });
                    }); //End Delete
                }
            }
        });

    };

    projects();

    //DatePicker



    $(function() {
        $( ".datepicker" ).datepicker();
        $( "#anim" ).change(function() {
            $( "#datepicker" ).datepicker( "option", "showAnim","slow", $( this ).val("clip") );
        });

    });

    //

    //sortable
    $(function() {
        $( ".sortable" ).sortable({
            placeholder: "ui-sortable-placeholder"
        });
    });










})(jQuery);