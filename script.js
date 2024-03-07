


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
console.log('style changed execution, IxAM Const')

const animatedBg = document.getElementById('animated-bg');
const navWidth = document.querySelector('nav').offsetWidth;

    let leftPosition = 0;
    let direction = 1;

    const animatedBackground = () => {
            if (leftPosition >= navWidth - (navWidth * 0.12)) {
            direction = -1;
        } else if (leftPosition <= 0) {
            direction = 1;
        }
         leftPosition += direction;
         animatedBg.style.left = leftPosition = 'px';
         requestAnimationFrame(animatedBackground);   
    }
    animatedBackground();

    console.log('let me cook, IxAM Const')