import { renderHomePage } from "./pages/home.js";
import { renderAboutPage } from "./pages/about.js";
import { renderMenuPage } from "./pages/menu.js";
import { renderGalleryPage } from "./pages/gallery.js";
import { renderContactsPage } from "./pages/contacts.js";

const app = document.querySelector('#app');


const pages = {
    home: {title: "Início", render: renderHomePage},
    about: { title: "Quem Somos", render: renderAboutPage},
    menu: { title: "Cardápio", render:renderMenuPage},
    gallery: { title: "Galeria", render:renderGalleryPage},
    contacts: { title: "Contatos", render:renderContactsPage},
};

function getCurrentRoute(){
    return window.location.hash.replace(/^#\/?/, "");
    // Estou extraindo a rota atual no "Hash" da URL. Removendo possíveis caracteres como # ou /

    //replace(/^#\/?/, ""): Aplica uma Expressão Regular   (Regex) para limpar o início da string:

	// • ^ garante que a busca comece exatamente no início do texto.

	// • # localiza o caractere de jogo da velha.

	// • \/? localiza uma barra / opcional logo após o #.

	// • "" substitui o trecho encontrado por nada, deletando-o.

};


// Renderizar página atual (função)
function renderCurrentPage(){
    const requestedRoute = getCurrentRoute();

    // Usando um operador ternário, verificamos se já exite uma página para a rota pedida. Existindo, use; se não, vá para "home"
    const route = pages[requestedRoute] ? requestedRoute : "home";

    // Acessando o objeto
    const page = pages[route];

    // Renderizanod o conteúdo e exibindo no HTML
    app.innerHTML = page.render();

    // Para cada página renderizada, quero que tenha o título e o nome do restaurante.
    document.title = `${page.title} | Maison Aurèle`;

    // Percorrendo os links de navegação
    // Estou selecionando qualquer elemento que possua esse atributo.
    // Se o link atual corresponder a tela que o leito está, os demais links são removidos
    document.querySelectorAll("[data-route-link]").forEach((link) => {
        if(link.dataset.routelink === route){
            link.setAttribute("aria-current", "page");
        } else{
            link.removeAttribute("aria-current");
        }
    });
    const voltarAoTopo = document.querySelector("#back-home a");
    voltarAoTopo.addEventListener("click", (event) =>{

        // Esse método serve para cancelar a ação padrão que o navegador executa em um determinado evendo  quanto é disparado. Aqui, estamos impedindo que o navegador execute o <a>, ou seja, muda de página. Pois isso, aqui, atrapalha na navegação entre as páginas.
        event.preventDefault();
        window.scrollTo({top: 0, behavior:"smooth"});

    })
};

// Chamando a função
renderCurrentPage();

// criando um evento
window.addEventListener("hashchange", renderCurrentPage);



