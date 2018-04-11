// LESSON 04 - CHALLENGES

//GLOSARY:
// ... ==> Espread Operator
//...theArgs ==> Rest Parameters

//Helpful Links:
// Arguments VS Parameters: https://www.smashingmagazine.com/2016/07/how-to-use-arguments-and-parameters-in-ecmascript-6/


// Mastering Array Iterators ES5 || forEach(), map(), filter():
// https://www.youtube.com/watch?v=RePO4I6PzSA (visto 1 vez)
// https://www.youtube.com/watch?v=rRgD1yVwIvE
// --> mirar videos del curso! 
// --> codeacademy: iterators


// ==========================================================
// ==========================================================
// ==========================================================

// ARRAY METHODS simple EXAMPLES:

// var arr = [1,2,3,4,5];

// // FOR_EACH --> itera sobre array
// arr.forEach(function(obj, index, arr){
// 	arr[index] = obj * obj;
// });
// console.log("forEach array method: \n" + arr)


// // MAP --> devuelve nuevo array modificado por operación:
// var newArray = arr.map(function(obj){
// 	return obj * 2;
// });
// console.log("\nmap array method: \n" + newArray);

// var namesArray = ["Eze", "Ann", "julia", "Hector"]
// var upperCaseArray = namesArray.map(function(obj){
// 	return obj.toUpperCase();
// })
// console.log(upperCaseArray)


// // FILTER --> devuelve items que cumplen condición dentro del array
// var newArray2 = arr.filter(function(obj){
// 	return obj > 10; 
// });
// console.log("\nfilter array method: \n" + newArray2 + "\n");


// // REDUCE -->
// console.log("reduce array method:")
// console.log(arr)
// var sum = arr.reduce(function(sum, obj){
// 	return sum + obj 
// });
// console.log("the arr sum is: " + sum)
// var max = arr.reduce(function(high, val){
// 	return (high > val) ? high : val;
// });
// console.log("The highest value is: " + max)



// // EVERY --> devuelve Verdadero si TODOS cumplen condición en array:
// console.log("\nevery array method")
// if (arr.every(function(obj){
// 	return obj > 10;
// })){
// 	console.log("Todos los números son mayores a 10")
// }else{
// 	console.log("No todos los números son mayores a 10")
// }

// // SOME --> devuelve Verdadero si ALGUNO cumple condición en array:
// console.log("\nsome array method")
// if (arr.some(function(obj){
// 	return obj > 10;
// })){
// 	console.log("Algunos números son mayores a 10")
// }else{
// 	console.log("Ningún número es mayores a 10")
// }




// ==========================================================
// ==========================================================
// ==========================================================


var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
]



var lowCost = flights.filter(function(obj){
	return obj.cost < 200;
})


// a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, 
// muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), 
// además, cada elemento de la pareja deberá estar multiplicada por 2.

// Método MAP:

// function introMap(numArr, multBy){
// 	var table = numArr.map(function(num){
// 		return num * multBy;
// 	})
// 	console.log(table);
// }
// // introMap([1,2,3,4,5,6,7,8,9], 5);


function showNums(){
	var nums = [1,2,3,4,5,6,7,8,9];
	var pairs = [];
		for (var i = 0; i < nums.length; i++){
			nums[i] = nums[i] * 2;
		}
		var arrayPairs = [];
		for (var i = 0; i < nums.length - 1; i++){
			arrayPairs.push(nums.slice(i, i + 2).join(" - "));
			document.write(" - " + (i+1) + "ª pareja ==> " + arrayPairs[i] + "<br>")
		}
}

// a1) La funcion debería aceptar la array a tratar como argumento:


function showNums(){

	var nums1 = arguments;
	var nums = Object.values(nums1)
	var pairs = [];

		for (var i = 0; i < nums.length; i++){
			nums[i] = nums[i] * 2;
		}
		var arrayPairs = [];
		for (var i = 0; i < nums.length - 1; i++){
			arrayPairs.push(nums.slice(i, i + 2).join(" - "));
			pairs.push((i+1) + "ª pareja " + arrayPairs[i])
		}
		return console.log(pairs);
}


 //a2) Pasa también el numero a multiplicar a la función como argumento: 

