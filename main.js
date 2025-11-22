const egg = document.querySelector('.egg1'); // for update skin
const audio = document.querySelector('audio');

const count_left = document.querySelector('.count_left'); // for update counter
const card_egg = document.querySelector('.card_egg');

const music_button = document.getElementById('music_button'); // music button
const container = document.querySelector('.container'); // main container

const preloader = document.querySelector('.loader-container'); // preolder

const countElement = document.getElementById('count');

const images = [
        'img/egg/egg0.png',
        'img/egg/egg1.png',
        'img/egg/egg2.png',
        'img/egg/egg3.png',
        'img/egg/egg4.png'
];

const backgroundImage = [
        'img/background/img0.jpg',
        'img/background/img1.jpg',
        'img/background/img2.jpg',
        'img/background/img3.jpg'
];




let clicks = 0

function toggleMusic() {
    if (audio.paused) {
        audio.currentTime = 0;
        audio.play();
        music_button.innerHTML = 'Stop Sound';

    } else {
        audio.pause();
        music_button.innerHTML = 'Play Sound';
    }
}



music_button.addEventListener('click', function() {
    toggleMusic()


})

function handleInteraction(e) {
    e.preventDefault();
    clicks += 1;
    countElement.innerHTML = `${clicks}`;

    if (clicks < 10) {
        egg.src = images[0];
        count_left.innerHTML = `${10 - clicks} left`;


    } else if (clicks < 50) {
        egg.src = images[1];
        count_left.innerHTML = `${50 - clicks} left`;


    } else if (clicks < 100) {
        egg.src = images[2];
        count_left.innerHTML = `${100 - clicks} left`;


    } else if (clicks < 150) {
        egg.src = images[3];
        count_left.innerHTML = `${150 - clicks} left`


    } else {
        egg.src = images[4];
        count_left.innerHTML = 'This is the last egg<br>Your second name Sigma';
    }

    anime({
       targets: card_egg,
       scale: 1.01,
        duration: 50,
        easing: 'linear',
        complete: function() {
           anime({
               targets: card_egg,
               scale: 1,
                duration: 50,
               easing: 'linear',
           });
       }
   });
}



// ХЭНДЛЕРЫ!
card_egg.addEventListener('click', handleInteraction);
card_egg.addEventListener('touchstart', handleInteraction);





function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgroundImage.length);
    const bgImageUrl = `url(${backgroundImage[randomIndex]})`;
    document.body.style.backgroundImage = bgImageUrl;
    preloader.style.backgroundImage = bgImageUrl;
}


// при загрузки страницы
window.onload = function() {
    setTimeout(function() {
        container.classList.add('content-visible');
        preloader.remove();
    }, 2000);

    setRandomBackground();
};
