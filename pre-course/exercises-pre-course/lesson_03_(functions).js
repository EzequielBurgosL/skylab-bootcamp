
// //SUBJECT 03 ==> FUNCTIONS
// //==========================


// //Videos:
// //https://www.youtube.com/watch?v=7mChUtmS044&index=5&list=PLjge_y_KBC8Gofv9UXhHM6s-PokIFdpkR

// //Articles:
// //https://www.davidbcalhoun.com/2011/different-ways-of-defining-functions-in-javascript-this-is-madness/#a-function-declarations-function-a
// //https://www.w3schools.com/js/js_function_definition.asp

// //Different ways of declaring functions in JS:
// // function A(){};             // function declaration
// // var B = function(){};       // function expression
// // var C = (function(){});     // function expression with grouping operators
// // var D = function foo(){};   // named function expression
// // var E = (function(){        // IIFE (immediately-Invoked fuction expression) that returns a function
// //   return function(){}
// // })();
// // var F = new Function();     // Function constructor
// // var G = new function(){};   // special case: object constructor
// // var H = x => x * 2;         // ES6 arrow function


// //Example of nesting functions and variables:

// var n = function sayHello (){
// 	return "Hello!";
// }

// var x = n(); // "n" es una function guardada en una variable, "x" es una variable;

// function theNameIsMario(){
// 	return "My name is Mario!"
// }

// var w = theNameIsMario();

// var y = function sayMammaMia(){
// 	return "Mamma mia!";
// }

// var z = function callingSayMammaMia(){
// 	return y();
// }

// var f = function CallingCallingCallingSayHelloAndSayMammaMia(){
// 	return console.log(x + " " + w + " " + z()); //just console.log at the end: This prints them together;
// }


// // //Example of converting function to string
// // function myFunction(a, b, c) {
// //     return a * b;
// // }
// // var x = myFunction(4, 3);
// // console.log(typeof x + " " + typeof x.toString()) //output: number string



// x = findMax(1, 123, 500, 115, 44, 88, 1290);

// function findMax() {
//     var i;
//     var max = 0;
//     for (i = 0; i < arguments.length; i++) {
//             max += arguments[i];
//     }
//     return max;
// }



//EXAMPLE ALEJANDRO:
// function shownumbs (n){
// 	return n
// }

// var myfavNumber = shownumbs(5)

// // console.log('my fav number is ' + myfavNumber) // output: 5

// function sumMyNumber (n){
// 	return n+10
// }

// var myfavNumberSum = sumMyNumber(myfavNumber)

// // console.log('jeje but this is better ' + myfavNumberSum) // output: 15




// //===N=E=X=T===E=X=E=R=C=I=S=E===

// //a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.

// function myName(name){
// 	console.log('hello ' + name);
// }



// //===N=E=X=T===E=X=E=R=C=I=S=E===

// //b) Intenta retornar los valores en lugar de usar console.log
// //c) Ahora, añade tu edad y concaténala al return

// function myName(name, age){
// 	return 'hello my name is ' + name + " and I am " + age + " years old.";
// }	
// myName('Ezequiel', 28);



// //===N=E=X=T===E=X=E=R=C=I=S=E===

// //d) Iguala tu función a una variable y ejecútala

// var myFunction = function myName2(name, age){
// 	return 'hello my name is ' + name + " and I am " + age + " years old.";
// }	

// myFunction("Ezequiel", 28);



// //===N=E=X=T===E=X=E=R=C=I=S=E===

// //e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados

// var myFunctionName = function myName3(){
// 	return "Ezequiel";
// }	

// var myFunctionAge = function myAge(){
// 	return 28;
// }	

// myFunctionName() + " " + myFunctionAge();



// //===N=E=X=T===E=X=E=R=C=I=S=E===

// //e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.

// var myFunctionName = function myName3(){
// 	return "Ezequiel";
// }	

// var myFunctionAge = function myAge(){
// 	return 28;
// }	

// function myRandomNumber(){return parseInt((Math.random()*10).toFixed());}
// var randomNumber = myRandomNumber()

