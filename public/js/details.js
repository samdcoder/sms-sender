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
                details.append(`
                    <div class="card">
                        <img src="/assets/profile_pic.jpg" alt="John" style="width:100%">
                        <h3 id="firstName">${data.firstName}</h3> <h3 id="lastName"> ${data.lastName} </h3>
                        <h3 id="phone"> ${data.phone} </h3>
                    `);
            },
            cache: false,
            contentType: false,
            processData: false
       });

    $("#send-message-button").click(function(){
        window.location.href='/send-message-page/'+user_id;
    });

});