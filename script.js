// Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

let cells = document.getElementsByTagName('footer')[0];

var count = 0

cells.addEventListener("click", function() {

console.log(count);
count += 1;
});



var navbarHeader = document.getElementById("navbarHeader");
var navBtn = document.querySelector(".navbar-toggler-icon");
navBtn.addEventListener("click", function() {
  navbarHeader.classList.toggle("collapse");
});
///////////////////////////////////////////////////////
 //Exercice 3
 var textCard = document.querySelectorAll(".card-body p");
 var editBtn = document.querySelectorAll(".card .btn");
 editBtn[1].addEventListener("click", function() {
   textCard[0].style.color = "red";
 });

 //Exercice 4
textCard[1].style.color = "rgb(33, 37, 41)";
editBtn[3].addEventListener("click", function() {
      if (textCard[1].style.color == "rgb(33, 37, 41)") {
       textCard[1].style.color = "green";
     } else {
       textCard[1].style.color = "rgb(33, 37, 41)";
     }
   });

//Exercice 5
// si un utilisateur double clique sur la navbar en haut, 
// tout Bootstrap disparaît et la page s'affiche comme si on
// avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).

var header = document.getElementsByTagName('header')[0];
var onHeaderDoubleClick = function() {
	if (document.styleSheets[0].disabled == false) {
		document.styleSheets[0].disabled = true
	} else {
		document.styleSheets[0].disabled == false
	}
}
header.addEventListener('dblclick', onHeaderDoubleClick)

// Exercice 6

var reduce = document.getElementsbyClassName('card-img-top')
var onCardDoubleClick = function() {
	if (document.card-img-top.disabled == false) {
		document.card-img-top.disabled = true
	} else {
		document.car-img-top.disabled == false
	}
}
reduce.addEventListener('dblclick', onCardDoubleClick)



