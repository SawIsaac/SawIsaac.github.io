$(document).ready(function(){
    $('#login').click(function(){
        $('.new-member').css('transform','scale(1)')
        $('.new-member').css('transition','.5s')
    });

    $('#dismiss').click(function(){
        $('.new-member').css('transform','scale(0)') 
    });


    $('.review1').click(function(){
        $('#review1').show(this);
        $('.review1').css('display','none')
    })
    $('.reviewrl1').click(function(){
        $('#review1').hide(this);
        $('.review1').show(this);
    })

    $('.review2').click(function(){
        $('#review2').show(this);
        $('.review2').css('display','none')
    })
    $('.reviewrl2').click(function(){
        $('#review2').hide(this);
        $('.review2').show(this);
    })

    // III
    $('.review3').click(function(){
        $('#review3').show(this);
        $('.review3').css('display','none')
    })
    $('.reviewrl3').click(function(){
        $('#review3').hide(this);
        $('.review3').show(this);
    })

    // IV
    $('.review4').click(function(){
        $('#review4').show(this);
        $('.review4').css('display','none')
    })
    $('.reviewrl4').click(function(){
        $('#review4').hide(this);
        $('.review4').show(this);
    })

    // V
    $('.review5').click(function(){
        $('#review5').show(this);
        $('.review5').css('display','none')
    })
    $('.reviewrl5').click(function(){
        $('#review5').hide(this);
        $('.review5').show(this);
    })

    // VI
    $('.review6').click(function(){
        $('#review6').show(this);
        $('.review6').css('display','none')
    })
    $('.reviewrl6').click(function(){
        $('#review6').hide(this);
        $('.review6').show(this);
    })
});
  