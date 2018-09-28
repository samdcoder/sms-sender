$(document).ready(function(){
    let otp =  Math.floor(100000 + Math.random() * 900000);
    otp = otp.toString();
    let message = "Hi. Your OTP is: "+otp;
    $("textarea#user-message").val(message);
    $("#send-message-button").click(function(e){
        e.preventDefault();
        e.stopPropagation();    
        var message = $('textarea#user-message').val();
        let user_data = {'message': message};
        $.ajax({    
            url: "/",
            type: 'POST',
            data: user_data,
            success: function(result){
                alert("Sent the call successfully!")
            }});
    });
});
