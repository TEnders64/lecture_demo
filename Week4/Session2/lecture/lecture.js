// DOM 
// Document Object Model
console.dir(document);

// document.getElementsByTagName("h1")[0].innerText = "Hello Mojo";


$("button").click(function(){
    $(".target").text("Hello Mojo");
    console.log("hello world");
    $(".target").hide(2000);
})