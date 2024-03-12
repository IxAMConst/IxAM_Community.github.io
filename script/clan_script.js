let headingTitles = document.querySelectorAll('.heading');


    heading.onclick = function() {
        let headingComputed = window.getComputedStyle(heading).color;
        if (headingComputed === 'rgb(0, 0, 0)' || headingComputed === 'black') {
            heading.style.color = 'red';
            console.log('Color changed to red by IxAM');
        } else {
            heading.style.color = 'black';
            console.log('Color changed to black by IxAM');
        }
    };
