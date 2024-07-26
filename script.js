// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('.pageName').innerHTML =
//         "Seu site aqui";
//     document.getElementById('title').innerHTML =
//         "Lorem Ipsum";
// });

document.addEventListener('DOMContentLoaded', function () {
    var hideVideoButton = document.getElementById('hide-video-button');
    var videoContainer = document.querySelector('.video-container');
    var arrow = document.getElementById('arrow-svg');


    if (hideVideoButton && videoContainer && arrow) {
        hideVideoButton.addEventListener('click', function () {
            if (videoContainer.classList.contains('slide-out')) {

                videoContainer.classList.remove('slide-out');
                videoContainer.classList.add('slide-in');
                arrow.classList.remove('rotate-out');
                arrow.classList.add('rotate-in');

            } else {
                // Ocultar o vídeo com animação
                videoContainer.classList.add('slide-out');
                videoContainer.classList.remove('slide-in');
                arrow.classList.remove('rotate-in');
                arrow.classList.add('rotate-out');

            }
        });
    }
});

function adsOnFinalPage() {
    const element = document.getElementById('ads-box-video');
    const videoContainer = document.querySelector('.video-container');
    const videobutton = document.querySelector('#hide-video-button');

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const elementTopo = rect.top + scrollTop;

    const windowHeight = window.innerHeight;

    if (elementTopo <= scrollTop + windowHeight) {
        videoContainer.classList.add('destacado');
        videobutton.style.display = 'none';
    } else {
        videoContainer.classList.remove('destacado');
        videobutton.style.display = 'unset';
    }
}

window.addEventListener('scroll', adsOnFinalPage);

adsOnFinalPage();

document.addEventListener("DOMContentLoaded", function() {
    var title = document.getElementById("title").innerText;
    var position = 0;
    
    function scrollTitle() {
        document.title = title.substring(position) + " " + title.substring(0, position);
        position++;
        if (position >= title.length) position = 0;
        setTimeout(scrollTitle, 200); // Intervalo de tempo ajustado para suavidade
    }
    
    scrollTitle();
});

// haburguer menu

// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
});
