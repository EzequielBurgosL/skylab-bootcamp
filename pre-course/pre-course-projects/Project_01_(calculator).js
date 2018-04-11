//d) Proyecto calculadora:

//llamamos a función padre
calculator(3,4) 
calculator(3) 
calculator() 
calculator(0,0)
calculator(NaN, 3) 
calculator('Pedro', 0) 
calculator('Pedro')
calculator(12, 'Pedro')

//inicializamos padre:
function calculator(n1, n2){

//Procedimiento e impresión en la consola:
	function noInput(){
		if(typeof (n2 || n1) === typeof 'string'){
			return "Input must be numeric!";
		}else if(n1 || n2 === 0){
			return "";		
		}else if (!n1 && !n2){
			return "Input must be introduced and must be numeric!";
		}else if (typeof n1 === "NaN"){
			return "Input must be numeric!";	
		}else if (typeof n2 === "NaN"){
			return "Input must be numeric!";
		}else{
			return "";
		}			
	}
	function square_single_number(){
		if(typeof (n2 || n1) === typeof 'string'){
			return "";
		}else if(n1 && !n2){
			return [Math.round(Math.sqrt(n1)*10)/10] + "" ;
		}else{
			return "";
		}	
	}		
	function basic_operations(){
		if(typeof (n2 || n1) === typeof 'string'){
			return "";
		}else if (typeof (n1 && n2) === "number"){
			function sum(){return Math.round((n1 + n2)*10)/10;}
			function subs(){return Math.round((n1 - n2)*10)/10;}
			function mult(){return Math.round((n1 * n2)*10)/10;}
			function div(){return Math.round((n1 / n2)*10)/10;}
			return ['[' + sum(n1, n2), subs(n1, n2), mult(n1, n2), div(n1, n2) +']'];
		}else{
			return "";
		}
	};
//llamamos a los hijos:
console.log(noInput() + square_single_number() + basic_operations());

}