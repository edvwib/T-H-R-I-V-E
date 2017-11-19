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



  //Disable scrolling on popup mobile
  // const overlays = document.querySelectorAll('.popup');
  // overlays.forEach(function(overlay){
  //   overlay.addEventListener('touchmove', function (e) {      
  //     e.preventDefault();
  //   }, false);
  //   overlay.addEventListener('mousewheel', function (e) {
  //     e.preventDefault();
  //   }, false);
  // });
    
  // window.addEventListener('hashchange', function(){
  //   url = window.location.href.split("#").pop();
  //   console.log(url);
  //   if (url === 'popup2'){
  //     console.log('hej');
      
  //   }
  // });
  

  

  //Triangle hover
  //Top
  // $('#triangleTop').click(function(){
  //   $(this).closest('.trianglePage').removeClass('topHover rightHover leftHover');
  //   $(this).closest('.trianglePage').addClass('topHover');
  // });
  // //Left
  // $('#triangleLeft').click(function () {
  //   $(this).closest('.trianglePage').removeClass('topHover rightHover leftHover');
  //   $(this).closest('.trianglePage').addClass('leftHover');
  // });
  // //Right
  // $('#triangleRight').click(function () {
  //   $(this).closest('.trianglePage').removeClass('topHover rightHover leftHover');
  //   $(this).closest('.trianglePage').addClass('rightHover');
  // });



});
