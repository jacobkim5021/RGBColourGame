//TODO: refactor and clean up

var num = 4;	//initial number of tiles
var backgroundColor = "#232323"

var colours = generateColours(num);
var correctColour = pickColour();

var tiles = document.querySelectorAll(".tile");
var correctColourText = document.querySelector("h2");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var difficultyButtons = document.querySelectorAll(".difficulty-button");
for(var i = 0 ; i < difficultyButtons.length ; i++){
	difficultyButtons[i].addEventListener("click", function(){
		for(var j = 0 ; j < difficultyButtons.length ; j++){
			difficultyButtons[j].classList.remove("selected");
		}
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			num = 2;
			colours = generateColours(num);
			correctColour = pickColour();
			correctColourText.textContent = correctColour;
			for(var k = 0 ; k < tiles.length ; k++){
				tiles[k].style.display = "none";
			}
			tiles[0].style.display = "block";
			tiles[1].style.display = "block";
			tiles[0].style.backgroundColor = colours[0];
			tiles[1].style.backgroundColor = colours[1];
		}
		else if(this.textContent === "Hard"){
			num = 8;
			colours = generateColours(num);
			correctColour = pickColour();
			correctColourText.textContent = correctColour;
			for(var m = 0 ; m < tiles.length ; m++){
				tiles[m].style.display = "block";
				tiles[m].style.backgroundColor = colours[m];
			}
		}
		else{
			num = 4;
			colours = generateColours(num);
			correctColour = pickColour();
			correctColourText.textContent = correctColour;
			for(var l = 0 ; l < tiles.length ; l++){
				if(l < 4){
					tiles[l].style.backgroundColor = colours[l];
					tiles[l].style.display = "block";
				}
				else if(l >= 4){
					tiles[l].style.display = "none";
				}
			}
		}
		resetButton.textContent = "New Colours";
		h1.style.backgroundColor = "slateblue";
		correctColourText.style.backgroundColor = "slateblue";
		message.textContent = "";
	});
}

correctColourText.textContent = correctColour;

resetButton.addEventListener("click", function(){
	colours = generateColours(num);
	correctColour = pickColour();
	correctColourText.textContent = correctColour;
	for(var i = 0 ; i < colours.length ; i++){
		tiles[i].style.backgroundColor = colours[i];
	}
	this.textContent = "New Colours";
	h1.style.backgroundColor = "slateblue";
	correctColourText.style.backgroundColor = "slateblue";
	message.textContent = "";
});

for(var n = 4 ; n < tiles.length ; n++){
	tiles[n].style.display = "none";
}

for(var i = 0 ; i < tiles.length ; i++){
	tiles[i].style.backgroundColor = colours[i];
	tiles[i].addEventListener("click", function(){
		if(this.style.backgroundColor === correctColour){
			message.textContent = "Correct!";
			changeAllColours(correctColour);
			h1.style.backgroundColor = correctColour;
			correctColourText.style.backgroundColor = correctColour;
			resetButton.textContent = "Play Again?";
		}
		else{
			this.style.backgroundColor = backgroundColor;
			message.textContent = "Try Again";
		}
	});
}

function changeAllColours(colour){
	//change all tiles to given colour
	for(var i = 0 ; i < colours.length ; i++){
		tiles[i].style.backgroundColor = colour;
	}
}

function pickColour(){
	//pick a random colour from `colours`
	return colours[Math.floor(Math.random() * colours.length)];
}

function generateColours(numberOfTiles){
	//generate random colours for initial tiles
	var tempArray = [];

	for(var i = 0 ; i < numberOfTiles ; i++){
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);
		tempArray.push("rgb(" + red + ", " + green + ", " + blue + ")");
	}

	return tempArray;
}