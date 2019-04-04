$(document).ready(function(){ // <-- callback function
    
    // $('h1').click(function(){
    //     var htmlStr = `
    //         <h1>Hello I'm Here After You</h1>
    //     `
    //     $('div').append(htmlStr);
    // });

    $('body').on('click', 'h1', function(){
        var htmlStr = `
            <h1>Hello I'm Here After You</h1>
        `
        $('div').append(htmlStr);
    })
    
    $('body').on('click', 'h1', function(){
        $(this).css("color", "red");
    })

})