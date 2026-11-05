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

return `
    <section class="brevecardapio responsive">
            <div class="cardapio heading">
                <h2 class="titleN2">Nosso Cardápio</h2>
                <div class="line"></div>
                <p>Conheça alguns pratos da Maison Aurèle</p>
            </div>

            <div class="fourcards" id="ItensCard">${cards}</div>
        </section>

    `;
    // {item.name} é uma interpolação: o valor da propriedade entra na template literal.
    // template literal é composta por crases, podendo ocupar várias linhas e conter marcação
};