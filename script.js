// script.js

function animateSquare() {
    var element = document.querySelector('h1');
    element.style.color = 'Black';
    element.style.transition = 'color 1s';

  var square = document.querySelector('.animated-square');

    // Use anime.js for bouncing animation
    anime({
        targets: square,
        translateY: [
            { value: -100, duration: 500, easing: 'easeInOutQuad' },
            { value: 0, duration: 500, easing: 'easeInOutQuad' }
        ],
        loop: true 
    });
}
