$(document).ready(function(){
    alert("in the ready function!");
	  $.ajax({
            url: "/getJson",
            type: 'GET',
            success: function (data) {
                console.log(data);
                var result = $('#contact-list');
                var counter = 1;
               /*for(var key in data){
               	result.append('<tr> <th scope="row">'+ counter + '</th>' + '<td>' + data[key].name+'</td>'+ '<td>'+data[key].email+'</td>'+'<td>'+data[key].phone+'</td>'+'<td>'+data[key].job+'</td>'+'</tr>');
                counter++;
               }*/
               result.append(data);
               
            },
            cache: false,
            contentType: false,
            processData: false
       });
});