$(document).ready(function(){
    $('#login').click(function(){
        $('.new-member').css('transform','scale(1)')
        $('.new-member').css('transition','.5s')
    });

    $('#dismiss').click(function(){
        $('.new-member').css('transform','scale(0)') 
    });
});
  