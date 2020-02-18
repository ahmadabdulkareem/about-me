
'use strict';

var name = prompt('what is your name?');
alert('Hello ' + name);

var myName = prompt('Do you know my name?(Yes/no)');
switch (myName.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("yeah, it's Ahmad ");
        break;
    case 'no':
    case 'n':
        alert("well, it's Ahmad Nice to meet you ", name);
        break;
    default:
        alert("Answer Only Yes or no");
}


var paris = prompt("Have I ever been to paris?!");

switch (paris.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("luckly I havn't.");
        break;
    case 'no':
    case 'n':
        alert("Rihgt, Obviously(0_0)");
        break;
    default:
        alert("Answer Only Yes or no");
}

var pop = prompt("do you thig that I like pop music?!");

switch (pop.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("Correct!");
        break;
    case 'no':
    case 'n':
        alert("Wrong, I do like it.");
        break;
    default:
        alert("Answer Only Yes or no");
}

var nancy = prompt("Do I love Nancy Ajram? ha!");

switch (nancy.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("yupy, who doesn't");
        break;
    case 'no':
    case 'n':
        alert("oopsy.not righty!");
        break;
    default:
        alert("Answer Only Yes or no");
}

var goal = prompt("Is one of my goals is to get new Stockings?");

switch (goal.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("what a dumb question is that, of course no!!!");
        break;
    case 'no':
    case 'n':
        alert("hhhh- right!");
        break;
    default:
        alert("Answer Only Yes or no");
}
alert(`hello ${ name} thanks for visiting, you're much welcomed.`);