function showNums(multiplier, ...param){
	var multiplier
	console.log("El número escogido es el: " + multiplier)

	var nums = param;
	var pairs = [];

		for (var i = 0; i < nums.length; i++){
			nums[i] = nums[i] * multiplier;
		}
		var arrayPairs = [];
		for (var i = 0; i < nums.length - 1; i++){
			arrayPairs.push(nums.slice(i, i + 2).join(" - "));
			pairs.push((i+1) + "ª pareja " + arrayPairs[i])
		}

		return console.log(pairs.join("\n"));
}

// showNums(5, 1,2,3,4,5,6,7,8,9);



// a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total:


function showNums(coupleNumber, multiplier, ...param){
	var multiplier;
	console.log("El multiplicador escogido es el: " + multiplier)
	var nums = param;
		if(coupleNumber > param.length){
			nums.length = param.length;
		}else{
			nums.length = coupleNumber + 1;
		}
	console.log("Se quieren mostrar las " + coupleNumber + " primeras parejas.")	
	var pairs = [];

		for (var i = 0; i < nums.length; i++){
			nums[i] = nums[i] * multiplier;
		}
		var arrayPairs = [];
		for (var i = 0; i < nums.length - 1; i++){
			arrayPairs.push(nums.slice(i, i + 2).join(" - "));
			pairs.push((i+1) + "ª pareja " + arrayPairs[i])
		}

		return console.log(pairs.join("\n"));
}

// showNums(20, 3, 1,2,3,4,5,6,7,8,9, 10, 11);


// ==========================================================================

// b1) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci?
// b2) Puedes añadir además, la posición de cada resultado?

function fibonacci(){
	var x = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
	var i = 0;
	while (i < 15){
		if (i > 1){
			 console.log("Número: " + (x[i] = x[i - 1] + x [i - 2]) + " ==> Posición: " + i);	
		}else{
			 console.log("Número: " + x[i] + " ==> Posición: " + i);
		}
		i++;
	}
}



// b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.

function fibonacci(){
	var x = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
	var i = 0;
	var arr = [];
	while (i < 15){
		if (i > 1){
			 arr.push("Número: " + (x[i] = x[i - 1] + x [i - 2]) + " ==> Posición: " + i);	
		}else{
			 arr.push("Número: " + x[i] + " ==> Posición: " + i);
		}
		i++;
	}
	console.log(arr)
}



// b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.

function fibonacci(position){
	var x = [];
	for (var n = 0; n < position; n++){
		x.push(n)
	}
	var i = 0;
	var arr = [];
	while (i < position){
		if (i > 1){
			 arr.push("Número: " + (x[i] = x[i - 1] + x [i - 2]) + " ==> Posición: " + (i + 1));	
		}else{
			 arr.push("Número: " + x[i] + " ==> Posición: " + (i + 1));
		}
		i++;
	}
	console.log(arr)
}

// b5) Ahora, muestra los resultados en forma piramidal:


function fibonacci(position){
	var x = [];
	for (var n = 0; n < position; n++){
		x.push(n)
	}
	var arr = [];
	function increment(){
		for (var i = 0; i < position; i++){
			if (i < 2){
				arr.push(x[i]);				 
			}else{
				arr.push(x[i] = x[i - 1] + x [i - 2]);
			}	 
			console.log(arr.join(" "));
		}			
	}
	function decrement(){
		for (var i = position; i > 1; i--){
			arr.pop();
			console.log(arr.join(" "));
		}
	}

	increment()
	decrement()

}


// c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos 
// en otro diferente con las posiciones de los dígitos cambiadas, creando un nuevo código

// split --> push[0] --> shift



function encrypt1(num){

	var numArr = num.toString().split("");
	var arr = [];

	for (var i = 0; i < numArr.length; i++){
		numArr.push(numArr[0]);
		numArr.shift();	
		arr.push(numArr.join(""));
	}
	return "First number encrypted: " + arr;
}




// c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez
 // y devolver los dos códigos encriptados 
 // (Los dos códigos se deberían encriptar en la misma función)

function encrypt2(num, num2){

	var numArr = num.toString().split("");
	var numArr2 = num2.toString().split("");
	var arr = [];
	var arr2 = [];

	for (var i = 0; i < 4; i++){
		numArr.push(numArr[0]);
		numArr.shift();	
		arr.push(numArr.join(""));

		numArr2.push(numArr2[0]);
		numArr2.shift();	
		arr2.push(numArr2.join(""));
	}
	console.log(arr);
	console.log(arr2);
	return console.log("First number encrypted: " + arr[3] + " ==> " + arr  + "\nSecond number encrypted: " +  arr2[3] + " ==> " + arr2);

}


