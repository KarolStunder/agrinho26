// --- Efeito de Contagem Regressiva / Animação de Números ---
const counters = document.querySelectorAll('.counter');
const speed = 100; // Quanto menor, mais rápido a animação

const startCounting = (counter) => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Incremento calculado baseado na velocidade
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
};

// Intersection Observer para disparar os números apenas quando aparecerem na tela
const observerOptions = {
    threshold: 0.5 // Dispara quando 50% da seção estiver visível
};

const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const currentCounter = entry.target;
            startCounting(currentCounter);
            observer.unobserve(currentCounter); // Para de observar após rodar uma vez
        }
    });
}, observerOptions);

counters.forEach(counter => statsObserver.observe(counter));


// --- Alternador de Modo Escuro / Claro (Dark Mode) ---
const themeBtn = document.getElementById('theme-btn');
const currentTheme = localStorage.getItem('theme');

// Verifica se o usuário já tinha uma preferência salva
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

themeBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});