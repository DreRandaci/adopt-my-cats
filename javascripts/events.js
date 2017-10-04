'use strict';

const ajaxRequest = require('./ajax');

$('#btn').click(() => {
    let txt = $('#input').val();
    if ($.isNumeric(txt)) {
        if (txt > 9999) {
            //your number is too big
            console.log('that number is too girthy');
        } else {
            //fire off the ajax request with the variable as the number of cats
            ajaxRequest.sendCatsRequest(txt);
        }
    } else {
        //prompt to enter a number and not a string
        console.log('thats not a number ya mook');    
    }
});

$('#input').keypress((e) => {
    if (e.key === 'Enter') {
       let txt = $('#input').val();
        if ($.isNumeric(txt)) {
            if (txt > 9999) {
                //your number is too big
                console.log('that number is too girthy');
            } else {
                //fire off the ajax request with the variable as the number of cats
                ajaxRequest.sendCatsRequest(txt);
            }
        } else {
            //prompt to enter a number and not a string
            console.log('thats not a number ya mook');    
        }
    }    
});

module.exports = {};