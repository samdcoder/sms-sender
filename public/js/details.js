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
                details.append('<div id="firstName"> <h4> First Name: '+data.firstName +  '</h4></div> ')
                details.append('<div id="lastName"> <h4> Last Name: '+data.lastName +  '</h4></div> ')
                details.append('<div id="phone"> <h4> Phone: '+data.phone +  '</h4></div> ')
               
            },
            cache: false,
            contentType: false,
            processData: false
       });

    $("#send-message-button").click(function(){
        window.location.href='/send-message-page/'+user_id;
    });

});