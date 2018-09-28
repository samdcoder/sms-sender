$(document).ready(function(){
	  $.ajax({
            url: "/api/contacts/",
            type: 'GET',
            success: function (data) {
                var result = $('#contact-list');
                data = data['contacts'];
                result.append('<div class="card" style="width: 18rem;">')
                result.append('<ul class="list-group">')
               for(var key in data){
               	result.append('<a href="/user/' +data[key].id + '"> ' + '<li class="list-group-item list-group-item-dark list-group-item-action "  style="height: 40px; width: 300px; padding: 10px 15px;"> <h5>' + data[key].firstName + '  ' + data[key].lastName + '</h5></a></li><br>');
               }
               result.append('</ul>');
               result.append('</div>');                   
            },

            cache: false,
            contentType: false,
            processData: false
       });
});

