
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


// lab03
var guess;
var tries = 0;
while(tries < 4 ){
guess = prompt('guess a number, between 1-10!');
if (guess == 4){
    //mark
    mark++
    alert('correct ' + `mark: ${mark}`);
    break;}
else if (guess < 4){
    alert('to low');
    tries++;}
else if (guess > 4){
    alert('too high');
    tries++;}
else{alert('answer only numbers');}
}
if (tries == 4 ){
    alert('you ran out of tries, Answer is 4 ');}


var cities = ['amman', 'damascus', 'dubai', 'alquds', 'beirut', 'cairo'];
var tries1 = 0;

//while (tries1 < 6)  
for (var i = 0; i < 6; i++) {
    var city = prompt('Guess an arabian city(middle eastern)!');
    for (var l = 0; l < cities.length; l++) {
        console.log(tries1);
        if (city === cities[l]) {
            alert('welldone ' + `${l} is the answer value.`);
           // alert(`thanks to you ${name}, your mark is: ${mark} out of 7`);
            tries1= tries1+1;
            break;
        }
    }
    if (tries1 ===1) {
        mark++;
        break;
    }
    if (tries1 === 6){ 
        alert("your tries ran out");
        break;} }
 alert(`thanks to you ${name}, mark: ${mark} out of 7`);
