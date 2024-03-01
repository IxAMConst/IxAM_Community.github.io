


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

