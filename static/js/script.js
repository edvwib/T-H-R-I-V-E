$(document).ready(function(){

  $(document).on("scroll",function(){
    if($(document).scrollTop()>175){
      $("nav").removeClass("large").addClass("small");
    } else{
      $("nav").removeClass("small").addClass("large");
    }
  });



  //Initialize image slider
  $('.cocoen').cocoen();
  

  //Triangle hover
  //Top
  $('#triangleTop').click(function(){
    $(this).closest('.trianglePage').removeClass('topHover rightHover leftHover');
    $(this).closest('.trianglePage').addClass('topHover');
  });
  //Left
  $('#triangleLeft').click(function () {
    $(this).closest('.trianglePage').removeClass('topHover rightHover leftHover');
    $(this).closest('.trianglePage').addClass('leftHover');
  });
  //Right
  $('#triangleRight').click(function () {
    $(this).closest('.trianglePage').removeClass('topHover rightHover leftHover');
    $(this).closest('.trianglePage').addClass('rightHover');
  });



});
