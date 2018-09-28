
/*$(document).ready(function(){

    $("form#user-form").submit(function(e) {
        e.preventDefault();
        e.stopPropagation();    
        var formData = new FormData(this);

        $.ajax({
            url: "/",
            type: 'POST',
            data: formData,
            success: function (data) {
                var result = $('#result');
                result.html('');
                result.append('<center> <b>' + data.message + '<b> </center>');
                if(data.code == 200){
                    $( '#user-form' ).each(function(){
                         this.reset();
                    });
                }
            },
            cache: false,
            contentType: false,
            processData: false
       });
    });
*/
  /*  var contacts = document.getElementById('contacts-button');
    var viewSms = document.getElementById('view-sms-button');
    
    contacts.onclick = function(){
        alert("in the contacts function!");
        $.ajax({
            url: "/contacts",
            type: 'GET',
            success: function (data) {
                console.log(data);
                //var result = $('#userData');
                //var counter = 1;
               //for(var key in data){
                //result.append('<tr> <th scope="row">'+ counter + '</th>' + '<td>' + data[key].name+'</td>'+ '<td>'+data[key].email+'</td>'+'<td>'+data[key].phone+'</td>'+'<td>'+data[key].job+'</td>'+'</tr>');
                //counter++;
              // }
               
            },
            cache: false,
            contentType: false,
            processData: false
       });    
    }

    viewSms.onclick = function(){
        alert("in the view sms function!");
    }


});

*/