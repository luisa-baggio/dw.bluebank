document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const showPage = (id) => {
        pages.forEach(page => page.classList.add('hidden'));
        document.getElementById(id).classList.remove('hidden');
    };

    const clientes = JSON.parse(localStorage.getItem('clientes')) || {};

    const salvarClientes = () => {
        localStorage.setItem('clientes', JSON.stringify(clientes));
    };

    const cadastroForm = document.getElementById('cadastroForm');
    cadastroForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const numeroConta = document.getElementById('numeroConta').value;
        const tipoConta = document.getElementById('tipoConta').value;

        if (clientes[nome] && clientes[nome].some(c => c.numeroConta === numeroConta)) {
            alert('Número de conta já existente para este cliente!');
            return;
        }

        const conta = { numeroConta, tipoConta, saldo: 0, saques: 0 };
        if (!clientes[nome]) {
            clientes[nome] = [];
        }
        clientes[nome].push(conta);
        salvarClientes();
        alert('Cliente e conta cadastrados com sucesso!');
        cadastroForm.reset();
    });

    window.showPage = showPage;
});

document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const showPage = (id) => {
        pages.forEach(page => page.classList.add('hidden'));
        document.getElementById(id).classList.remove('hidden');
    };

    // Carrossel de imagens
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    const showSlide = (index) => {
        if (index >= totalSlides) slideIndex = 0;
        if (index < 0) slideIndex = totalSlides - 1;
        const offset = -slideIndex * 100;
        document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
    };

    document.querySelector('.prev').addEventListener('click', () => {
        slideIndex--;
        showSlide(slideIndex);
    });

    document.querySelector('.next').addEventListener('click', () => {
        slideIndex++;
        showSlide(slideIndex);
    });

    // Inicializa o carrossel
    showSlide(slideIndex);

    const clientes = JSON.parse(localStorage.getItem('clientes')) || {};

    const salvarClientes = () => {
        localStorage.setItem('clientes', JSON.stringify(clientes));
    };

    const cadastroForm = document.getElementById('cadastroForm');
    cadastroForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const numeroConta = document.getElementById('numeroConta').value;
        const tipoConta = document.getElementById('tipoConta').value;

        if (clientes[nome] && clientes[nome].some(c => c.numeroConta === numeroConta)) {
            alert('Número de conta já existente para este cliente!');
            return;
        }

        const conta = { numeroConta, tipoConta, saldo: 0, saques: 0 };
        if (!clientes[nome]) {
            clientes[nome] = [];
        }
        clientes[nome].push(conta);
        salvarClientes();
        alert('Cliente e conta cadastrados com sucesso!');
        cadastroForm.reset();
    });

    window.showPage = showPage;
});
const images = document.querySelectorAll('.carousel img');
const prev = document.querySelector('.carousel .prev');
const next = document.querySelector('.carousel .next');
let current = 0;

function updateCarousel() {
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === current) {
            img.classList.add('active');
        }
    });
}

prev.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    updateCarousel();
});

next.addEventListener('click', () => {
    current = (current + 1) % images.length;
    updateCarousel();
});

updateCarousel();
