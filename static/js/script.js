$(document).ready(function(){

  $(document).on("scroll",function(){
    if($(document).scrollTop()>250){
      $("nav").removeClass("large").addClass("small");
    } else{
      $("nav").removeClass("small").addClass("large");
    }
  });




});
