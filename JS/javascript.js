// Defines the function and color label from the 'Add Task' Menu 
$(function(){
   $(document).on("click", "#sel1", function(event){
    
    // Add Priority Labels to List Group
        var value1 = $('#dropdown1').val();
        if(value1 == "Urgent" ){
          var class_name1 = "label label-danger";
        }
        else if (value1 == "Coming Up"){
          var class_name1 = "label label-warning"}
        else if (value1 == "Low Priority"){
          var class_name1 = "label label-success"}
    
    // Assign Task to Users in List Group
        var value2 = $('#dropdown2').val();
        if(value2 == "Mary" ){
          var class_name2 = "badge";}
        else if (value2 == "Todd"){
          var class_name2 = "badge"}
        else if (value2 == "Lincoln"){
          var class_name2 = "badge"}
        var input= $("#usr").val();
    
    // Append All Elements to List Group

      $(".list-group").append("<li class=\"list-group-item\">"+
        "<label class=\"checkbox-inline\"><input type=\"checkbox\" class=\"check\" value=\"\">"+input+"</label>"+
        "<button type=button\" class=\"btn btn-link pull-right\"><span class=\"glyphicon glyphicon-trash\" id=\"trash\" aria-hidden=\"true\"></span></button>"+
        "<span class=\""+class_name2+"\" style=\"float:right\">"+value2+"</span></a>"+
        "<span class=\""+class_name1+"\" style=\"float:right\">"+value1+"</span></li>");
      // Test for Append Above
        console.log(value1 +" "+ value2 +" "+ class_name1 +" "+ class_name2);
   }); 
});

// Animated fade out on task completion via click of checkbox
$('.list-group').on('click', '.check', function(){
    // Perform Action
        if (this.checked) {
      $(this).closest('li').fadeOut(500, function(){$(this).closest('li').remove();});
    }
});

// Animated fade out on click of trash can
$('.list-group').on('click', '#trash', function(){
    // Confirm delete
    var choice = confirm("Okay to delete this task?");
      if(choice){
      $(this).closest('li').fadeOut(500, function(){$(this).closest('li').remove();});
    }
});


