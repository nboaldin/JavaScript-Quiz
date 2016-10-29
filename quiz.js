var correctAnswers = 0;


var answerGuess1 = prompt('What is the name of the liquid that makes up more than 75% of our bodies?');
if (answerGuess1 === 'water' || answerGuess1 === 'Water' || answerGuess1 === 'H2O' || answerGuess1 === 'h2o') {
correctAnswers = 1;
alert('Good Job! Next question...');

}   else {
    alert('Sorry, that is incorrect. Moving on...');
}



var answerGuess2 = prompt('What is the biological process that breaks down molecules into monomers during digestion?');
if (answerGuess2 === 'Hydrolysis' || answerGuess2 === 'hydrolysis') {
correctAnswers += 1  ;
alert('Good Job! Next question...');

}  else {
    alert('Sorry, that is incorrect. Moving on...');
}



var answerGuess3 = prompt('What color is the sky?');
if (answerGuess3 === 'Blue' || answerGuess3 === 'BLUE') {
 correctAnswers += 1;
 alert('Good Job! Next question...');

}   else {
    alert('Sorry, that is incorrect. Moving on...');
}



var answerGuess4 = prompt('How many fingers are on the typical human hand?');
if (answerGuess4 === '5') {
correctAnswers += 1;
alert('Good Job! Next question...');
}   else {
    alert('Sorry, that is incorrect. Moving on...');
}



var answerGuess5 = prompt('How many total eyes does the typical human have?');
if (answerGuess5 === '2') {
correctAnswers += 1;
alert('Great Job! Let us view your score...');
}   else {
  alert('Sorry, that is incorrect. Let us see your score...');
}



if (correctAnswers === 5) {
alert('You recieved the GOLD crown!!!');
document.write('You a class act!');
} else if (correctAnswers === 3 || correctAnswers === 4) {
  alert('You recieved the SILVER crown!!!'); 
  document.write('You pretty good chief!');  
}
else if (correctAnswers === 1 || correctAnswers === 2) {
  alert('You get a BRONZE crown!');
  document.write('You alright, barely!');
}
else {
  alert('You get the crown of NO.');
  document.write('I don\'t know what to say to you.');
}
