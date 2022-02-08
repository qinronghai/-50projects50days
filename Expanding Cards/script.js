// Initialize for the first image;
document.querySelector('.active').firstElementChild.style.transition = 'none';
document.querySelector('.active').firstElementChild.style.opacity = '1';


let container = document.querySelector('.container');

container.addEventListener('click', function (event) {
    let panel = event.target;
    // After mouse click, get the previous elem that contains the 'active' class.
    let previousActivated = document.querySelector('.active');

    if (panel.className != 'panel') return;
    
    // Set <h3> style: in order to the effect of Gradually show. 
    previousActivated.firstElementChild.style.opacity = "0";
    previousActivated.firstElementChild.style.visibility = 'hidden';

    // Remove the  PreviousActivated's 'active' class.
    previousActivated.classList.remove('active');

    // Adds the 'active' class to the current mouse click element.
    panel.classList.add('active'); 

    // Restores the <h3> text style under the currently clicked element.
    panel.firstElementChild.style.visibility = 'visible';
    setTimeout(() => {
        panel.firstElementChild.style.opacity = "1";
    }, 500);

})