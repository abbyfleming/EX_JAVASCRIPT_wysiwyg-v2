

function getPeople() {
	var output = document.getElementById("container");

	for (var i = 0; i < famousPeople.length; i++) {

		var myPerson = famousPeople[i];

		var cards = 
		`<div class="allcards">
			<header><h2>${myPerson.name}, ${myPerson.title}</h2></header>
			<section><img src=${myPerson.image}> <p>${myPerson.bio}</p></section>
			<footer>${myPerson.lifespan.birth} - ${myPerson.lifespan.death}</footer>
		</div>`;

		output.innerHTML += cards;

	}

	addBackground();
	dottedBorder();
}


function addBackground(){
	var getAllCards = document.getElementsByClassName("allcards");
	for (var i = 0; i < getAllCards.length; i++) {
		if( i%2 === 0) {
			getAllCards[i].classList.add("blue");
		} else {
			getAllCards[i].classList.add("yellow");
		}
	}
}

function dottedBorder(){
	var getAllCards = document.getElementsByClassName("allcards");
	var input = document.getElementById("input");

	for (var i = 0; i < getAllCards.length; i++) {
		var currentCard = getAllCards[i];
		currentCard.addEventListener("click", function() {
			this.classList.toggle("border");
			input.focus();
			mirrorText(this);
		})
	}
}

function mirrorText(currentCard){
	var input = document.getElementById("input");
	input.addEventListener("keyup", function(){
			if (currentCard.classList.contains("border")) {
				currentCard.querySelector("p").innerHTML = input.value; 
				clearText();
			}
	})
}

function clearText(){
	var input = document.getElementById("input");
	input.addEventListener("keydown", function(event){
		if (event.keyCode === 13) {
			input.value = "";
		}
	})
}

getPeople(); //Calls getPeople to load the peeps.
