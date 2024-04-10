//* import { getRandomColor } from './script/clothing_script.js';

/**
 * * important
 * ? maybes?
 * ! yikes
 * TODO:
 *  @param myparameter
 */

// * heading color changes
let headingTitles = document.querySelectorAll("h1");

headingTitles.forEach((heading) => {
  heading.addEventListener("mouseover", () => {
    let headingComputed = window.getComputedStyle(heading).color;
    if (headingComputed === "rgb(0, 0, 0)" || headingComputed === "black") {
      heading.style.color = "red";
      console.log("Color changed to red by IxAM");
    } else {
      heading.style.color = "black";
      console.log("Color changed to black by IxAM");
    }
  });
});

// * stops scrolling right about the discord <div>
window.addEventListener("scroll", function () {
  let body = document.body;
  let scrolling = window.scrollY || document.documentElement.scrollyTop;

  if (scrolling > 500) {
    body.style.backgroundAttachment = "scroll";
  } else {
    body.style.backgroundAttachment = "fixed";
  }
  console.log('scroll stopped at correct height by IxAM');
});


function changeColor () {
  const colors = ['black', 'red', 'yellow'];
  const lettering = document.querySelectorAll('body');

  let currentIndex = 0;

  setInterval(() => {
    lettering.style.color = colors[currentIndex]; // Apply the current color to the innerHTML
    currentIndex = (currentIndex + 1) % colors.length; // Increment the index and loop back to 0 when it reaches the end of the array
  }, 4000); // Change color every 4 seconds (4000 milliseconds)
}
// Call the function to start changing colors

changeColor();