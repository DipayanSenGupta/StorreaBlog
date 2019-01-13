
$(document).ready(function() {
  $("nav ul li").each(function(){
    console.log ($(this).children("ul").length)
    if($(this).parent().children("ul").length){
     console.log("helo")
    $(this).addClass("has_children");
    }
  });
  $("#open-menu").click(function(){
    $("#overlay").addClass("show-menu");
  });
  $("#close-menu").click(function(){
    $("#overlay").removeClass("show-menu");
  });
  // $('.dropdown-content').on('click', function() {
  //   $('nav li ul').slideToggle();
  // });

  $('.dropdown-content').click(function() {          
            var name = $(this).attr("name");
            var content = $('.content[name=' + name + ']');
            $('.content').not(content).hide('fast');
            content.slideToggle('fast');
        });
});