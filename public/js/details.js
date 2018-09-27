$(document).ready(function(e){
  console.log("hello!!");
  let user_id = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  let obj = {uid: user_id};
    $.ajax({
            url: "/api/userData/",
            type: 'GET',
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType   : "json",

            success: function (data) {
                console.log("response = ", data);
                console.log("type of response = ", typeof(data));
                var details = $('#details');
                details.append('<h3> First Name: '+data.firstName +  '</h3>')
                details.append('<h3> Last Name: '+data.lastName +  '</h3>')
                details.append('<h3> Phone: '+data.phone +  '</h3>')
               
            },
            cache: false,
            contentType: false,
            processData: false
       });
  }
);

