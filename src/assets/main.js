$(function() {


      // your code will go here
      $.ajax({
         url: 'https://www.codeschool.com/users/salmana.json',
         dataType: 'jsonp',
         success: function(response) {
           // handle response
           //--we need to loop through: response.courses.completed Array
           $.each(response.courses.completed, function( key, value )
           {//--begin-Jquery_each-loop

              var $myDiv = $("<div>", { "class": "course"});
              $myDiv.append("<h3>"+ value.title  +"</h3>");

              var $myImage = $("<img>",{"src": value.badge,"alt":"badge image"});
              $myDiv.append($myImage);

              var $myAnchor = $("<a>",{"href": value.url, "target":"_blank","class":"btn btn-primary"});
              $myAnchor.append("See Course");
              $myDiv.append($myAnchor);

            $("#badges").append($myDiv);

           });//--end-Jquery_each-Loop


     }//--end--success-callback-function
   });//--end--ajax-call



});
