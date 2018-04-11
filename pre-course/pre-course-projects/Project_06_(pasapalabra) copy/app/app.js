// https://stackoverflow.com/questions/16613809/how-to-create-circles-around-a-circle-with-css-javascript

    // var div = 360 / 27; //cantidad de circulitos
    // var radius = 210; //radio de los circulitos
    // var parentdiv = document.getElementById('parentdiv'); //
    // var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2);  //assumes parent is square
    // var offsetToChildCenter = 20; //posición del círculo padre
    // var totalOffset = offsetToParentCenter - offsetToChildCenter; //
    
    // for (var i = 1; i <= 27; ++i){
    //     var childdiv = document.createElement('div');
    //     childdiv.className = 'div2';
    //     childdiv.style.position = 'absolute';

    //     var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
    //     var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
    //     childdiv.style.top = (y + totalOffset).toString() + "px";
    //     childdiv.style.left = (x + totalOffset).toString() + "px";
    //     parentdiv.appendChild(childdiv);
    // }


// ansNum => qué opción de pregunta elegimos
// status => pregunta respondida o no respondida 
var questions = [
    { order: 0, letter: "a", answer: ["abducir", "arma"], status: 0, question: (["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", "CON LA A. Instrumento o máquina que sirve para atacar o defenderse"])},
    { order: 1, letter: "b", answer: ["bingo", "bañarse"], status: 0, question: (["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", "CON LA B. Entrar en el agua para lavarse, para nadar o jugar"]) },
    { order: 2, letter: "c", answer: ["churumbel", "cazadora"], status: 0, question: (["CON LA C. Niño, crío, bebé", "CON LA C. Ropa de abrigo que cubre desde los hombros a la cintura."]) },
    { order: 3, letter: "d", answer: ["diarrea", "debil"], status: 0, question: (["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", "Que tiene poca fuerza, poco vigor o poca resistencia."]) },
    { order: 4, letter: "e", answer: ["ectoplasma", "edificio"], status: 0, question: (["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", "Lugar que se usa para viviendas, oficinas, colegios, etc."]) },
    { order: 5, letter: "f", answer: ["facil", "futuro"], status: 0, question: (["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", "Tiempo que viene después."]) },
    { order: 6, letter: "g", answer: ["galaxia", "grua"], status: 0, question: (["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", "Máquina para levantar objetos pesados y moverlos de un lugar a otro."]) },
    { order: 7, letter: "h", answer: ["harakiri", "hundir"], status: 0, question: (["CON LA H. Suicidio ritual japonés por desentrañamiento", "Ir abajo dentro del agua."]) },
    { order: 8, letter: "i", answer: ["iglesia", "isla"], status: 0, question: (["CON LA I. Templo cristiano", "Territorio que está rodeado de agua por todas partes."]) },
    { order: 9, letter: "j", answer: ["jabali", "jugador"], status: 0, question: (["CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba", "Persona que juega."]) },
    { order: 10, letter: "k", answer: ["kamikaze", "kilo"], status: 0, question: (["CON LA K. Persona que se juega la vida realizando una acción temeraria", "Medida para pesar (equivale a mil gramos)."]) },
    { order: 11, letter: "l", answer: ["licantropo", "lata"], status: 0, question: (["CON LA L. Hombre lobo", "Envase de metal."]) },
    { order: 12, letter: "m", answer: ["misantropo", "manzana"], status: 0, question: (["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", "Fruta de piel fina, amarilla, verde o roja, de carne blanca y dura."]) },
    { order: 13, letter: "n", answer: ["necedad", "nunca"], status: 0, question: (["CON LA N. Demostración de poca inteligencia", "Ningún día o en ningún tiempo."]) },
    { order: 14, letter: "ñ", answer: ["señal", "cigüeña"], status: 0, question: (["CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.", "CON LA Ñ. Ave que trae los hijos al nacer."]) },
    { order: 15, letter: "o", answer: ["orco", "oveja"], status: 0, question: (["CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", "Animal doméstico que tiene el cuerpo cubierto de lana."]) },
    { order: 16, letter: "p", answer: ["protoss", "pasear"], status: 0, question: (["CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft", "Andar por placer o para hacer ejercicio."]) },
    { order: 17, letter: "q", answer: ["queso", "queso"], status: 0, question: (["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", "Alimento sólido preparado con leche. "]) },
    { order: 18, letter: "r", answer: ["raton", "resumen"], status: 0, question: (["CON LA R. Roedor", "Pocas palabras que  cuentan una historia más larga."]) },
    { order: 19, letter: "s", answer: ["stackoverflow", "sandalia"], status: 0, question: (["CON LA S. Comunidad salvadora de todo desarrollador informático", "Calzado que no tapa todo el pie."]) },
    { order: 20, letter: "t", answer: ["terminator", "techo"], status: 0, question: (["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984", "Parte de una habitación que está arriba."]) },
    { order: 21, letter: "u", answer: ["unamuno", "urgente"], status: 0, question: (["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914", "Que no puede esperar."]) },
    { order: 22, letter: "v", answer: ["vikingos", "veloz"], status: 0, question: (["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", "Que es muy rápido."]) },
    { order: 23, letter: "w", answer: ["sandwich", "wallace"], status: 0, question: (["CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso", "CON LA W. Apellido del líder escocés medieval por excelencia."]) },
    { order: 24, letter: "x", answer: ["botox", "xena"], status: 0, question: (["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética", "CON LA X. La princesa guerrera"]) },
    { order: 25, letter: "y", answer: ["peyote", "yegua"], status: 0, question: (["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos", "Hembra del caballo."]) },
    { order: 26, letter: "z", answer: ["zen", "zarpar"], status: 0, question: (["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional", "Empezar a navegar."]) },
]


