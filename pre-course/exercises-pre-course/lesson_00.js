
//d) Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola:
/*
var EzequielBL = {name: 'Ezequiel', age: 28};
console.log(EzequielBL)


//e) Ahora utiliza el array que has creado anteriormente para recorrerlo y mostrar una a una todas las posiciones del array.

var EzequielBL = ['Ezequiel', 'Burgos', 28];
for (var i = 0; i < EzequielBL.length; i++){
	console.log(EzequielBL[i]);
}


//f) Crea una estructura condicional que imprima el número mayor entre dos números.

var a = 12;
var b = 15;
if (a > b){
	console.log(a);
}else{
	console.log(b);
}


//f1) Crea otra condicion else if para contemplar la posibilidad de que los dos números sean iguales:

var a = 12;
var b = 12;
if (a > b){
	console.log(a);
}else if(a = b){
	console.log('Son iguales');
}else{
	console.log(b);
}


//g) Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, 
//	esté a la mitad, muestre un mensaje 'We are in the middle of loop'.

var array = [1,2,3,99,5,6, 7];
	for (i = 0; i < array.length; i++){
		if (i == (Math.round(array.length/2 - 1))){
			console.log('We are in the middle of the array');
		}else{
			console.log(array[i]);
		}
	}		


//g1) Declara tu nombre y tu edad dos variables y crea un condicional para, 
// 	en caso de no coincidir con tus datos, mostrar un error

var name = prompt ("Please enter your name");
var age = prompt ("please enter your age");

if (name != "Ezequiel" && age != 28){
	console.log("That is not me");
}else{
	console.log("nice to meet me");
}



//g2) Crea una array, introduce los datos anteriores y unos cuantos más de forma que al recorrer la array,
//	 muestre un mensaje cuando encuentre tus datos.


var arrayEze = ['Ezequiel', 'Burgos', 28, '55kg', '1.72m'];
for (var i = 0; i <= arrayEze.length; i++){
    if (i == (arrayEze.length)){
        console.log('We have found your data!');
        for (var j = 0; j < arrayEze.length; j++){
            console.log(arrayEze[j]);}   
    }
}

*/








