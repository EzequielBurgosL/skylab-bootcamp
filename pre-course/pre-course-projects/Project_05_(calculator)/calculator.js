// function calculate(){
// 	var n1 = parseInt(document.getElementById("n1").value);
// 	var n2 = parseInt(document.getElementById("n2").value);
// 	var sum = n1 + n2;
// 	var subs = n1 - n2;
// 	var mult = n1 * n2;
// 	var div = n1 / n2;
// 	document.getElementById('results').innerHTML = '<li>' + n1 + ' ' + ' + ' + n2 + ' = ' + sum + '</li>' + '<li>' + n1 + ' ' + ' - ' + n2 + ' = ' + subs + '</li>' + '<li>' + n1 + ' ' + ' * ' + n2 + ' = ' + mult + '</li>' + '<li>' + n1 + ' ' + ' / ' + n2 + ' = ' + div + '</li>';
// }


function insert(num){
	document.form.calculatorScreen.value = document.form.calculatorScreen.value + num;
}

function clean(){
	document.form.calculatorScreen.value = "";
}

function back(){
	var exp = document.form.calculatorScreen.value;
	//a continuación igualamos "exp" a un string "exp" sin el último char
	document.form.calculatorScreen.value = exp.substring(0,exp.length -1); 
}

// https://www.w3schools.com/jsref/jsref_eval.asp
function equal(){
	var exp = document.form.calculatorScreen.value;
	if(exp){
		document.form.calculatorScreen.value = eval(exp);
	}	
}
