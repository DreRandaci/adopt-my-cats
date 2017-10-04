'use strict';

const dom = require('./domHandler');

const sendCatsRequest = (numberOfCats) => {
    let catsData = {};
    $.ajax('https://random-dogs-api.herokuapp.com/cats/' + numberOfCats).done((data) => {
        catsData = data.cats;
        dom.buildDomString(catsData);
    }).fail((error) => {
        $('#catCardOutput').html(`<h2 class='text-danger'>${error}</h2>`);  
    });
};

module.exports = {sendCatsRequest};
