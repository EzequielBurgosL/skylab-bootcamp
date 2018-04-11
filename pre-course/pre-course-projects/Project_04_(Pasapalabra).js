// PROJECT 04 - PASAPALABRA
//==========================

var questions = [
    { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
    { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
]


// instrucciones y presentación
function presentation(){
	var instructions = confirm("Bienvenido a SkyLab PASAPALABRA, las instrucciones son sencillas:\nHay un total de 27 preguntas, una por letra del abecedario abecedario. Se trata de acertar la palabra que contiene o empieza por dicha letra.\n\nPD: Para salir del juego, sencillamente pulse 'cancelar' cuando se haga cualquiera de las preguntas.")
	var name = prompt("Antes de empezar! indica tu nombre, por favor:");
	while (name == "" || name == null) {
	  name = prompt("Por favor, introduce tu nombre", "");
	}
	if (name){
		alert("Un placer tenerte con nosotros " + name + ", empecemos a jugar! Primera pregunta!");
	}
}

// array con palabras no respondidas:
filteredArr = questions.filter(function(obj){
		return obj.status === 0;
});



function questionsFunc (){
	

	for (var i = 0; i < filteredArr.length; i++){
		// salir del juego si prompt es = a cancelar/false
		alert ("pregunta número: " + (i + 1) + " ==> letra: " + filteredArr[i].letter)
		var oneQuestion = prompt(filteredArr[i].question);
		counter++;
		if (oneQuestion == ""){
			fallos++;
			filteredArr[i].status = -1; //marco la casilla con status negativo 
			alert("meeeec!");
		}else if (!oneQuestion){
			return "exit";
		}else{
			if (oneQuestion === filteredArr[i].answer){
				aciertos++;
				filteredArr[i].status = 1; //marco la casilla con status positivo
				alert("correcto! tienes 1 punto!")		
			}else if (oneQuestion === "pasapalabra"){
				pasapalabra++;
				alert("Ok, siguiente pregunta!")	
			}else{
				fallos++;
				filteredArr[i].status = -1; //marco la casilla con status negativo 
				alert("meeeec!");
			}
		}		
	}
}

// cuantas letras hay en total
var counter = 0;

// cuantas letras han sido pasadas:
var pasapalabra = 0;

// cuantas letras ha acertado en total:
var aciertos = 0;

// cuantas letras ha fallado en total:
var fallos = 0;

function father(){

presentation();

	// condición juego completo:
	while ((aciertos + fallos) < questions.length){
		var x = questionsFunc();
		if (x === "exit"){
			return alert("Hasta la próxima!");
		}else if ((aciertos+fallos) < questions.length){
			filteredArr = questions.filter(function(obj){
				return obj.status === 0;
			});
			alert("Volvemos al principio del rosco!! Aún quedan preguntas por responder!")	
			// questionsFunc();
			questionsFunc(filteredArr);		
		}
	}

	alert("ROSCO COMPLETADO!!");
	alert("La puntuación es la siguiente:\nTotal de aciertos: " + aciertos + "\nTotal de fallos: " + fallos);

}

father();






// =====================================================================

// hay k tener en cuenta si era la primera vivienda del causante (abuelo);
// 1ra vivienda: donde estas empadronado

// se tributa en generalitat con escritura de herencia + DNI (zona franca) y donaciones










