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
  
  //Desktop triangle click
  const popupOpenLinks = document.querySelectorAll('.popupOpen');
  const text = document.querySelector('#materialText');
  popupOpenLinks.forEach(function(popupOpen){    
    popupOpen.addEventListener('click', function(e){
      switch (popupOpen.getAttribute('href')) {
        case '#popup1':
          text.innerHTML = 'Modeindustrin är både snårig och smutsig innan plagget hänger på galgen. Under tillverkningsprocessen används det ofta mycket kemikalier, olja och stora mängder vatten som förorenar miljön och försämrar hälsan hos människor som bor runtom industrierna.<br><br>Du kan enkelt byta ut dessa material till mer miljövänliga alternativ. Kläder som på riktigt är bra för dig och vår miljö!';
          break;
        case '#popup2':
          text.innerHTML = 'Vi gör allt mer kläder i plastmaterial där polyester är det vanligaste. De här materialen kallas syntetmaterial och är alltså gjorda av en slags plast som utvinns ur olja.Inte så klimatsmart.<br><br> Det går åt mycket energi och kemikalier för att omvandla olja till textil-fibrer och när polyester färgas krävs höga temperaturer. Syntetmaterial är inget vidare bra, varken vid industrins framställning eller när vi tvättar kläderna hemma. Kemikalier och plastpartiklar läcker ut i vattendrag och påverkar både djur och växter.<br><br>Det går att återvinna plast och polyester kan tillverkas av till exempel gamla PET-flaskor. Återvunnen polyester är såklart alltid bättre än ny eftersom det inte har använts någon råolja.';
          break;
        case '#popup3':
          text.innerHTML = 'Bomull är det allra vanligaste materialet i våra kläder, nästan hälften av alla textilier är tillverkade av bomull. Bomull odlas på varma platser men kräver också stora mängder vatten.Det gör att det ofta är brist på vatten i områden där det odlas mycket bomull.Bomullsplantan är känslig för skadedjur och måste besprutas.Det förorenar miljön och gör många som arbetar på plantagen sjuka.Arbetsvillkoren är ofta dåliga och i många länder är det fortfarande ett problem att barnen plockar bomull istället för att gå i skolan.< br > <br>Det finns ekologisk bomullsodling och då får varken konstgödsel eller kemiska bekämpningsmedel användas. Bara en enda procent av all bomullsodling i världen är ekologisk och det går åt lika mycket vatten.<br><br> Det går att hitta kläder som delvis är gjorda av återvunnen bomull, men i dag är det svårt att tillverka plagg i helt återvunnen bomull eftersom fibrerna blir för svaga. Det sker mycket forskning på det här området som pekar på att det kan vara möjligt inom några år.<br><br> Bomull är ett material som är lätt att färga, lätt att tvätta och skönt mot kroppen. Gillar du plagg i bomull ska du försöka köpa ekologisk eftersom det är mycket bättre för miljö och människor. Också återvunnen bomull är ett bra alternativ.';
          break;
        default:
          break;
      }
    });
  });
  const popupCloseButtons = document.querySelectorAll('.popupClose');
  popupCloseButtons.forEach(function(popupClose){
    popupClose.addEventListener('click', function (e) {
      text.innerHTML = 'Modeindustrin är både snårig och smutsig innan plagget hänger på galgen. Under tillverkningsprocessen används det ofta mycket kemikalier, olja och stora mängder vatten som förorenar miljön och försämrar hälsan hos människor som bor runtom industrierna.<br><br>Du kan enkelt byta ut dessa material till mer miljövänliga alternativ. Kläder som på riktigt är bra för dig och vår miljö!';
    });
  });
    
  

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
