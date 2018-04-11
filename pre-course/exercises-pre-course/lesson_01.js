/*


										 STRINGS
										=========

//a) Puedes contar cuantas letras tiene tu nombre?
nombre = 'Ezequiel Burgos';
console.log(nombre.length);


//b) Añade tu apellido e indica en que posición se encuentra:

nombre = 'Ezequiel Burgos';
console.log(nombre.indexOf(' ') + 1);


//c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.

nombre = 'Ezequiel Burgos Lombardi';
console.log("my name is " + nombre.substr(0, nombre.indexOf(' ')));


//d) Ahora, solo tu apellido.

nombre = 'Ezequiel Burgos';
console.log("my surname is " + nombre.substr(nombre.indexOf(' ') + 1));


//d1) Iguala el resultado a una variable nueva e imprímela por pantalla.

nombre = 'Ezequiel Burgos';
console.log(nombre + ", " + nombre.substr(nombre.indexOf(' ') + 1))


//f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.

surname = "Burgos";
console.log("my last name is" + surname.toUpperCase());


//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.
var nombre = "Ezequiel Burgos";
var awesomeness = nombre + " is awesome!";
console.log(awesomeness);

//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?

var nombre = "Ezequiel Burgos";
console.log(nombre.charAt(0) + ". " + nombre.charAt(nombre.indexOf(' ') + 1) + '.');


							 			  ARRAYS
										=========

//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"

var nombre = ['Ezequiel', 'Burgos', 'Lombardi'];
var fullName = nombre.join("");
var result = Array.from(fullName).join("/");
console.log(result);

//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"

var nombre = ['Ezequiel', 'Burgos', 'Lombardi'];
var result = nombre[1].split("").join("|");
console.log(result);


//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)

var nombre = ['Ezequiel', 'Burgos', 'Lombardi'];
var nombreJunto = nombre.join("")
var result = ""

for (i = 0; i < nombreJunto.length; i++){
	if(i == 0){
		result = (i + 1) + "º " + nombreJunto[i];
	}else{
		result = result + ", " + (i + 1) + "º " + nombreJunto[i];
	}
}
console.log(result);


//d)Como en el ejercicio anterior, pero seleccionando tu apellido:

var nombre = ['Ezequiel', 'Burgos', 'Lombardi'];
var nombreJunto = nombre.join(" ")
var result = ""

for (i = (nombreJunto.indexOf(" ") + 1); i < nombreJunto.lastIndexOf(" "); i++){
	if(i == nombreJunto.indexOf(" ") + 1){
		result = i + "º " + nombreJunto[i];
	}else{
		result = result + ", " + i + "º " + nombreJunto[i];
	}
}
console.log(result);

//e) Puedes indicarme las iniciales de tu nombre y apellido?

var nombre = ['Ezequiel', 'Burgos', 'Lombardi'];
console.log(nombre[0].charAt(0) + ". " + nombre[1].charAt(0) + ". " + nombre[2].charAt(0) + ".")


//f) Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.

var nombre = ['Ezequiel', 'Burgos', 'Lombardi'];
nombre.push("28");
console.log("My name is " + nombre[0] + " and I'm " + nombre[3] + " years old.")

//g)Imprime todo el array con ", ":

var ezequiel = ['Ezequiel', 'Burgos', 'Lombardi', 28];
nombre.push("Barcelona");
var myCityAdd = " ";
	for (i = 0; i < ezequiel.length; i++){
		if (i == 0){
			myCityAdd = ezequiel[i];
		}else{
			myCityAdd = myCityAdd + ", " + ezequiel[i];	
		}
	}
console.log(myCityAdd);



var ezequiel = ['Ezequiel', 'Burgos', 'Lombardi', 28, 'Barcelona'];
var myCityDelete = " ";
for (i = 0; i < ezequiel.length - 1; i++){
		if (i == 0){
			myCityDelete = ezequiel[i];
		}else{
			myCityDelete = myCityDelete + ", " + ezequiel[i];	
		}
	}
console.log(myCityDelete);


//k) 
var ezequiel = ['Ezequiel', 'Burgos', 'Lombardi', 28, 'Barcelona'];
ezequiel.splice(1, 1, "pera", "perra");
console.log(ezequiel);


//l1)

var numeros = [0,1,2,3,4,5,6,7,8,9,10];
var num = 3;
var multByNum = numeros.map(function(item, indice, array){
	return item + " " + item * num
});
console.log(multByNum);


//m) Ordena los números y devuélvelos en orden inverso:
var numeros = [2,5,4,3,1,7,6,9,8,10,0];
console.log(numeros.sort(function(a,b){return a-b}).reverse());


//n)
//Ordenamos las letras alfabéticamente y hacemos bucle que ++ cada vez que se repite letra

var fruits = ["apple", "orange", "apple", "banana"];
var fruits_letter_array = fruits.join("").split("").sort();
var currentLetter = "";
var counter = 0;

for(var i = 0; i < fruits_letter_array.length; i++){
    if(fruits_letter_array[i] === currentLetter){
    	counter++;
  	}else{
    	
    	//una vez se acaba la letra que se repite, el contador es mayor a 0
    	//por tanto: escribimos el mensaje, igualamos el contador a 1
    	//y cambiamos currentLetter por la letra actual:

    	if(counter > 0){
    		console.log('The letter ' + currentLetter + " appears: " + counter);
    	}

    	//en la primera letra nos encontramos currentLetter es "null" y el contador cero 
    	//pasamos el contador a 1 
    	//y la letra actual es igual que la que muestra el array en posición [0]
    	counter = 1;
    	currentLetter = fruits_letter_array[i];
    	
  }
}

//n1)Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras

var nombre = ["Ezequiel", "Burgos", "Lombardi"];
var nombre_junto = nombre.join(" ").toLowerCase();
var nombre_letras_array = nombre.join("").toLowerCase().split("").sort();
var letraActual = nombre_letras_array[0];
var contadorLetras = 0;
var nombreSinDuplicados = [];
var letras_duplicadas_eliminar = [];

for(var i = 0; i <= nombre_letras_array.length; i++){
    if(nombre_letras_array[i] === letraActual){
    	contadorLetras++;
    	if (contadorLetras > 1){
    		letras_duplicadas_eliminar.push(letraActual);
    	}
  	}else{
    	if(contadorLetras < 2){
    		nombreSinDuplicados.push(letraActual);

    	}
    	contadorLetras = 1;
    	letraActual = nombre_letras_array[i];    	
  }
}

console.log(letras_duplicadas_eliminar);
letras_duplicadas_eliminar.forEach(function(letra_duplicada_actual){

	//nombre_junto = replaceAll(nombre_junto, letra_duplicada_actual, "");
	nombre_junto = nombre_junto.replace(new RegExp(letra_duplicada_actual, 'g'), "");
});

console.log('Ezequiel Burgos Lombardi, the letters => ' +  nombreSinDuplicados.join(", ")
 + ' are not repeated, the name is: => ' + nombre_junto);
/*
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

 

//       NUMBERS
//		==========

//c) Ahora, declara tu hora y muéstrala redondeada.

var d = new Date()
var hours = d.getHours();
const minutes = d.getMinutes();

//para redondear minutos:
//minutes = 60 * Math.round(minutes / 60)

function myHours(){
	return (minutes > 30) ? hours = hours + 1 : hours;
	}
console.log(myHours())



*/