// myFunctionName() + " " + (myFunctionAge() + randomNumber).toString();



// //===N=E=X=T===E=X=E=R=C=I=S=E===

// //f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.

// var myFunctionName = function myName3(name){
// 	return name;
// }	

// var myFunctionAge = function myAge(age){
// 	return age;
// }	

// function myRandomNumber(){return parseInt((Math.random()*10).toFixed());}
// var randomNumber = myRandomNumber()

// myFunctionName("Ezequiel") + " " + (myFunctionAge(28) + randomNumber).toString();



// //===N=E=X=T===E=X=E=R=C=I=S=E===

// //g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas:

// function myNameG(name){return name;}	
// function myAgeG(age){return age;}

// var x = myNameG("Ezequiel");	
// var y = myAgeG(28);

// function father(){
// 	return x + " " + y;
// }

// father();



// //===N=E=X=T===E=X=E=R=C=I=S=E===

// //h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()

// function myNameH(name){return name;}	
// function myAgeH(age){return age;}
// function myRandomNumberH(){return parseInt((Math.random()*1000000).toFixed());}
// var randomNumber = myRandomNumberH()

// var x = myNameH("Ezequiel");	
// var y = myAgeH(randomNumber);

// function father(){
// 	return x + " " + y;
// }

// father();


// //===N=E=X=T===E=X=E=R=C=I=S=E===

// //i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50


// function myNameI(name){return name;}	

// function myRandomNumberI(){return Math.floor(Math.random() * (50) + 1);}
// var randomNumber = myRandomNumberI()

// function ageFilteringMessage(){
// 	if (randomNumber < 20){			
// 		return " ...are you sure you are Ezequiel?";
// 	}else{
// 		return " ...still to young to retire!"
// 		}
// } 

// var y = myRandomNumberI() + ageFilteringMessage();
// var x = myNameI("Ezequiel");
	
// function father(){
// 	return x + " " + y;
// }

// father();


// //===N=E=X=T===E=X=E=R=C=I=S=E===

// //j) Al return de la función name(), concaténale otro mensaje:

// function myNameI(name){return name + " ...aka SATSU";}	

// function myRandomNumberI(){return Math.floor(Math.random() * (50) + 1);}
// var randomNumber = myRandomNumberI()

// function ageFilteringMessage(){
// 	if (randomNumber < 20){			
// 		return " ...are you sure you are Ezequiel?";
// 	}else{
// 		return " ...still to young to retire!"
// 		}
// } 

// var y = myRandomNumberI() + ageFilteringMessage();
// var x = myNameI("Ezequiel");
	
// function father(){
// 	return x + " " + y;
// }

// father();


// //===N=E=X=T===E=X=E=R=C=I=S=E===

// //k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable:

// function myNameI(name){return name + " ...aka SATSU";}	

// function myRandomNumberI(){return Math.floor(Math.random() * (50) + 1);}
// var randomNumber = myRandomNumberI()

// function ageFilteringMessage(){
// 	if (randomNumber < 20){			
// 		return " ...are you sure you are Ezequiel?";
// 	}else{
// 		return " ...still to young to retire!"
// 		}
// } 

// var y = myRandomNumberI() + ageFilteringMessage();
// var x = myNameI("Ezequiel");
	
// function father(){
// 	return "The first function returns: '" + x + "', The second function returns:  '" + y + "'";
// }

// father();



// //===N=E=X=T===E=X=E=R=C=I=S=E===

//l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada:

// function myNameI(name){return "Ezequiel";}	

// function myRandomNumberI(){return Math.floor(Math.random() * (50) + 1);} 

// function ageFilteringMessage(){ 
	
// 	var randomNumber = myRandomNumberI();

// 	if (myNameI() !== "Ezequiel"){
// 		return "";
// 	}else if (randomNumber < 20){			
// 		return randomNumber + " ...are you sure you are Ezequiel?";
// 	}else{
// 		return randomNumber + " ...still to young to retire!";
// 		}
// } 
// var x = nameFilteringMessage();

