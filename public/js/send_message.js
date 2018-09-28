$(document).ready(function(){

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
