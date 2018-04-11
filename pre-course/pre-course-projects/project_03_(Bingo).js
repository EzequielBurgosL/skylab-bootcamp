// // Skylab Bingo:

//FUNCION PADRE:
function skylabBingo(){

//FUNCIONES HIJAS
function generateRandomNumber(){
	var arr = []
	while(arr.length < 90){
	    var randomnumber = Math.floor(Math.random()*90) + 1;
	    if(arr.indexOf(randomnumber) > -1) continue;
	    arr[arr.length] = randomnumber;	  
	}
	return arr;
}

function searchCoincidence(){
		for (var i = 0; i < carton1.length; i++) {
		if (carton1[i] === randomNum[counter]){
			carton1[i] = "X";
			alert("A number coincided!");
			coincidenceCounter1++;
		}	
	};
		for (var i = 0; i < carton2.length; i++) {
		if (carton2[i] === randomNum[counter]){
			carton2[i] = "X";
			alert("A number coincided!");
			coincidenceCounter2++;
		}	
	};
		for (var i = 0; i < carton3.length; i++) {
		if (carton3[i] === randomNum[counter]){
			carton3[i] = "X";
			alert("A number coincided!");
			coincidenceCounter3++;
		}	
	};
}

function myCartonArray(){
	var arr = []
	while(arr.length < 90){
	    var randomnumber = Math.floor(Math.random()*90) + 1;
	    if(arr.indexOf(randomnumber) > -1) continue;
	    arr[arr.length] = randomnumber;	  
	}
	return arr;
}

function leaveGame(){
		var continuePlaying = confirm("We are in the turn " + (counter + 1) + ". Continue playing?");
		if (continuePlaying !== true){
			var quitGame = confirm("Do you want to quit this game?");
		
		 	if (quitGame === false){
		 		alert("lets continue playing!")
		 	}
		 	return quitGame;
		}
}

function insertName(){
		var name = prompt("What is your name?");
		alert("Thanks " + name + ". It's time to play my simple bingo if you will!");
}	

function extractingNumber(){
	alert("This is your current carton: " + "\n 1st line ==> | " + carton1 + " | " + "\n 2nd line ==> | " + carton2 + " | " + "\n 3rd line ==> | " + carton3 + " | ");
	alert("This is the number extracted! ==> " + randomNum[counter]);
}	

function restart(){
	var restart = confirm("Would you like to play again?");
	if (restart == true){
		bingoOneGame();	
	}else{
		alert("Thanks for playing bingo with us! :)")
	}
}

function nextTurn(){

	if(leaveGame() === true){
		return false;
	}	
	
	extractingNumber();
	searchCoincidence();
	counter++;
	return true;
}

function bingoOneGame(){
	while ((coincidenceCounter1 + coincidenceCounter2 + coincidenceCounter3) < 15 ) {
		if(!nextTurn()/*nextTurn === false*/){
			return;
		}

		if (coincidenceCounter1 === carton1.length || coincidenceCounter2 === carton2.length || coincidenceCounter3 === carton3.length){
			if (lineCounter === 0){
				alert("Line!!");
				lineCounter++;
			}
		}	
	};

	alert("BINGO!!");
}
var counter = 0;
var randomNum = generateRandomNumber();

var lineCounter = 0; 

var coincidenceCounter1 = 0;
var coincidenceCounter2 = 0;
var coincidenceCounter3 = 0;

var arr = myCartonArray();
var carton1 = arr.splice(0, 5);
var carton2 = arr.splice(0, 5);
var carton3 = arr.splice(0, 5);

// LLAMAMOS A FUNCIONES HIJAS
	insertName();
	bingoOneGame();
	restart();
}

// llamamos a función padre:
skylabBingo()


