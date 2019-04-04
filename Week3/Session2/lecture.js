// more on function code flow
function paintTheHouse(color, brush){
    console.log("Painting the house", color, "with a", brush);
    return brush; // toothbrush
}
var result = paintTheHouse("green", "toothbrush");
console.log(result);

// more on conditionals and modulo
function checkIt(num){
    // check the number to see if it's negative
    var flag = false;
    if (num < 0){
        console.log("negative");
        if (num % 3 == 0){
            console.log("evenly divisible by 3");
            flag = true;
        }
    }
    // check the ... if positive
    else if (num > 0){
        console.log("positive");
    }
    // check if it's zero
    else {
        console.log("zero")
    }


    if (flag == true){

    }
}
checkIt(0);


// more on arrays 
function buildOddArray(num){
    var newArray = [];
    for (var i = 1; i <= num; i++){
        if (i % 2 != 0){
            newArray.push(i);
        }
    }
    return newArray;
}
console.log(buildOddArray(12)); // [1,3,5,7,9,11]