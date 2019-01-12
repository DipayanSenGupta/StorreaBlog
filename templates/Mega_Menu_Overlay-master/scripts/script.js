
$(document).ready(function() {
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