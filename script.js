var result;
var operator;

function sum(){
	var number1=parseFloat(document.getElementById("number1").value);
	var number2=parseFloat(document.getElementById("number2").value);
	result=number1+number2;
	document.getElementById("result").innerHTML="The sum of"+number1+"and"+number2+"is"+result+".";
}

function difference(){
	var number1=parseFloat(document.getElementById("number1").value);
	var number2=parseFloat(document.getElementById("number2").value);
	result=number1-number2;
	document.getElementById("result").innerHTML="The difference of"+number1+"and"+number2+"is"+result+".";
}

function product(){
	var number1=parseFloat(document.getElementById("number1").value);
	var number2=parseFloat(document.getElementById("number2").value);
	result=number1*number2;
	document.getElementById("result").innerHTML="The product of"+number1+"and"+number2+"is"+result+".";
}

function quotient(){
	var number1=parseFloat(document.getElementById("number1").value);
	var number2=parseFloat(document.getElementById("number2").value);
	result=number1/number2;
	document.getElementById("result").innerHTML="The quotient of"+number1+"and"+number2+"is"+result+".";
}

function percentage(){
	var number1=parseFloat(document.getElementById("number1").value);
	var number2=parseFloat(document.getElementById("number2").value);
	result=number1/number2 * 100;
	document.getElementById("result").innerHTML="The percentage of"+number1+"and"+number2+"is"+result+".";
}