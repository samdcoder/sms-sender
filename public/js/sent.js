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
                  let data = response['data'];
                  let table_gen = ``;
                  let current = `<table class="table">
                                <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">OTP</th>
                                  <th scope="col">Date</th>
                                </tr>
                                </thead>
                                <tbody>
                    `;

                  table_gen += current;

                  let counter = 1;
                  for(var key in data){
                    // need to convert date to IST
                    var dateUTC = new Date(data[key].createdAt);
                    var dateUTC = dateUTC.getTime() 
                    var dateIST = new Date(dateUTC);
                    //date shifting for IST timezone (+5 hours and 30 minutes)
                    dateIST.setHours(dateIST.getHours()); 
                    dateIST.setMinutes(dateIST.getMinutes());
                    let myDate = new Date(dateIST);
                    let date = myDate.toLocaleString();
                    current =   `
                                <tr>
                                <th scope="row">${counter}</th>
                                  <td>${data[key].firstName} ${data[key].lastName}</td>
                                  <td>${data[key].otp}</td>
                                  <td>${date}</td>
                               </tr>
                      `;
                    table_gen += current;
                      counter++;
                    }
                    table_gen += '</tbody></table>'; 
                    result.append(table_gen);
                  }                  
            },
            cache: false,
            contentType: false,
            processData: false
       });
});

