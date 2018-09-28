$(document).ready(function(){
    let otp =  Math.floor(100000 + Math.random() * 900000);
    otp = otp.toString();
    let message = "Hi. Your OTP is: "+otp;
    $("textarea#user-message").val(message);
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

        console.log("user_data = ", user_data);
        $.ajax({    
            url: "/",
            type: 'POST',
            data: user_data,
            success: function(result){
                alert("Sent the call successfully!");
            }});
    });
});
