$(document).ready(function(){
    function deparam(query) {
    var pairs, i, keyValuePair, key, value, map = {};
    // remove leading question mark if its there
    if (query.slice(0, 1) === '?') {
        query = query.slice(1);
    }
    if (query !== '') {
        pairs = query.split('&');
        for (i = 0; i < pairs.length; i += 1) {
            keyValuePair = pairs[i].split('=');
            key = decodeURIComponent(keyValuePair[0]);
            value = (keyValuePair.length > 1) ? decodeURIComponent(keyValuePair[1]) : undefined;
            map[key] = value;
        }
    }
        return map;
    }

    $("#send-message-button").click(function(e){
        e.preventDefault();
        e.stopPropagation();    

        data_array = $("#send-message-form").serialize();
        console.log("data_array = ", data_array);
        let user_message = deparam(data_array);
        
        $.ajax({
            url: "/",
            type: 'POST',
            data: user_message,
            success: function(result){
                alert("Sent the call successfully!")
            }});
    });
});
