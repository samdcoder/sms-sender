$(document).ready(function(){

	  $.ajax({
            url: "/getJson",
            type: 'GET',
            success: function (data) {
                
                var result = $('#contact-list');
                data = data['contacts'];
               for(var key in data){
               	result.append('<a href="/user/' +data[key].id + '"' +  ' onclick="getDetails(\'this\')"> <h3> '+ data[key].id + ". " + data[key].firstName + '  ' + data[key].lastName + '</a> </li> <br><br>');
               }    
               
            },
            cache: false,
            contentType: false,
            processData: false
       });
});

function getDetails(obj){
  console.log("in the get details, uid: "+$(obj).attr('data-uid'));
}