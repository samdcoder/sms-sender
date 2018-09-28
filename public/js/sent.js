$(document).ready(function(){

	  $.ajax({
            url: "/api/sent/",
            type: 'GET',
            success: function (response) {
                var result = $('#sent-block');
                if(response.code != 200){
                    result.append('<h1 class="text-danger"> There was some error in fetching the texts! </h1>');
                }
                else{
                  alert("in the else as well!")
                  let data = response['data'];
                  console.log("data array = ", data);
                  for(var key in data){
                    // need to convert date to IST
                    var dateUTC = new Date(data[key].createdAt);
                    var dateUTC = dateUTC.getTime() 
                    var dateIST = new Date(dateUTC);
                    //date shifting for IST timezone (+5 hours and 30 minutes)
                    dateIST.setHours(dateIST.getHours() + 5); 
                    dateIST.setMinutes(dateIST.getMinutes() + 30);

               	    result.append('<h3>' +data[key].firstName + ' ' + data[key].lastName + ' ' + data[key].otp + ' ' + dateIST + '</h3>');
                    } 
                  }                  
            },
            cache: false,
            contentType: false,
            processData: false
       });
});

