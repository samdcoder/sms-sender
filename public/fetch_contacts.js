$(document).ready(function(){
    
	  $.ajax({
            url: "/getJson",
            type: 'GET',
            success: function (data) {
                
                var result = $('#contact-list');
                var counter = 1;
                data = data['contacts'];
               for(var key in data){
                console.log("Key = ", key);
               	result.append('<h3> '+ counter + ": " + data[key].firstName + '  ' + data[key].lastName + '<br>');
                counter++;
               }

               result.append(data);
               
            },
            cache: false,
            contentType: false,
            processData: false
       });
});