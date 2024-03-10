   /**
     * * important
     * ? maybes?
     * ! yikes
     * TODO:
     *  @param myparameter
    */

// * dev nav span animation
document.addEventListener('DOMContentLoaded', function() {
  let boxOnes = document.querySelectorAll('#boxOne');
  
  boxOnes.forEach(boxOne => {
      boxOne.addEventListener('click', () => {
          toggleBackgroundColor(boxOne);
      });
  });
  
  function toggleBackgroundColor(boxOne) {
      let computedStyle = getComputedStyle(boxOne);
      let backgroundColor = computedStyle.backgroundColor;

      if (backgroundColor === 'rgb(0, 128, 0)') {
          boxOne.style.backgroundColor = 'blue';
      } else {
          boxOne.style.backgroundColor = 'green';
      }
  }
});

const animatedBg = document.getElementById('animated-bg');
const navWidth = document.querySelector('nav').offsetWidth;

let leftPosition = 0;
let direction = 1;

const animatedBackground = () => {
    if (leftPosition >= navWidth - (navWidth * 0)) {
        direction = -1;
    } else if (leftPosition <= 0) {
        direction = 1;
    }
    
    leftPosition += direction;
    animatedBg.style.left = leftPosition + 'px'; // Corrected assignment here
    requestAnimationFrame(animatedBackground);   
}

animatedBackground();

print('IxAM Const animation exe');


//* dev  style color change

let navA = document.querySelectorAll('.tablinks');
// foreach method, when navA is clicked callback
navA.forEach(navA => {
    navA.onclick = function() { //* call back for when the navA is clicked
        let anchorColor = window.getComputedStyle(navA).color;
        if (anchorColor === 'rgb(255, 255, 255)' || computedColor === 'white') {
            navA.style.color = 'black';
        } else {
            navA.style.color = 'white';
        }

    }
});








// * dev heading color change event

let heading = document.querySelector('.develop');
heading.onclick = function() {

    // ? to get the computed style instead of relying on inline styles

    let computedColor = window.getComputedStyle(heading).color;
    if (computedColor === 'rgb(255, 255, 255)' || computedColor === 'white') {
        heading.style.color = 'yellow';
    } else if (computedColor === 'rgb(255, 255, 0)' || computedColor === 'yellow') {
        heading.style.color = 'pink';
    } else if (computedColor === 'rgb(255, 192, 203)' || computedColor ==='pink') {
        heading.style.color = 'purple';
    } else {
        heading.style.color = 'white' 
    }
    console.log('dev heading code exe');
}


// * index underhead color changes



document.addEventListener('DOMContentLoaded', function() {
    let mouseoverElement = document.getElementById('mouseOver');

    if (mouseoverElement) {
        mouseoverElement.addEventListener('mouseover', function() {
            mouseoverElement.style.opacity = 1;
        });

        mouseoverElement.addEventListener('mouseout', function() {
            mouseoverElement.style.opacity = 0;
        });
    } else {
        console.error("Element with ID 'mouseOver' not found.");
    }
});

