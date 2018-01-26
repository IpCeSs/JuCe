$(document).ready(function(){

    $('#bouton').click(function(){
        console.log('dd');

        $('#bouton').after('<div>c est la pause! </div>');
    })

});