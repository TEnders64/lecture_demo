var students = [
    {
        name: "Todd",
        location: "Spokane"
    },
    {
        name: "Preston",
        location: "Cali"
    },
    {
        name: "Blake",
        location: "Pullman"
    }
]

console.log(students[0]);
students[0].location = "Seattle";

function prints1to50(){
    for (var i = 1; i <= 50; i++){
        console.log(i);
    }
}

function prints1toGiven(num){
    for (var i = 1; i <= num; i++){
        console.log(i);
    }
}

function printBackwards(){
    for (var i = 10; i >= 1; i--){
        if (i % 2 == 1){
            console.log(i, "odd");
        }else{
            console.log(i, "even");
        }
    }
}

