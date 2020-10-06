'use strict'
var counter = 0;

var userName = prompt('What is your name?');
console.log('userName =', userName);
alert('Welcome to the website ' + userName);

var question1 = prompt('Do I like cars?').toLowerCase();
console.log('question1', question1)
if (question1 == 'yes' || question1 == 'y' || question1 == 'Y') {
    alert('You are correct!');
    console.log('You are correct');
    counter++;
} else if (question1 == 'no' || question1 == 'N' || question1 == 'n') {
    alert('You are wrong!');
    console.log('You are wrong');
}


var question2 = prompt('Do I like sports?').toLowerCase();
console.log('question2', question2);
if (question2 == 'yes' || question2 == 'y' || question2 == 'Y') {
    alert('You are correct!');
    console.log('You are correct');
    counter++;
} else if (question2 == 'no' || question2 == 'N' || question2 == 'n') {
    alert('You are wrong!');
    console.log('You are wrong')
}


var question3 = prompt('Do I like swimming?').toLowerCase();
console.log('question3', question3);
if (question3 == 'yes' || question3 == 'y' || question3 == 'Y') {
    alert('You are wrong!');
    console.log('You are wrong');
    counter++;
} else if (question3 == 'no' || question3 == 'n' || question1 == 'N') {
    alert('You are correct!');
    console.log('You are correct')
}

var question4 = prompt('Do I like animals?').toLowerCase();
console.log('question4', question4);
if (question4 == 'yes' || question4 == 'y' || question4 == 'Y') {
    alert('You are correct!');
    console.log('You are correct');
    counter++;
} else if (question4 == 'no' || question4 == 'n' || question4 == 'N') {
    alert('You are wrong!');
    console.log('You are wrong')
}

var question5 = prompt('Do I like studying?').toLowerCase();
console.log('question5', question5);
if (question5 == 'yes' || question5 == 'y' || question5 == 'Y') {
    alert('You are wrong!');
    console.log('You are wrong');
    counter++;
} else if (question5 == 'no' || question1 == 'n' || question1 == 'N') {
    alert('You are correct!');
    console.log('You are correct')
}


for (var i = 0; i < 5; i++) {
    var question6 = prompt('Guess a number between 1 and 10');
    console.log('question6');
    if (question6 == 7) {
        alert('You are correct!')
        console.log('You are correct!')
        counter++;
        break;
    } else if (question6 > 7) {
        alert('You are too high!')
        console.log('You are too high!')
    } else if (question6 < 7) {
        alert('You are too low!')
        console.log('You are too low!')
    }
}

var rightanswer = ['ottawa', 'montreal', 'brussels', 'punta cana', 'cape town']

for (var k = 1; k <= 6; k++) {
    var question7 = prompt('What is my favortie city?');
    for (var i = 0; i <= rightanswer.length; i++) {
        console.log(question7);
        if (question7 === rightanswer[i]) {
            alert('You are correct!');
            console.log('You are correct!')
            counter++;
            k = 10
            break;
        }
    }
}


alert('My favoirte cities are Ottawa, Brussels, Punta Cana, Cape Town , Montreal')
alert('You have scored ' + counter);

alert(' Thank you for looking at my website ' + userName + ', you can find out more about me soon!');
