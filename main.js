// Grab the value from the DOM
var equals = document.querySelector('.equals');
var display = document.querySelector('.display'); 
var clear = document.querySelector('.clear');
// Refactor 
var htmlClasses = ['zero', 'one', 'two', 'three', 'four', 'five', 
'six', 'seven', 'eight', 'nine', 'decimal', 'display', 'clear', 
'add', 'subtract', 'multiply', 'divide', 'equals']; 

var domElements = htmlClasses.map(function(item) {
	return `document.querySelector('.${item}')`;
}); 

function enterData(e){
	display.textContent = display.textContent + e.currentTarget.textContent;
}

// * Refactor - do not use eval()
function calculate (){
	display.textContent = eval(display.textContent); 
}

function clearDisplay () {
	display.textContent = ' '; 
}

// Event listeners * Refactor using event delegation
var buttons = document.querySelectorAll('.btn');

buttons.forEach(function(btn) {
	btn.addEventListener('click', enterData);
});

equals.addEventListener('click', calculate);
clear.addEventListener('click', clearDisplay);