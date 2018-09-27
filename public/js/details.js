$(document).ready(function(){

    $.ajax({
      url: "/user",
      type: "GET", //send it through get method
      data: { 
        ajaxid: 4, 
      },
      success: function(response) {
        //Do Something
      },
      error: function(xhr) {
        //Do Something to handle error
      }
    });
});