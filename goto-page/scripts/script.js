const circle = document.querySelector("#circle");

const cards = document.querySelectorAll(".card");


const totalCards = cards.length;


/* Same size as .circle in CSS */

const circleSize = 750;


/* Distance of the cards from the center */
// const radius = circle.dataset.radius
const radius = 550;


/* Space between each card */

const angleBetweenCards = 360 / totalCards;


/*
Shift the cards slightly so there isn't
one card perfectly in the center.
*/

const startingAngle = angleBetweenCards / 2;



cards.forEach(function(card, index) {

    const angle =
        index * angleBetweenCards + startingAngle;


    const radians =
        angle * Math.PI / 180;


    const x =
        circleSize / 2 +
        radius * Math.sin(radians);


    const y =
        circleSize / 2 -
        radius * Math.cos(radians);


    card.style.left = x + "px";

    card.style.top = y + "px";


    /*
    Makes every card lean along
    the curve of the circle.
    */

    card.style.transform =
        "translate(-50%, -50%) rotate(" +
        angle +
        "deg)";

});