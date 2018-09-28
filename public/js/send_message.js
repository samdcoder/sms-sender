$(document).ready(function(){
    let otp =  Math.floor(100000 + Math.random() * 900000);
    otp = otp.toString();
    let user_id = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    let obj = {uid: user_id};
 
    let message = "Hi. Your OTP is: "+otp;
    $("textarea#user-message").val(message);
    //fetching user data first to populate the page with user data     
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


    $("#send-message-button").click(function(e){
        e.preventDefault();
        e.stopPropagation();    
        let message = $('textarea#user-message').val();
        let firstName = $('#firstName').text(); 
        let lastName = $('#lastName').text();
        let phone = $('#phone').text();

        let user_data = {
            'message': message, 
            'otp': otp, 
            'firstName': firstName,
            'lastName': lastName,
            'phone': phone
        };

        $.ajax({    
            url: "/",
            type: 'POST',
            data: user_data,
            success: function(result){
                if(result.code == 200){
                    alert("successfully sent the message!");
                }
                else{
                    alert("Error in sending the message!");
                }
                let host =  window.location.host;
                window.location.href="/";
            }});
    });
});
