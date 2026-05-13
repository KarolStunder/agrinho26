// Função para scroll suave ao clicar no botão
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Efeito de mudança de cor no header ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#f9f9f9';
        header.style.padding = '0.5rem 5%';
    } else {
        header.style.background = '#fff';
        header.style.padding = '1rem 5%';
    }
});

// Mensagem de boas-vindas no console (apenas para conferir se o JS carregou)
console.log("Agro Forte: O futuro é sustentável!");