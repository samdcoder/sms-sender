$(document).ready(function(e){
  //getting the id from window url
  let user_id = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  let obj = {uid: user_id};
    $.ajax({
            url: "/api/userData/",
            type: 'GET',
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType   : "json",

            success: function (data) {
                var details = $('#details');
                details.append('<h3> First Name: '+data.firstName +  '</h3>')
                details.append('<h3> Last Name: '+data.lastName +  '</h3>')
                details.append('<h3> Phone: '+data.phone +  '</h3>')
               
            },
            cache: false,
            contentType: false,
            processData: false
       });



    $("#send-message-button").click(function(){
        //call an api, which will return an html page for send message, attach a new script file with that page
        //that script file needs the user id which can be used for fetching the data 
        //fetch api from url again
        window.location.href='/send-message/'+user_id;
    });

});