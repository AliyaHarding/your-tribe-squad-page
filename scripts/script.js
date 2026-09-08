const circle = document.querySelector("#circle");

const cards = document.querySelectorAll(".card");


const totalCards = cards.length;


/* Same size as .circle in CSS */

const circleSize = 3600;


/* Distance of the cards from the center */

const radius = 1600;


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

    The angle is stored in a CSS variable instead of
    directly in "transform" so the hover zoom in style.css
    can add a scale() on top of it without overwriting
    the rotation.
    */

    card.style.setProperty("--rotate", angle + "deg");

});