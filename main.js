// 1. Efeito de Scroll no Navbar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
});

// 2. Scroll Reveal: Faz os textos aparecerem suavemente ao descer
const revealElements = document.querySelectorAll('.reveal');

const scrollReveal = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;

        if (elTop < triggerBottom) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', scrollReveal);

// Disparar uma vez no load para elementos que já estão na tela
window.addEventListener('load', scrollReveal);

// 3. Efeito Parallax Simples no Hero
window.addEventListener('scroll', () => {
    const heroText = document.querySelector('.hero-text');
    let scrollVal = window.scrollY;
    heroText.style.transform = `translateY(${scrollVal * 0.4}px)`;
    heroText.style.opacity = 1 - (scrollVal / 700);
});

// 4. Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuToggle.classList.toggle('is-active');
});

// 5. Simulação de preenchimento das barras de progresso ao chegar nelas
const progressSection = document.getElementById('metas');
let animated = false;

window.addEventListener('scroll', () => {
    const sectionPos = progressSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos && !animated) {
        // As larguras já estão no HTML, aqui poderíamos disparar sons ou outras interações
        animated = true;
        console.log("Metas alcançadas!");
    }
});