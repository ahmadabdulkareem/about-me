
'use strict';

var name = prompt('what is your name?');
console.log('hello ' + name);
alert('Hello ' + name);
// mark added for lab03
var mark = 0;
var myName = prompt('Do you know my name?(Yes/no)');
switch (myName.toLowerCase()) {
    case 'yes':
    case 'y':
        //mark++
        mark++;
        console.log('yeah, it is ahmad ' + `mark: ${mark}`);
        alert('yeah, it is Ahmad ' + `mark: ${mark}`);
        break;
    case 'no':
    case 'n':

        console.log("well, it's Ahmad Nice to meet you ", name);
        alert("well, it's Ahmad Nice to meet you ", name);
        break;
    default:
        console.log('Answer Only Yes or no');
        alert("Answer Only Yes or no");
}


var paris = prompt("Have I ever been to paris?!");

switch (paris.toLowerCase()) {
    case 'yes':
    case 'y':
        console.log("luckly I havn't.");
        alert("luckly I havn't.");
        break;
    case 'no':
    case 'n':
        //mark
        mark++;

        console.log('Rihgt, Obviously(0_0) ' + `mark: ${mark}`);
        alert('Rihgt, Obviously(0_0) ' + `mark: ${mark}`);
        break;
    default:
        console.log('Answer Only Yes or no');
        alert("Answer Only Yes or no");
}

var pop = prompt("do you thig that I like pop music?!");

switch (pop.toLowerCase()) {
    case 'yes':
    case 'y':
        //mark
        mark++;
        console.log('Correct! ' + `mark: ${mark}`);
        alert('Correct! ' + `mark: ${mark}`);
        break;
    case 'no':
    case 'n':
        console.log("Wrong, I do like it.");
        alert("Wrong, I do like it.");
        break;
    default:
        console.log("Answer Only Yes or no");
        alert("Answer Only Yes or no");
}

var nancy = prompt("Do I love Nancy Ajram? ha!");

switch (nancy.toLowerCase()) {
    case 'yes':
    case 'y':
        //mark
        mark++;
        console.log('yupy, who does not ' + `mark: ${mark}`);
        alert('yupy, who does not ' + `mark: ${mark}`);
        break;
    case 'no':
    case 'n':
        console.log("oopsy.not righty!");
        alert("oopsy.not righty!");
        break;
    default:
        console.log("Answer Only Yes or no");
        alert("Answer Only Yes or no");
}

var goal = prompt("Is one of my goals is to get new Stockings?");

switch (goal.toLowerCase()) {
    case 'yes':
    case 'y':
        console.log("what a dumb question is that, of course no!!!");
        alert("what a dumb question is that, of course no!!!");
        break;
    case 'no':
    case 'n':
        //mark
        mark++;
        console.log('hhhh- right! ' + `mark: ${mark}`);
        alert('hhhh- right! ' + `mark: ${mark}`);
        break;
    default:
        console.log("Answer Only Yes or no");
        alert("Answer Only Yes or no");
}
alert(`hello ${name} thanks for visiting, you're much welcomed. ` + `mark: ${mark}`);