// c3) Despues de cambiar la posición de los dígitos,
 // multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10.

function encrypter(num, num2){

	var numArr = num.toString().split("");
	var numArr2 = num2.toString().split("");
	var arr = [];
	var arr2 = [];

	for (var i = 0; i < 4; i++){
		numArr.push(numArr[0]);
		numArr.shift();	
		arr.push(Math.floor(numArr.join("") * 0.99999));


		numArr2.push(numArr2[0]);
		numArr2.shift();	
		arr2.push(Math.floor(numArr2.join("") * 0.99999));

	}
	console.log(arr)
	console.log(arr2)
	return console.log("First number encrypted: " + arr  + "\nSecond number encrypted: " + arr2);
}



// c4) Ahora, implementa en otra funcion aparte el decrypter(), 
// que recibirá como argumento un código encriptado 
// (y multiplicado en el apartado c3) y nos devuelva el código desencriptado.

function decrypter(arr, arr2){

	arr = arr[3] + 1;
	console.log(arr);

	arr2 = arr2[3] + 1;
	console.log(arr2);

}


// c5) Añade las dos funciones a la misma función padre,
 // de forma que encripte y desencripte a la vez cuando termine de ejecutarse.

function codeAndDecode(num, num2){

	var numArr = num.toString().split("");
	var numArr2 = num2.toString().split("");
	var arr = [];
	var arr2 = [];

	for (var i = 0; i < 4; i++){
		numArr.push(numArr[0]);
		numArr.shift();	
		arr.push(Math.floor(numArr.join("") * 0.99999));


		numArr2.push(numArr2[0]);
		numArr2.shift();	
		arr2.push(Math.floor(numArr2.join("") * 0.99999));

	}
	 console.log(arr)
	 console.log(arr2)

	decrypter(arr, arr2)

}

// codeAndDecode(5678, 1234)


// c6) El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.

var dictionary = {
    0: ['A', 'K', 'T', 'F', 'O', 'Y'],
    1: ['B', 'L', 'U', 'G', 'P', 'Z'],
    2: ['C', 'M', 'V', 'H', 'Q', '.'],
    3: ['D', 'N', 'W', 'I', 'R', ','],
    4: ['E', 'Ñ', 'X', 'J', 'S', ' '],
    5: ['a', 'k', 't', 'f', 'o', 'y'],
    6: ['b', 'l', 'u', 'g', 'p', 'z'],
    7: ['c', 'm', 'v', 'h', 'q', '-'],
    8: ['d', 'n', 'w', 'i', 'r', '–'],
    9: ['e', 'ñ', 'x', 'j', 's', '_'],
}

function wordToNumber(str){
	var counter = 0;
	var arr = [];
	for (var counter = 0; counter < str.length; counter++){
		for (var i = 0; i < 10; i++){
			for (var j = 0; j < dictionary[i].length; j++){
				if (dictionary[i][j] === str.charAt(counter)){
				arr.push(i);			
				}
			}		
		}
	}	
	return arr.join("");
}
 
function wordsToNumber(str, str2){
	var num = wordToNumber(str)
	var num2 = wordToNumber(str2)

	 codeAndDecode(num, num2);
	
}


// wordsToNumber("abcd", "BCDE");


// d) Crea un programa que use la encriptacion Romana. El programa deberá recibir SKYLAB y retornar SLKAYB:
// SKYLAB --> SLKAYB

function encrypter(word){
  
  var arr1 = word.split("");

  var arr2 = arr1.splice(word.length/2, word.length);
  console.log(arr2);
  console.log(arr1);
  
  var skyArr = [];
  
  for (i=0; i< arr1.length; i++){
    skyArr.push(arr1[i]);
    skyArr.push(arr2[i]);
  }
  console.log(skyArr);   
}

// encrypter("SKYLAB");



// d2)d3)d4) Automatiza el programa:


function encrypter(word){
  
  var arr1 = word.split("");

  var arr2 = arr1.splice(word.length/2, word.length);
  
  var skyArr = [];
  
  for (i=0; i< arr1.length; i++){
    skyArr.push(arr1[i]);
    skyArr.push(arr2[i]);
    
  }
  console.log(skyArr);
  
  var evenArr = [];
  var oddArr = [];
  
  function decrypter(){
    for (var i = 0; i < skyArr.length; i++){
       if (i % 2 === 0){
        evenArr.push(skyArr[i]);
      }else{
        oddArr.push(skyArr[i]);
      }
    }
   return evenArr.concat(oddArr);
  }
  console.log(decrypter());

}

