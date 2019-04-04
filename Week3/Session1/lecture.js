var x = 5.5;
var myName = "Scott";
var everythingIsAwesome = true;
var nums = [5, 7, -1, 10, 13];

console.log(nums[3]);
console.log(nums.length);

var ghost = nums[3];
nums[3] = nums[4];
nums[4] = ghost;

console.log(nums);
console.log(ghost);


// var myInfo = ["Todd", "Enders", 34, "Spokane", "WA", function(){ console.log("hello")}]

// console.log(myInfo[2]);

// var myInfoObj = {
//     firstName: "Todd",
//     lastName: "Enders",
//     age: 34,
//     city: "Spokane",
//     state: "WA",
//     favoriteSaying: function(){ console.log("hello")}
// }

// console.log(myInfoObj.age)
// myInfoObj.favoriteSaying();