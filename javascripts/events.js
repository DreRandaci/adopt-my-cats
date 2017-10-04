'use strict';

const ajaxRequest = require('./ajax');

$('#btn').click(() => {
    let txt = $('#input').val();
    if ($.isNumeric(txt)) {
        if (txt > 9999) {
            //your number is too big
            $('#catCardOutput').html(`<h2 class='text-danger'>Holy cats! You're one of those weirdos that has over 10,000 cats, eh? We can't help you</h2>`);
        } else {
            //fire off the ajax request with the variable as the number of cats
            ajaxRequest.sendCatsRequest(txt);
        }
    } else {
        //prompt to enter a number and not a string
        $('#catCardOutput').html(`<h2 class='text-danger'>That's not a number broh. Try again broh</h2>`);  
    }
});

$('#input').keypress((e) => {
    if (e.key === 'Enter') {
       let txt = $('#input').val();
        if ($.isNumeric(txt)) {
            if (txt > 9999) {
                //your number is too big
                $('#catCardOutput').html(`<h2 class='text-danger'>Holy cats! You're one of those weirdos that has over 10,000 cats, eh? We can't help you</h2>`);
            } else {
                //fire off the ajax request with the variable as the number of cats
                ajaxRequest.sendCatsRequest(txt);    
            }
        } else {
            //prompt to enter a number and not a string
            $('#catCardOutput').html(`<h2 class='text-danger'>That's not a number broh. Try again broh</h2>`);     
        }
    }    
});

$('#disableBtn').click(() => {
    $('.disabled-cat').parent().parent().hide();
});

module.exports = {};