// encrypter("SKYLAB");


// e) Crea un programa al que le introduces un número como parámetro del 0 al 100
//  y devuelve el número transformado a alfabeto normal, es decir:

var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var hundreds = ['', 'one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred',];


function sayItWithWords(digit){
	if (digit < 10){
		console.log(units[digit]);
	}else if (digit >= 10 && digit < 20){
		digit = digit - 10;
		console.log(teens[digit]);
	}else{
		var arr = digit.toString().split(""); 
		console.log(tens[arr[0]] + "-" + units[arr[1]])
	}

}
// sayItWithWords(71)


// e2) Devuelve también los números por los que está formado (aparte del número traducido):


function sayItWithWords2(digit){
	if (digit < 10){
		console.log(units[digit] + ": " + units[digit] + " / " + digit);
	}else if (digit >= 10 && digit < 20){
		unit = digit - 10;
		console.log(teens[unit] + ": " + teens[0]  + " + " + units[unit] + " / " + 10 + " + " + unit)
	}else{
		var arr = digit.toString().split(""); 
		console.log(tens[arr[0]] + "-" + units[arr[1]] + ": " + tens[arr[0]] + " + " + units[arr[1]] + " / " + (arr[0]*10) + " + " + arr[1])

	}

}
// sayItWithWords2(19)


// e3) Cambia tu programa para que acepte cualquier número entre 0 y 1000.



function sayItWithWords3(digit){
	if (digit < 10){
		console.log(units[digit] + ": " + units[digit] + " / " + digit);
	}else if (digit >= 10 && digit < 20){
		var unit = digit - 10;
		console.log(teens[unit] + ": " + teens[0]  + " + " + units[unit] + " / " + 10 + " + " + unit);
	}else if (digit >= 20 && digit < 100){
		var arr = digit.toString().split(""); 
		console.log(tens[arr[0]] + "-" + units[arr[1]] + ": " + tens[arr[0]] + " + " + units[arr[1]] + " / " + (arr[0]*10) + " + " + arr[1]);
	}else if (digit >= 100 && digit < 1000){
		var arr = digit.toString().split("");
		console.log(hundreds[arr[0]] + " " + tens[arr[1]] + "-" + units[arr[2]] + ": " + hundreds[arr[0]] + " + " + tens[arr[1]] + " + " + units[arr[2]] + " / " + arr[0]*100  + " + " + arr[1]*10 + " + " + arr[2])
	}
}

// sayItWithWords3(543);


// f) Recibiendo el siguiente texto por parámetro a tu función... :


var longString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."

function latinText(text){
	text2 = text.replace(/[.]/ig, ",").replace(/[,]/ig, "").replace(/dolor/ig, "potato").replace(/lorem/ig, "tomato").replace(/labor/ig, "cucumber").replace(/consequatur/ig, "garlic").replace(/ipsum/ig, "onion");

	console.log(text2);
}

// latinText(longString);


// f1) Añade una funcionalidad que cuente cuantos cambios/coincidencias ha encontrado de cada palabra,
 // y te los muestre de una forma amigable para el usuario

function latinText(text){
	console.log("there are " + text.match(/[.]/ig).length + " matches of the symbol ==> " + ".");
	console.log("there are " + text.match(/[,]/ig).length + " matches of the symbol ==> " + ",");
	console.log("there are " + text.match(/dolor/ig).length + " matches of the word ==> " + "dolor");
	console.log("there are " + text.match(/lorem/ig).length + " matches of the word ==> " + "lorem");
	console.log("there are " + text.match(/labor/ig).length + " matches of the word ==> " + "labor");
	console.log("there are " + text.match(/consequatur/ig).length + " matches of the word ==> " + "consequatur");
	console.log("there are " + text.match(/ipsum/ig).length + " matches of the word ==> " + "ipsum");
	console.log("\n\n\n" + "======================" + "\n\n\n");

	text2 = text.replace(/[.]/ig, ",").replace(/[,]/ig, "").replace(/dolor/ig, "potato").replace(/lorem/ig, "tomato").replace(/labor/ig, "cucumber").replace(/consequatur/ig, "garlic").replace(/ipsum/ig, "onion");

	return console.log(text2);
}

// latinText(longString);

