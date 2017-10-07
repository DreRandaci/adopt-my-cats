'use strict';

const ajaxRequest = require('./ajax');

$('#btn').click(() => {
    let txt = $('#input').val();
    if ($.isNumeric(txt)) {
        if (txt > 9999) {
            //your number is too big
            window.alert("Holy cats! You're one of those weirdos that has over 10,000 cats, eh? We can't help you");
        } else {
            //fire off the ajax request with the variable as the number of cats
            ajaxRequest.sendCatsRequest(txt);
        }
    } else {
        //prompt to enter a number and not a string
        window.alert("That's not a number broh. Try again broh");  
    }
});

$('#input').keypress((e) => {
    if (e.key === 'Enter') {
       let txt = $('#input').val();
        if ($.isNumeric(txt)) {
            if (txt > 9999) {
                //your number is too big
                window.alert("Holy cats! You're one of those weirdos that has over 10,000 cats, eh? We can't help you");
            } else {
                //fire off the ajax request with the variable as the number of cats
                ajaxRequest.sendCatsRequest(txt);    
            }
        } else {
            //prompt to enter a number and not a string
            window.alert("That's not a number broh. Try again broh");     
        }
    }    
});

$('#disableBtn').click(() => {
    $('.disabled-cat').parent().parent().remove();
});

module.exports = {};