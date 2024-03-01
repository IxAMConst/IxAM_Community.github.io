
console.log('You have executed software developed by IxAM LLC, IxAM Const thank you for being apart of our journey')
// Function to open a specific tab
function openTab(evt, tabName) {
    // Get all elements with class="tabcontent" and hide them
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
  }
  console.log('Prepartory events Developed by IxAM Const have been execute');
 
  
/*const letters = document.getElementById('changeMe');

const boxOne = document.getElementsByName('boxChange');

boxOne.addEventListener('click', () => {
  if(box.style.background === 'green') {
   box.style.background = 'blue'
} else {
   box.style.background = 'green'
 }
});*/




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

