//meter en calculadora el 'isNaN'
//https://stackoverflow.com/questions/9510094/how-to-get-a-slice-from-arguments
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/arguments

//https://github.com/EzequielBurgosL/Subjects-PreCourse/blob/master/objects.md
//https://www.youtube.com/watch?v=FgA0WQ5j45Y&t=655s || minute 28:50
//https://github.com/logeshpaul/Frontend-Cheat-Sheets


for (key in avenger){
	console.log(key + ": " + avenger[key])
}


//a)b) Escribe 3 funciones que listen:
// 1) object Properties
// 2) Property names (keys) 
// 3) Property values 
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};

function getObjectProperties(){
	console.log(avenger);
	return Object.entries(avenger);
}
function getObjectKeys(){
	return Object.keys(avenger);
}
function getObjectValues(){
	return Object.values(avenger).join(", ");
}

//c)Cambia el valor de la propiedad class por "XI":

avenger.class = "XI";

//d) Ahora, elimina la propiedad ID:

delete avenger.id;

//e) Añade una nueva propiedad y dale un valor:
//e1) imprímela:
avenger.city = "New York City"; //console.log(avenger.city);

//f) Lista el numero de propiedades que contiene el objeto.

//console.log('There are ' + getObjectKeys().length + ' info fields');

//g) Cambia la propiedad name por fullName.
//https://stackoverflow.com/questions/20059995/how-to-create-an-object-from-an-array-of-key-value-pairs

delete avenger.name
var avengerArr = Object.entries(avenger);
var arrFullName = ["fullName", "Tony Stark"]
avengerArr.unshift(arrFullName);

var arr = avengerArr;

function arrayToObject(arr){
	return arr.reduce(function(prev,curr){prev[curr[0]]=curr[1];return prev;},{})
}

//g1) Asegura los cambios.

avenger = arrayToObject(arr);
//console.log(avenger.fullName)

//h) Lista todas las propiedades del objeto a través de un console.log()

//console.log('Hi there, I am ' + avenger.fullName + ', my class is ' + avenger.class + ' and I live in ' + avenger.city)

//h1) Añade más propiedades al objeto:

avenger.age = 28;
avenger.country = 'United States';
avenger.job = 'space detective';

//i) Crea un constructor de objetos llamado "Avenger" (first function letter is UPPER CASE)

function Avenger(fullName, age, city, job, weapon, id, uniqueNumber) {
    this.fullName = fullName;
    this.age = age;
    this.city = city;
    this.job = job;
    this.weapon = weapon;
    this.id = id;
    this.uniqueNumber = uniqueNumber;
    //k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia
    this.listProperties = function(){ 
    	console.log(this.fullName + ", " + this.age + ", " + this.city + ", " +
    				this.job + ", " + this.weapon  + ".");
    }
    myAvengersArray.push(this);

    if(!cities.includes(this.city)){
    	cities.push(this.city);
    }
     if(!ids.includes(this.id)){
    	ids.push(this.id);
    }
}

var myAvengersArray = [];
var cities = [];
var ids = []

var tonyStark = new Avenger('Tony Stark', 34, 'Boston', 'space officer', 'gatling gun', '1', 1)
var johnSnow = new Avenger('John Snow', 30, 'Boston', 'Wall guardian', 'Sword', '1', 2)
var ezequiel = new Avenger('Ezequiel Burgos', 28, 'Barcelona', 'Code detective', 'keyboard', '2', 3);
var ann = new Avenger('Ann Shirley', 26, 'Barcelona', 'Code detective', 'Needle', '2', 4);
var julia = new Avenger('Julia Mateu', 26, 'Barcelona', 'Translator', 'Mind', '3', 5);
var hector = new Avenger('Hector', 25, 'Barcelona', 'Programer', 'Keyboard', '3', 6);


//l) crea una función que solo liste los nombres de los objetos instanciados
	/*https://stackoverflow.com/questions/28725567/how-to-list-all-objects-in-oop*/

function avengersFullNameList(){
	
	var avengersArr = [];
	var counter = 0;

	myAvengersArray.forEach(function(obj){	
		avengersArr.push(obj.fullName);
		counter++;
	});
	return console.log(avengersArr.join(", ") + "." + " Hay un total de: " + counter)
}


function avengersFullNameList2(fullName){
	
	var nameListArray = myAvengersArray.map(function(avenger){
		return avenger.fullName; // --> imprime arrays filtrados por ciudad y nombre
	});
	return console.log(nameListArray.join(", ") + "." + " Hay un total de: " + nameListArray.length);
}


//m) Crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.

function listAvengersByCity(city){

	var sameCityAvengersArr = myAvengersArray.filter(avenger => avenger.city === city); // --> imprime los arrays filtrados por ciudad;

	var sameCityAvengerNamesMap = sameCityAvengersArr.map(function(avenger){
		return avenger.fullName; // --> imprime arrays filtrados por ciudad y nombre
	});
	
	return console.log("There are " + sameCityAvengerNamesMap.length + " avengers living in " + city + ": " + sameCityAvengerNamesMap.join(", ") + ".")
}



function listAvengersForeachCity(){ // --> itera por cada ciudad
	cities.forEach(function(city){
		listAvengersByCity(city);
	})
}


// n) crea una función que recoja todas las edades y muestre la media.

function avengersAverageAge(){
	
	acc = 0;

	myAvengersArray.forEach(function(obj){
		acc += obj.age;
	})
	return console.log(Math.round(acc/myAvengersAgeArray.length));
}

// ñ) Ahora, crea una funcion que recoja los avengers en parejas, compare sus edades muestre el mayor de ambos.

function listAvengersById(id){
	var sameIdAvengers = myAvengersArray.filter(function(avenger) {return avenger.id == id});

	var maximum = Math.max(...sameIdAvengers.map(function(avenger) {return avenger.age;}));

	var oldestAvengerInPair = sameIdAvengers.filter(avenger => avenger.age === maximum);
	var youngestAvengerInPair = sameIdAvengers.filter(avenger => avenger.age !== maximum);

	return console.log(youngestAvengerInPair[0].fullName + " VS " + oldestAvengerInPair[0].fullName + " => " + oldestAvengerInPair[0].fullName + " is older!");
}



function listAvengersForeachId(){ // --> itera por cada ciudad
	ids.forEach(function(id){
		listAvengersById(id);
	})
}


// ñ1) Intenta crear las parejas de forma aleatoria:

// function listRandomPairs(uniqueNumber){
	var randomArr = []
	while(randomArr.length < 6){
	    var randomnumber = Math.floor(Math.random()*6) + 1;
	    if(randomArr.indexOf(randomnumber) > -1) continue;
	    randomArr[randomArr.length] = randomnumber;
	}    
	var uniqueNumberAvenger1 = myAvengersArray.filter(avenger => avenger.uniqueNumber == randomArr[0]);
	var uniqueNumberAvenger2 = myAvengersArray.filter(avenger => avenger.uniqueNumber == randomArr[1]);
	var uniqueNumberAvenger3 = myAvengersArray.filter(avenger => avenger.uniqueNumber == randomArr[2]);
	var uniqueNumberAvenger4 = myAvengersArray.filter(avenger => avenger.uniqueNumber == randomArr[3]);
	var uniqueNumberAvenger5 = myAvengersArray.filter(avenger => avenger.uniqueNumber == randomArr[4]);
	var uniqueNumberAvenger6 = myAvengersArray.filter(avenger => avenger.uniqueNumber == randomArr[5]);

console.log(randomArr)

