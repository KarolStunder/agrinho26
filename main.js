// 1. Contador Regressivo (Countdown)
const dataEvento = new Date("Nov 18, 2026 09:00:00").getTime();

const atualizarCountdown = setInterval(function() {
    const agora = new Date().getTime();
    const distancia = dataEvento - agora;

    // Cálculos de tempo para dias, horas, minutos e segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Inserindo os resultados nos elementos HTML correspondentes
    document.getElementById("days").innerHTML = dias < 10 ? "0" + dias : dias;
    document.getElementById("hours").innerHTML = horas < 10 ? "0" + horas : horas;
    document.getElementById("minutes").innerHTML = minutos < 10 ? "0" + minutos : minutos;
    document.getElementById("seconds").innerHTML = segundos < 10 ? "0" + segundos : segundos;

    // Caso o contador termine
    if (distancia < 0) {
        clearInterval(atualizarCountdown);
        document.getElementById("countdown").innerHTML = "O Evento Já Começou!";
    }
}, 1000);


// 2. Animação de Números Crescentes ao rolar a página (Scroll Event)
const counters = document.querySelectorAll('.counter');
const speed = 100; // Velocidade da contagem (quanto menor, mais rápido)

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + inc;
                setTimeout(updateCount, 25);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
};

// Detectando o scroll para acionar o contador dinâmico apenas quando visível
let disparado = false;
window.addEventListener('scroll', () => {
    const sectionNumeros = document.getElementById('numeros');
    if(sectionNumeros) {
        const position = sectionNumeros.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        
        if(position < screenHeight && !disparado) {
            startCounters();
            disparado = true; // Impede que execute múltiplas vezes ao rolar de volta
        }
    }
});


// 3. Envio de Formulário Interativo
document.getElementById('form-inscricao').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede a página de recarregar
    
    // Capturando dados fictícios
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if(nome && email) {
        // Esconde o formulário e mostra a caixa de sucesso
        this.classList.add('hidden');
        document.getElementById('mensagem-sucesso').classList.remove('hidden');
    }
});