// ======================================================================================================================================================


// cuantas letras han sido pasadas:
var pasapalabra = 0;

// cuantas letras ha acertado en total:
var aciertos = 0;

// cuantas letras ha fallado en total:
var fallos = 0;

// Array con preguntas no realizadas o pasadas:
filteredArr = questions.filter(function(obj){
        return obj.status === 0;
});

// contador que será el índice del filteredArr
var index = 0;

//array random que indica la opción de pregunta que escoje el programa:
var randomArr = arrayGenerator();

function arrayGenerator(){
    var arr = []; //generamos un "unique random numbers array"
    while(arr.length < 27){
        var randomnumber = Math.floor(Math.random()*2);
        arr[arr.length] = randomnumber;
    }
    return arr;
}


function startGame(){ //boton 1 inicia la partida
    // temporizador!
    function timer(){

        var sec = 150;
        var timer = setInterval(function(){
            document.getElementById('timerDisplay').innerHTML = sec;
            sec--;
            if (sec < 0) {
                document.getElementById('timerDisplay').innerHTML = "Game is over!";
                document.getElementById("questionbox").innerHTML = "YOU'VE COMPLETED THE GAME!<br>This is your final score:<br>Correct answers: " + aciertos + " / 27<br><br>Press 'Refresh' to restart.";
                document.getElementById("answer-input").value = "";
                clearInterval(timer);
            }else if (index === filteredArr.length && (aciertos + fallos) ===  questions.length){
                document.getElementById('timerDisplay').innerHTML = "Game is over!";
            }
        }, 100);
    }
    timer();

    index = 0;                                        // filtramos  array, elegimos fila, columna y opción de pregunta/respuesta
    document.getElementById("questionbox").innerHTML = filteredArr[index].question[randomArr[(filteredArr[index].order)]];
    document.getElementById("aciertos").innerHTML = aciertos;
}

// te permite usar enter para introducir las respuestas
function enter(){
    if (event.keyCode == 13){
        document.getElementById('enter-answer').click();
    }
}


function nextQuestion(){
    // si llegamos al final y hemos dejado varias en pasapalabra (reempezamos solo con preguntas pasadas)
    if (index === filteredArr.length && ((aciertos + fallos) <  questions.length)){
        index = 0;
        filteredArr = filteredArr.filter(function(obj){
            return obj.status === 0;
        });                                              // filtramos  array, elegimos fila, columna y opción de pregunta/respuesta
        document.getElementById("questionbox").innerHTML = filteredArr[index].question[randomArr[(filteredArr[index].order)]];
        //filter array        
    }else if (index === filteredArr.length && (aciertos + fallos) ===  questions.length){
        document.getElementById("questionbox").innerHTML = "YOU'VE COMPLETED THE GAME!<br>This is your final score:<br>Correct answers: " + aciertos + " / 27<br><br>Press 'Refresh' to restart.";
    }else{
        //muestra siguiente pregunta
        document.getElementById("questionbox").innerHTML = filteredArr[index].question[randomArr[(filteredArr[index].order)]]; 
    } 
} 


function coloringAnswers(){

var answer = document.getElementById('answer-input').value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
var colorButton = document.getElementsByClassName("hello")[(filteredArr[index].order)];

    if(answer === filteredArr[index].answer[randomArr[(filteredArr[index].order)]]){
        colorButton.style.background = "radial-gradient(green, lightgreen)";
        aciertos++;
        filteredArr[index].status = 1;
    }else if (answer === 'pasapalabra'){
        colorButton.style.background = "radial-gradient(lightblue, #3E7CCD)";
        pasapalabra++; 
    }else{
        colorButton.style.background = "radial-gradient(#99030a, red)";
        fallos++;
        filteredArr[index].status = -1;
    }

index++;

}

function printStatsAndClear(){
    //imprime los aciertos y fallos
    document.getElementById("stats").innerHTML = "Aciertos: " + aciertos + "</br>Fallos: " + fallos + "</br>Pasapalabra: " + pasapalabra + "</br>Total de preguntas: " + questions.length; 
    //borra la respuesta anterior
    document.getElementById("answer-input").value = "";
}

function boton2(){
    coloringAnswers();
    printStatsAndClear();
    nextQuestion();
}
