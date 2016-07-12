jQuery(function(){
 (function($){
   $.ajaxSetup({
     beforeSend: function(xhr){
     xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
       xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");
     }
   });



   $.get("https://tiny-parse-server.herokuapp.com/classes/Cable").done(function(data){
     console.log(data);


     var firstResult = data.results[0];

     $.get("https://tiny-parse-server.herokuapp.com/classes/Cable" + firstResult.objectId).done(function(data){
       console.log(data);
     });
   });

   var data = {
     'firstName': 'Mrs',
     'lastName': 'Speedier',
     'messaage': "Here's your delivery"
   }

   $.post("https://tiny-parse-server.herokuapp.com/classes/Cable", data).then(function(response){
     console.log(response);

     if(response.objectId){
       alert(" an object with id:" + response.objectId);
     }
   });


 }(jQuery));
});
