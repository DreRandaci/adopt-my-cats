'use strict';

const dom = require('./domHandler');

const sendCatsRequest = (numberOfCats) => {
    let catsData = {};
    $.ajax('https://random-dogs-api.herokuapp.com/cats/' + numberOfCats).done((data) => {
        // console.log(data);
        //NEED: img url/src, cat name, color, skills, toes
        catsData = data.cats;
        console.log('catsData', catsData);
        dom.buildDomString(catsData);
    }).fail((error) => {
        console.log(error);
    });
};

module.exports = {sendCatsRequest};
