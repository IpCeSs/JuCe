$(document).ready(function(){

    $('#bouton').click(function(){
        console.log('dd');

        $('#bouton').after('<div>hello world </div>');
    })

});