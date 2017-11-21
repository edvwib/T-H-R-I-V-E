/*-----------------------------TRIANGLE---------------------------------------*/
/*Triangle backgrounds*/
function restoreTriangleBackground(fullImage){
  fullImage[0].setAttribute('xlink:href', 'img/materials/bark.jpeg');
  fullImage[1].setAttribute('xlink:href', 'img/materials/pet.jpg');
  fullImage[2].setAttribute('xlink:href', 'img/materials/cotton.jpg');
}
function fullLyocellBackground(fullImage){
  fullImage.forEach(function(imagePart){
    imagePart.setAttribute('xlink:href', 'img/materials/bark.jpeg');
  });
}
function fullPetBackground(fullImage){
  fullImage.forEach(function(imagePart){
    imagePart.setAttribute('xlink:href', 'img/materials/pet.jpg');
  });
}
function fullCottonBackground(fullImage){
  fullImage.forEach(function(imagePart){
    imagePart.setAttribute('xlink:href', 'img/materials/cotton.jpg');
  });
}

/*Triangle titles*/
function clearTriangleTitles(titles){
  titles.forEach(function(title){
    title.innerHTML = '';
  });
}
function setTriangleTitlesLyocell(titles){
  titles[0].innerHTML = 'VISKOS';
  titles[1].innerHTML = 'LYOCELL';
  titles[2].innerHTML = '/TENCEL';
}
function setTriangleTitlesPet(titles){
  titles[0].innerHTML = 'POLYESTER';
  titles[1].innerHTML = 'ÅTERVUNNEN';
  titles[2].innerHTML = 'PLAST';
}
function setTriangleTitlesCotton(titles){
  titles[0].innerHTML = 'VANLIG BOMULL';
  titles[1].innerHTML = 'EKOLOGISK';
  titles[2].innerHTML = 'BOMULL';
}

/*Triangle icon*/
function imageCross(image){
  image.setAttribute('transform', 'rotate(45)');
}
function imagePlus(image){
  image.setAttribute('transform', 'rotate(0)');
}
function moveIconLeft(circle, image, link){
  circle.setAttributeNS(null, 'cx', '30');
  circle.setAttributeNS(null, 'cy', '68');
  image.setAttribute('x', '25');
  image.setAttribute('y', '63');
  link.setAttribute('href', '#popup2');
}
function moveIconRight(circle, image, link){
  circle.setAttributeNS(null, 'cx', '70');
  circle.setAttributeNS(null, 'cy', '68');
  image.setAttributeNS(null, 'x', '65');
  image.setAttributeNS(null, 'y', '63');
  link.setAttribute('href', '#popup3');
}
function moveIconTop(circle, image, link){
  circle.setAttributeNS(null, 'cx', '50');
  circle.setAttributeNS(null, 'cy', '32');
  image.setAttributeNS(null, 'x', '45');
  image.setAttributeNS(null, 'y', '27');
  link.setAttribute('href', '#popup1');
}

/*Text*/
function setTextLyocell(text){
  text.innerHTML = 'lyocell text här';
}
function setTextPet(text){
  text.innerHTML = 'Vi gör allt mer kläder i plastmaterial där polyester är det vanligaste. De här materialen kallas syntetmaterial och är alltså gjorda av en slags plast som utvinns ur olja.Inte så klimatsmart.<br><br> Det går åt mycket energi och kemikalier för att omvandla olja till textil-fibrer och när polyester färgas krävs höga temperaturer. Syntetmaterial är inget vidare bra, varken vid industrins framställning eller när vi tvättar kläderna hemma. Kemikalier och plastpartiklar läcker ut i vattendrag och påverkar både djur och växter.<br><br>Det går att återvinna plast och polyester kan tillverkas av till exempel gamla PET-flaskor. Återvunnen polyester är såklart alltid bättre än ny eftersom det inte har använts någon råolja.';
}
function setTextCotton(text){
  text.innerHTML = 'Bomull är det allra vanligaste materialet i våra kläder, nästan hälften av alla textilier är tillverkade av bomull. Bomull odlas på varma platser men kräver också stora mängder vatten. Det gör att det ofta är brist på vatten i områden där det odlas mycket bomull. Bomullsplantan är känslig för skadedjur och måste besprutas.Det förorenar miljön och gör många som arbetar på plantagen sjuka. Arbetsvillkoren är ofta dåliga och i många länder är det fortfarande ett problem att barnen plockar bomull istället för att gå i skolan.<br> <br>Det finns ekologisk bomullsodling och då får varken konstgödsel eller kemiska bekämpningsmedel användas. Bara en enda procent av all bomullsodling i världen är ekologisk och det går åt lika mycket vatten.<br><br> Det går att hitta kläder som delvis är gjorda av återvunnen bomull, men i dag är det svårt att tillverka plagg i helt återvunnen bomull eftersom fibrerna blir för svaga. Det sker mycket forskning på det här området som pekar på att det kan vara möjligt inom några år.<br><br> Bomull är ett material som är lätt att färga, lätt att tvätta och skönt mot kroppen. Gillar du plagg i bomull ska du försöka köpa ekologisk eftersom det är mycket bättre för miljö och människor. Också återvunnen bomull är ett bra alternativ.';
}
function setTextDefault(text){
  text.innerHTML = 'Modeindustrin är både snårig och smutsig innan plagget hänger på galgen. Under tillverkningsprocessen används det ofta mycket kemikalier, olja och stora mängder vatten som förorenar miljön och försämrar hälsan hos människor som bor runtom industrierna.<br> Du kan enkelt byta ut dessa material till mer miljövänliga alternativ. Kläder som på riktigt är bra för dig och vår miljö!';

}


/*----------------------------------------------------------------------------*/
