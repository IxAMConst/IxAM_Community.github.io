/**
 * * important
 * ? maybes?
 * ! yikes
 * TODO:
 *  @param myparameter
 */


// * to stop the color change when customers are hovering over viewport
let body = document.querySelector('body');
let backgroundColor = window.getComputedStyle(body).backgroundColor;

body.addEventListener('mouseover', function () {
    if (backgroundColor === 'rgb(255, 255, 255)' || backgroundColor === 'white') {
        body.style.backgroundColor = 'purple';
    } else {
        body.style.backgroundColor = 'pink';
    }
});
console.log('customer hovering exe by IxAM');




//* random color change with transition time in css
function getRandomColor() {
    // Generate random RGB values
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    // Construct the color string
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

setInterval(function() {
    // Set the background color to a random color
    document.body.style.backgroundColor = getRandomColor();
}, 3000); 
console.log('Everything is running smoothly exe by IxAM');