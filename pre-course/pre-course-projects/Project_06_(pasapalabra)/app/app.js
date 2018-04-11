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


var questions = [
    { order: 0, letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { order: 1, letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { order: 2, letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
    { order: 3, letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { order: 4, letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { order: 5, letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { order: 6, letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { order: 7, letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { order: 8, letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    { order: 9, letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { order: 10, letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    { order: 11, letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    { order: 12, letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { order: 13, letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    { order: 14, letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { order: 15, letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { order: 16, letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { order: 17, letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { order: 18, letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    { order: 19, letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { order: 20, letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { order: 21, letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { order: 22, letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { order: 23, letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { order: 24, letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { order: 25, letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { order: 26, letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
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


function startGame(){ //boton 1 inicia la partida
    index = 0
    document.getElementById("questionbox").innerHTML = questions[index].question;
    document.getElementById("aciertos").innerHTML = aciertos;
}


function enter(){
    if (event.keyCode == 13){
        document.getElementById('enter-answer').click();
    }
}

function nextQuestion(){
    if (index === filteredArr.length && ((aciertos + fallos) <  questions.length)){
        index = 0;
        filteredArr = filteredArr.filter(function(obj){
            return obj.status === 0;
        });
        document.getElementById("questionbox").innerHTML = filteredArr[index].question;
        //filter array        
    }else if (index === filteredArr.length && (aciertos + fallos) ===  questions.length){
        document.getElementById("questionbox").innerHTML = "YOU'VE COMPLETED THE GAME!<br>This is your final score:<br>Correct answers: " + aciertos + " / 27<br><br>Press 'Refresh' to restart.";
    }else{
        //muestra siguiente pregunta
        document.getElementById("questionbox").innerHTML = filteredArr[index].question; 
    } 
} 


function coloringAnswers(){

var answer = document.getElementById('answer-input').value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
var colorButton = document.getElementsByClassName("hello")[(filteredArr[index].order)];

    if(answer === filteredArr[index].answer){
        console.log('correct :D');
        colorButton.style.background = "radial-gradient(green, lightgreen)";
        aciertos++;
        filteredArr[index].status = 1;
    }else if (answer === 'pasapalabra'){
        console.log('pasapalabra');
        colorButton.style.background = "radial-gradient(lightblue, #3E7CCD)";
        pasapalabra++; 
    }else{
        console.log('meeeec!');
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

