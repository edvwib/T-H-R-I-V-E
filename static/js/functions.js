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
function setTextLyocell(textD, textM){
  textD.innerHTML = 'Välj Lyocell framför Viskos!<br>I viskos används mycket kemikalier som skadar både arbetarna och miljön. Det går åt ungefär 5,5 kilo kemikalier för att tillverka ett kilo färdigt tyg. Både Lyocell och Viskos tillverkas av trä men i Lyocell hanterar man kemikalierna i ett slutet system och lösningsmedlet är organiskt vilket gör det mycket bättre för miljön.';
  textM.innerHTML = 'Det går åt ca 5,5 kg kemikalier för att tillverka ett kilo tyg av Viskos. Båda materialen tillverkas av trä men i Lyocell hanterar man kemilkalierna på ett sätt som är bättre för oss och vår miljö.';
}
function setTextPet(textD, textM){
  textD.innerHTML = 'Välj återvunnen polyester framför vanlig polyester!<br>Polyester är ett syntetmaterial som kräver mycket energi och kemikalier för att omvandla råolja till textilfibrer. Idag kan vi istället återvinna plast (t.ex. gamla PET-flaskor) som vi sedan kan tillverka kläder av. Återvunnen polyester är såklart alltid bättre än ny eftersom det inte har använt någon råolja.';
  textM.innerHTML = 'Polyester är ett syntetmaterial som kräver mycket energi och kemikalier för att omvandla råolja till textilfibrer. Idag kan vi istället återvinna plast som vi sedan kan göra nya kläder av.';
}
function setTextCotton(textD, textM){
  textD.innerHTML = 'Välj ekologisk bomull istället för vanlig bomull!<br>Bomull är det allra vanligaste materialet i våra kläder. Odlingsprocessen av bomull kräver stora mängder vatten och måste besprutas, vilket förorenar miljön. På en ekologisk bomullsodling får varken konstgödsel eller besprutningsmedel användas.';
  textM.innerHTML = 'Odlingsprocessen av bomull kräver stora mängder vatten och måste besprutas, vilket förorenar miljön. På en ekologisk bomullsodling får varken konstgödsel eller besprutningsmedel användas.';
}
function setTextDefault(textD, textM){
  textD.innerHTML = '';
  textM.innerHTML = '';
}


/*----------------------------------------------------------------------------*/
