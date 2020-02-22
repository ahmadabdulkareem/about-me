
'use strict';

var name = prompt('what is your name?');
alert('Hello ' + name);

var mark = 0;
var myName = prompt('Do you know my name?(Yes/no)');
switch (myName.toLowerCase()) {
    case 'yes':
    case 'y':

        mark++;
        alert('yeah, it is Ahmad ' + `,...mark: ${mark}`);
        break;
    case 'no':
    case 'n':
        alert("well, it's Ahmad Nice to meet you " + name + ` ...mark: ${mark}`);
        break;
    default:
        alert("Answer Only Yes or no");
}


var paris = prompt("Have I ever been to paris?!");

switch (paris.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("luckly I havn't.!! " + ` ...mark: ${mark}`);
        break;
    case 'no':
    case 'n':
        mark++;
        alert('Rihgt, Obviously(0~0)  ' + ` ...mark: ${mark}`);
        break;
    default:
        alert("Answer Only Yes or no");
}

var pop = prompt("do you thing that I like pop music?!");

switch (pop.toLowerCase()) {
    case 'yes':
    case 'y':
        mark++;
        alert('Correct! ' + ` ...mark: ${mark}`);
        break;
    case 'no':
    case 'n':
        alert("Wrong, I do like it. " + ` ...mark: ${mark}`);
        break;
    default:
        alert("Answer Only Yes or no");
}

var nancy = prompt("Do I love Nancy Ajram? ha!");

switch (nancy.toLowerCase()) {
    case 'yes':
    case 'y':
        mark++;
        alert('yupy, who does not ' + ` ...mark: ${mark}`);
        break;
    case 'no':
    case 'n':
        alert("oopsy.not righty! " + `...mark: ${mark}`);
        break;
    default:
        alert("Answer Only Yes or no");
}

var goal = prompt("Is one of my goals to visit the Space?");

switch (goal.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("I love space, but no! " + `...mark: ${mark}`);
        break;
    case 'no':
    case 'n':
        mark++;
        alert('Right! ' + ` ...mark: ${mark}`);
        break;
    default:
        alert("Answer Only Yes or no");
}
alert(` Thank you ${name} for visiting, you're much welcomed. ` + `...mark: ${mark}/5 for now`);


var guess;
var tries = 0;
while (tries < 4) {
    guess = prompt('guess a number, between 1-10!');
    if (guess == 4) {
        mark++
        alert('correct ' + `mark: ${mark}`);
        break;
    }
    else if (guess < 4) {
        alert('to low');
        tries++;
    }
    else if (guess > 4) {
        alert('too high');
        tries++;
    }
    else { alert('answer only numbers 1-10!'); }
}
if (tries == 4) {
    alert('you ran out of tries, Answer is 4 ');
}


var cities = ['amman', 'damascus', 'dubai', 'alquds', 'beirut', 'cairo'];
var tries1 = 0;
for (var i = 0; i < 6; i++) {
    var city = prompt('Guess an arabian city(middle eastern)!');
    for (var l = 0; l < cities.length; l++) {
        if (city === cities[l]) {
            alert('welldone ' + `${l} is the value of your answer.`);
            tries1 = tries1 + 1;
            break;
        }
    }
    if (tries1 === 1) {
        mark++;
        break;
    }
    if (tries1 === 6) {
        alert(`thanks to you ${name}, your mark is: ${mark} out of 7 ` + 'all answers: Amman, Damascus, Dudai, Alquds, Beirut, Cairo');
        break;
    }
}
alert(`thanks to you ${name}, your mark is: ${mark} out of 7` + 'all answers: Amman, Damascus, Dudai, Alquds, Beirut, Cairo');
