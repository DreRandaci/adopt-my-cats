'use strict';

const buildDomString = (cats) => {
    hideElements();
    $('#disableBtn').show();
    let domString = '';
    cats.forEach((cat) => {
        domString += `<div class="cat-card col-md-4">`;
        domString +=    `<div class="thumbnail">`;
        domString +=        `<div class="image-container">`;
        domString +=            `<img src="${cat.imageUrl}">`;
        domString +=        `</div>`;
        domString +=        `<div class="description-container">`;
        domString +=            `<h3>${cat.name}</h3>`;
        domString +=            `<p> Color: ${cat.color}</p>`;
        domString +=            `<p> Skills: ${cat.specialSkill}</p>`;
        if (cat.numberOfToes < 10) {
            domString +=        `<p class="disabled-cat"> Toes: ${cat.numberOfToes}</p>`;
        } else {
            domString +=        `<p> Toes: ${cat.numberOfToes}</p>`;  
        }
        domString +=        `</div>`;
        domString +=    `</div>`;
        domString += `</div> `;
    });
    writeToDom(domString);
};

const writeToDom = (domString) => {
    $('#catCardOutput').html(domString);
};

const hideElements = () => {
    $('#btn').hide();
    $('#input').hide();
};

module.exports = {buildDomString};