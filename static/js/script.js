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
  

});
