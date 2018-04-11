//Skylab Airlines:

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

//función padre:
function skylabAirlines(){
	//a) Se preguntará por el nombre de usuario y dará la bienvenida:
	// var person = prompt("Please enter your name");
	// if (person != null){
	// 	console.log("Welcome to Skylab Airlines " + person);
	// }	

	//b) El usuario visualizará todos los vuelos disponibles de una forma amigable:
	function friendlyFlightsDisplay(){
		flights.forEach(function(obj){
			if(obj.scale === true) {
				return console.log("El vuelo con origen: " + obj.from + " y destino: " + obj.to + " tiene un coste de " + obj.cost + "€ y presentará escala.");
			}else{
				return console.log("El vuelo con origen: " + obj.from + " y destino: " + obj.to + " tiene un coste de " + obj.cost + "€ y no reliza ninguna escala.");
			}
		})
	}

	//c) A continuación, el usuario verá el coste medio de los vuelos:
	function averageFlightCost(){
		var acc = 0;
		var counter = 0;

		flights.forEach(function(obj){
			acc = acc + obj.cost;
			counter++
		})
		console.log("The average cost of the flights is: " + Math.round(acc/counter));
	}

	//d) También podrá ver cuantos vuelos efectúan escalas:

	function flightsWithScaleCounter(){
		var counter = 0;

		flights.forEach(function (obj){
			if (obj.scale === true) {
				counter++;
			}
		})
		return console.log("Hay un total de " + counter + " vuelos con escala:");
	}

	function flightsWithScaleMessage(){
		flights.forEach(function (obj){
			if (obj.scale === true) {
				return console.log("El vuelo con origen: " + obj.from + " y destino: " + obj.to + ".")
			}
		})
	}

	//e) Sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.

	function showLast5FlightsComplete(){
		
		function showLastFlightsTitle(){
			return console.log("Estos son los últimos vuelos del día: ")
		}

		function showLast5Flights(){
			flights.forEach(function (obj){
				if (obj.id > 4) {
					return console.log("Vuelo con origen: " + obj.from + " y destino: " + obj.to + ".");
				} 
			});
		};

	return console.log(showLastFlightsTitle() + showLast5Flights());

	}
	
	function newLine(){
		console.log("");
		console.log("===S=K=Y=L=A=B===A=I=R=L=I=N=E=S===");
		console.log("");
	}

	//Llamamos a las funciones hijas
	console.log(newLine() + friendlyFlightsDisplay() + newLine() + averageFlightCost() + newLine() + flightsWithScaleCounter() + flightsWithScaleMessage() + newLine() + showLast5FlightsComplete() + newLine());

}

skylabAirlines();










