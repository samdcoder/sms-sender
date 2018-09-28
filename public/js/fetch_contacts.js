$(document).ready(function(){

	  $.ajax({
            url: "/api/contacts/",
            type: 'GET',
            success: function (data) {
                var result = $('#contact-list');
                data = data['contacts'];
               for(var key in data){
               	result.append('<a href="/user/' +data[key].id + '"' + ' <h3> '+ data[key].id + ". " + data[key].firstName + '  ' + data[key].lastName + '</a> </li> <br><br>');
               }                   
            },
            cache: false,
            contentType: false,
            processData: false
       });
});

