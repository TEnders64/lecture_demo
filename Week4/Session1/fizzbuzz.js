// Build a function that prints the numbers 
// from 1 to 50

function oneToFifty(){
    for(var i=1; i <= 50; i++){
        console.log(i);
    }
}

oneToFifty();

// Build a function that prints the numbers
// from 1 to a given number

function oneToGiven(num){
    for (var i=1; i <= num; i++){
        console.log(i);
    }
}

oneToGiven(30);

// Build a function that prints the numbers
// from 10 to 1 and also prints whether the
// number is even or odd
// 10 even
// 9 odd
// 8 even...

function goBackwards(){
    for (var i=10; i >= 1; i--){
        if (i % 2 == 0){
            console.log(i, "even");
        }else{
            console.log(i, "odd");
        }
    }
}

goBackwards();

// Build a function that goes from 1 to a 
// given number and prints the following...
// "Fizz" if the number is divisible by 3
// "Buzz" if the number is divisible by 5
// "FizzBuzz" if the number is divisible by both
// otherwise print just the number itself

function fizzBuzz(num){
    for (var i=1; i <= num; i++){
        if (i % 5 == 0 && i % 3 == 0){
            console.log("FizzBuzz");
        } else if (i % 3 == 0){
            console.log("Fizz");
        } else if (i % 5 == 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(25);
