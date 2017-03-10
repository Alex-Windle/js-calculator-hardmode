// Grab the value from the DOM
// var zero = document.querySelector('.zero');
// var one = document.querySelector('.one');
// var two = document.querySelector('.two');
// var three = document.querySelector('.three');
// var four = document.querySelector('.four');
// var five = document.querySelector('.five');
// var six = document.querySelector('.six');
// var seven = document.querySelector('.seven');
// var eight = document.querySelector('.eight');
// var nine = document.querySelector('.nine');
// var decimal = document.querySelector('.decimal'); 
// var display = document.querySelector('.display'); 
// var clear = document.querySelector('.clear');
// var add = document.querySelector('.add');
// var subtract = document.querySelector('.subtract');
// var multiply = document.querySelector('.multiply');
// var divide = document.querySelector('.divide');
// var equals = document.querySelector('.equals');

// Refactor
var htmlClasses = ['zero', 'one', 'two', 'three', 'four', 'five', 
'six', 'seven', 'eight', 'nine', 'decimal', 'display', 'clear', 
'add', 'subtract', 'multiply', 'divide', 'equals']; 

var domElements = htmlClasses.map(function(item){
	return `document.querySelector('.${item}')`;
}); 

function enterData(e){
	display.textContent = display.textContent + e.currentTarget.textContent;
}

function calculate (){
	display.textContent = eval(display.textContent);
}

function clearDisplay () {
	display.textContent = ' '; 
}

zero.addEventListener('click', enterData);
one.addEventListener('click', enterData);
two.addEventListener('click', enterData);
three.addEventListener('click', enterData);
four.addEventListener('click', enterData);
five.addEventListener('click', enterData);
six.addEventListener('click', enterData);
seven.addEventListener('click', enterData);
eight.addEventListener('click', enterData);
nine.addEventListener('click', enterData);

decimal.addEventListener('click', enterData);
add.addEventListener('click', enterData);
subtract.addEventListener('click', enterData);
multiply.addEventListener('click', enterData);
divide.addEventListener('click', enterData);
equals.addEventListener('click', calculate);
clear.addEventListener('click', clearDisplay);
