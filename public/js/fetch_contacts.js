$(document).ready(function(){
	  $.ajax({
            url: "/api/contacts/",
            type: 'GET',
            success: function (data) {
                var result = $('#contact-list');
                data = data['contacts'];
                result.append('<div class="card" style="width: 18rem;">')
               for(var key in data){
                result.append(`
                <a href="/user/${data[key].id}">
                 <div class="card bg-danger text-white" style="width: 20rem;">
                 <div class="card-body"><h4 style="height: 8px;">${data[key].firstName} ${data[key].lastName}</h4></div>
                 </div>
                 <br>
                `);

               }
               result.append('</div>');
                                 
            },

            cache: false,
            contentType: false,
            processData: false
       });
});

