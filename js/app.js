'use strict'


var userName = prompt('What is your name?');
console.log('userName =', userName);
alert('Welcome to the website ' + userName);

var question1 = prompt('Do I like cars?').toLowerCase();
console.log('question1', question1)
if (question1 == 'yes' || question1 == 'y' || question1 == 'Y') {
    alert('You are correct!');
    console.log('You are correct');
} else if (question1 == 'no' || question1 == 'N' || question1 == 'n') {
    alert('You are wrong!');
    console.log('You are wrong');
}


var question2 = prompt('Do I like sports?').toLowerCase();
console.log('question2', question2);
if (question2 == 'yes' || question2 == 'y' || question2 == 'Y') {
    alert('You are correct!');
    console.log('You are correct');
} else if (question2 == 'no' || question2 == 'N' || question2 == 'n') {
    alert('You are wrong!');
    console.log('You are wrong')
}


var question3 = prompt('Do I like swimming?').toLowerCase();
console.log('question3', question3);
if (question3 == 'yes' || question3 == 'y' || question3 == 'Y') {
    alert('You are wrong!');
    console.log('You are wrong');
} else if (question3 == 'no' || question3 == 'n' || question1 == 'N') {
    alert('You are correct!');
    console.log('You are correct')
}

var question4 = prompt('Do I like animals?').toLowerCase();
console.log('question4', question4);
if (question4 == 'yes' || question4 == 'y' || question4 == 'Y') {
    alert('You are correct!');
    console.log('You are correct');
} else if (question4 == 'no' || question4 == 'n' || question4 == 'N') {
    alert('You are wrong!');
    console.log('You are wrong')
}

var question5 = prompt('Do I like studying?').toLowerCase();
console.log('question5', question5);
if (question5 == 'yes' || question5 == 'y' || question5 == 'Y') {
    alert('You are wrong!');
    console.log('You are wrong');
} else if (question5 == 'no' || question1 == 'n' || question1 == 'N') {
    alert('You are correct!');
    console.log('You are correct')
}

alert(' Thank you for looking at my website ' + userName + ', you can find out more about me soon!');