// function nameFilteringMessage(){
// 	if (myNameI() === "Ezequiel"){
// 		return "The first function returns: '" + myNameI() + "', The second function returns:  '";
// 	}else{
// 		return "The first function returns: '" + myNameI() + "' ...Wait a second... You are not Ezequiel!!";
// 	}
// }
// var y = ageFilteringMessage();
// console.log(y)
 
// function father(){	
// 	return x + y;
// }

// (father())



// // //===N=E=X=T===E=X=E=R=C=I=S=E===

// // n + ñ) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.


// //Let's define the name and it's messages:
// function myNameI(){return "Ezequiel";}	

// function nameFilteringMessage(){
// 	if (myNameI() === "Ezequiel"){
// 		return "The first function returns: '" + myNameI() + "', The second function returns:  '";
// 	}else{
// 		return "The first function returns: '" + myNameI() + "' ...Wait a second... You are not Ezequiel!!";
// 	}
// }
// var x = nameFilteringMessage();

// //Let's define the age and it's messages:
// function myRandomNumberI(){return Math.floor(Math.random() * (50) + 1);} 
// var randomNumber = myRandomNumberI();

// function ageFilteringMessage(){ 
// 	if (myNameI() !== "Ezequiel"){
// 		return "";
// 	}else if (randomNumber < 20){			
// 		return randomNumber + " ...are you sure you are Ezequiel?";
// 	}else{
// 		return randomNumber + " ...still to young to retire!";
// 	}
// }

// var y = ageFilteringMessage();

// function father(item){	
// 	arr = [];
	
// 	arr.push(myNameI());
// 	arr.push(nameFilteringMessage());
// 	arr.push(randomNumber);
// 	arr.push(ageFilteringMessage());
// 	arr.push(item);
// 	console.log(arr);
// 	return x + y;
// }


// function grandFather(){
// 	return father("...Hello from the dark side!");
// }

// console.log(grandFather())



// p) Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, 
//mostrando un mensaje indicando cual es mayor. El nombre pasado por parámetro también deberá ser random 
//entre una array de nombres, con lo cual, también deberás refactorizar las funciones hijas.


//Let's define the name and it's messages:
function myNameI(name){return name;}	

function nameFilteringMessage(){
	if (myNameI() === "Ezequiel"){
		return "The first function returns: '" + myNameI() + "', The second function returns:  '";
	}else{
		return "The first function returns: '" + myNameI() + "' ...Wait a second... You are not Ezequiel!!";
	}
}
var x = nameFilteringMessage();

//Let's define the age and it's messages:
function myRandomNumberI(){return Math.floor(Math.random() * (50) + 1);} 
var randomNumber = myRandomNumberI();

function ageFilteringMessage(){ 
	if (myNameI() !== "Ezequiel"){
		return "";
	}else if (randomNumber < 20){			
		return randomNumber + " ...are you sure you are Ezequiel?";
	}else{
		return randomNumber + " ...still to young to retire!";
	}
}

var y = ageFilteringMessage();

function father(item1, item2, item3, item4){	
	arr = [];
	
	myNameI("Eze");
	nameFilteringMessage();
	ageFilteringMessage();

	arr.push(myNameI("Eze"));
	arr.push(nameFilteringMessage());
	arr.push(randomNumber);
	arr.push(ageFilteringMessage());
	arr.push(item1);
	arr.push(item2);
	arr.push(item3);
	arr.push(item4);
	// console.log(arr);
	// console.log(item1)
	return x + y;
}


function grandFather(){
	return father("...Hello from the dark side!", "parameter 2", 3, "fourth");
}

grandFather()

//==========================================

doSomething()


function doSomething(){
	console.log("Declare something");
};
var something = function(){
	console.log("express something");
};


something()

// let calc = function(num1, num2, callback){
// 	if (typeof callback === "function"){
// 		return callback(num1, num2);
// 	}else{
// 		return "thats not a function";
// 	}
// };

// console.log(calc(2,7, function(a, b){
// 	return a - b;
// }));



