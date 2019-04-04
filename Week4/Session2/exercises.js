// Build a function that prints all numbers from 1 to 255
function print1to255(){
    for (var i = 1; i <= 255; i++){
        console.log(i);
    }
}
// Build a function that prints all evens from 1 to 255
function printEvens(){
    for (var i = 2; i <= 254; i+=2){
        console.log(i);
    }
}

// Build a function that accepts an array, iterates
// over the array and prints its values
function printArray(arr){
    for (var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

// Build a function that accepts an array, replacing
// any values evenly divisible by 7 with "Lucky".
// Return the array
function lucky(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 7 == 0){
            arr[i] = "Lucky";
        }
    }
    return arr;
}

// Build a function that accepts an array and two
// additional values (an index and value) that inserts 
// the value into the index given but keeps the array in
// the same order.  E.g. insertAt([1,2,3,4],2,8) should
// alter the array to be [1,2,8,3,4]

function insertAt(arr, index, value){
    for (var i = arr.length-1; i >= index; i--){
        arr[i+1] = arr[i];
    }
    arr[index] = value;
    return arr;
}
console.log(insertAt([1,2,3,4],2,8)); // [1,2,8,3,4]