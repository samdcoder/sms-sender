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

        $.ajax({    
            url: "/",
            type: 'POST',
            data: user_data,
            success: function(result){
                console.log("result = ", result); 
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
