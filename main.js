// callback in divided and add a  two number


var a=parseInt(prompt("Enter a number"));

var b=parseInt(prompt("Enter a number"));

function operation(value1,value2,divided){
	
	return divided(value1,value2)
	
	
}
document.write(operation(a,b,divided));

function divided(value1,value2){
	
	return value1*value2
	
}
