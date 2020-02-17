
'use strict';

var name = prompt('what is your name?');
console.log('hello ' + name);
alert('Hello ' + name);

var myName = prompt('Do you know my name?(Yes/no)');
console.log(myName);

switch (myName.toLowerCase()) {
    case 'yes':
    case 'y':
        console.log("yeah, it's Ahmad ");
        alert("yeah, it's Ahmad ");
        break;
    case 'no':
    case 'n':
        console.log("well, it's Ahmad Nice to meet you ", name);
        alert("well, it's Ahmad Nice to meet you ", name);
}


var paris = prompt('Have you ever been to paris?!');
console.log(paris);

switch (paris.toLowerCase()) {
    case 'yes':
    case 'y':
        console.log("luckly I havn't. ");
        alert("luckly I havn't.");
        break;
    case 'no':
    case 'n':
        console.log("Rihgt, Obviously(0_0)");
        alert("Rihgt, Obviously(0_0)");
}

var pop = prompt("do you like pop music?!");

switch (pop.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("Correct!");
        break;
    case 'no':
    case 'n':
        alert("Wrong, I do like it.");
}

var nancy = prompt("Do you love Nancy Ajram? ha!");

switch (nancy.toLowerCase()) {
    case 'yes':
    case 'y':
        console.log(" yupppy, who dosent!. ");
        alert("yupppy, who doesn't");
        break;
    case 'no':
    case 'n':
        console.log("oopsy.not righty!");
        alert("oopsy.not righty!");
}

var goal = prompt("Is one of your goals is to get new Stockings?");
switch (nancy.toLowerCase()) {
    case 'yes':
    case 'y':
        console.log(" what a dumb question is that of course no ");
        alert("what a dumb question is that, of course no!!!");
        break;
    case 'no':
    case 'n':
        console.log(" hhhh- right!");
        alert("hhhh- right!");
}