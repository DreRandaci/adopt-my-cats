'use strict';

const catsData = require('./ajax');

const buildDomString = (cats) => {
    let domString = '';
    cats.forEach((cat) => {
        console.log('cat in forEach', cat);
        domString += `<div class="cat-card">`;
        domString +=    `<div class="image-container">`;
        domString +=       `<img src="${cat.imageUrl}">`;
        domString +=    `</div>`;
        domString +=    `<div class="description-container">`;
        domString +=       `<h3>${cat.name}</h3>`;
        domString +=       `<p> Color: ${cat.color}</p>`;
        domString +=       `<p> Skills: ${cat.specialSkill}</p>`;
        domString +=       `<p class="disabled-cat"> Toes: ${cat.numberOfToes}</p>`;
        domString +=    `</div>`;
        domString += `</div> `;
    });
    writeToDom(domString);
};

const writeToDom = (domString) => {
    $('#catCardOutput').html(domString);
};

module.exports = {buildDomString};