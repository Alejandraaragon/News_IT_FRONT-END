document.querySelector(".btn-menu").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show") /* hace aparecer y desaparecer nuestro sidebar */
})

/* vamos a seleccionar un elemento que tenga como clase ".btn-menu" -- 
vamos a añadir un listener,
cuando se de click va a hacer lo siguiente */

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 300});
ScrollReveal().reveal('.cards-banner', { delay: 300});
ScrollReveal().reveal('.cards-banner-two', { delay: 300});