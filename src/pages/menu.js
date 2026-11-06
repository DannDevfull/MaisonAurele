const menuItems = [
    {
        name: "Seleção Maison",
        image: "IMGs/Prato2Combo.webp",
        alt: "Prato combo",
        description: "Combo de quatro bowls com proteínas grelhadas, arroz, legumes e acompanhamentos variados, servido em louça artesanal.",
        price: "R$ 139,00",
    },
    // basicamente, estou criando objetos que estão dentro de um array.
    {
        name: "Salmão Aurèle",
        image: "IMGs/Prato1.webp",
        alt: "Prato de salmão",
        description: "Filé de salmão selado sobre risoto cremoso de ervilha, cenouras glaceadas, brotos frescos e redução de balsâmico.",
        price: "R$ 89,00",
    },
    {
        name: "Bife Bordeaux",
        image: "IMGs/Prato4.webp",
        alt: "Bife com acompanhamentos",
        description: "Corte nobre com osso, grelhado e finalizado com redução de vinho tinto, acompanhado de brócolis e cenoura.",
        price: "R$ 124,90",
    },
    {
        name: "Toast Rústico Maison",
        image: "IMGs/Prato3.webp",
        alt: "Toast rústico",
        description: "Pão de fermentação natural tostado, recheio cremoso, pimentão assado e folhas de rúcula, servido sobre tábua de madeira.",
        price: "R$ 42,90",
    },
    {
        name: "Curry Cremoso de Frango",
        image: "IMGs/img-gallery/curry-de-frango-cremoso.webp",
        alt: "Curry de frango",
        description: "Frango marinado e grelhado em molho de curry aveludado, finalizado com coentro fresco e acompanhado de pão artesanal.",
        price: "R$ 68,90",
    },
    {
        name: "Bife Chorizo",
        image: "IMGs/fundo-principal.webp",
        alt: "Bife Grelhado",
        description: "Bife com cortes nobres argentinos ou uruguaios grelhados na chapa ou na brasa",
        price: "R$ 102,90",
    },
];


const menuCategory = [
    {
        name: "Burger Aurèle",
        image: "IMGs/img-gallery/cheeseburger-com-batatas-fritas.webp",
        alt: "Hamburguer com Fritas",
        description: "Hambúrguer artesanal em pão brioche com gergelim, queijo derretido e molho especial, acompanhado de batatas fritas crocantes.",
        price: "R$ 54,90"
    },
    {
        name: "Pizza Artesanal da Casa",
        image: "IMGs/img-gallery/pizza-artesanal-com-ervas.webp",
        alt: "Pizza Artesanal",
        description: "Massa fina e crocante assada em formato alongado, com cobertura temperada, ervas frescas, limão e molho de iogurte.",
        price: "R$ 59,90",
    },
];

const share =[
    {
        name: "Trio de Burgers Maison",
        image: "IMGs/img-gallery/hamburgueres-com-batatas-fritas.webp",
        alt: "Combo Hamburguer com Fritas",
        description: "Três mini-hambúrgueres artesanais com queijo e vegetais frescos, servidos em tábua com batatas fritas e molhos.",
        price: "R$ 98,90"
    },
    {
        name: "Tábua Brasa Maison Aurèle",
        image: "IMGs/img-gallery/churrasco-na-brasa.webp",
        alt: "Churrasco em grande escala",
        description: "Seleção de carnes grelhadas na brasa, servida com batatas rústicas e legumes grelhados, ideal para dividir à mesa.",
        price: "R$ 189,90"
    },
];

const desserts = [
    {
        name: "Croissant de Amêndoas",
        image: "IMGs/img-gallery/croissants-de-amendoa.webp",
        alt: "Croissant de Amêndoas",
        description: "Croissant folhado e dourado, recheado e coberto com lascas de amêndoas. Servido em porção individual.",
        price: "R$ 18,90",
    },
    {
        name: "Sobremesas e Cafés",
        image: "IMGs/img-gallery/cafe-com-fatia-de-bolo.webp",
        alt: "Café com Bolo",
        description: "Fatia de bolo caseiro de massa marmorizada com cobertura dourada e crocante, acompanhada de café coado na hora.",
        price: "R$ 24,90",
    },
    {
        name: "Bolinhos Grelhados",
        image: "IMGs/aperitivo.webp",
        alt: "Bolinhos Grelhados",
        description: "Bolinhos Grelhados com seu recheio interno contendo queijo e presunto.",
        price: "R$ 16,90",
    }
];

export function renderMenuPage(){
    // O map é capaz de produzir um card por objeto.
    // Um objeto agrupa propriedades relacionadas; um array os guarda em lista; um map() trasnforma cada item de uma lista
    // A cada interação, o map devolve um string de card
    // o .join("") juntas as strings sem separador
    const cards = menuItems.map((item) => `
        <article class = "cards">
            <img src = "${item.image}" alt = "${item.alt}">
            <h3>${item.name}</h3>
            <p class = "t-descrição">${item.description}</p>
            <p>${item.price}</p>
        </article>
`).join("");

    const lanches = menuCategory.map((item) => `
        <article class = "cards">
            <img src = "${item.image}" alt = "${item.alt}">
            <h3>${item.name}</h3>
            <p class = "t-descrição">${item.description}</p>
            <p>${item.price}</p>
        </article>
`).join("");
 
    const Toshare = share.map((item) => `
        <article class = "cards">
            <img src = "${item.image}" alt = "${item.alt}">
            <h3>${item.name}</h3>
            <p class = "t-descrição">${item.description}</p>
            <p>${item.price}</p>
        </article>
`).join("");

    const Todesserts = desserts.map((item) => `
        <article class = "cards">
            <img src = "${item.image}" alt = "${item.alt}">
            <h3>${item.name}</h3>
            <p class = "t-descrição">${item.description}</p>
            <p>${item.price}</p>
        </article>
`).join("");



return `
    <section class="brevecardapio responsive">
            <div class="cardapio heading">
                <h2 class="titleN2">Nosso Cardápio</h2>
                <div class="line"></div>
                <p>Conheça alguns pratos da Maison Aurèle</p>
            </div>

            <div class="categoria">
                <p>Pratos Principais</p>
            </div>
            <div class="fourcards" id="ItensCard">${cards}</div>

            <div class="categoria">
                <p>Entradas e lanches</p>
            </div>
            <div class="fourcards" id="ItensCard">${lanches}</div>

            <div class="categoria">
                <p>Para compartilhar</p>
            </div>
            <div class="fourcards" id="ItensCard">${Toshare}</div>


            <div class="categoria">
                <p>Sobremesas e Cafés</p>
            </div>
            <div class="fourcards" id="ItensCard">${Todesserts}</div>
        </section>

    `;
    // {item.name} é uma interpolação: o valor da propriedade entra na template literal.
    // template literal é composta por crases, podendo ocupar várias linhas e conter marcação
};