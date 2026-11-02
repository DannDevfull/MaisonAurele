// Vamos pegar os elementos de nossa página pelo ID.
const hamburguer = document.querySelector('#hamburguer');
const navbar = document.querySelector('#navbar');


// Evento de clique
hamburguer.addEventListener('click', function(){
    // O toggle faz o seguinte --> se tiver a classe active, ele tira; senão tiver, ele coloca.
    hamburguer.classList.toggle('active');
    navbar.classList.toggle('active');
});

