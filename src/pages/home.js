export function renderHomePage(){
    return `
     <section class="hero">
            </section>

            <section class="destaque responsive">
                <div class="heading">
                    <h2 class="titleN2">Destaques</h2>
                    <div class="line"></div>
                    <p>Veja os Destaques desta semana</p>
                </div>

                <div class="cards path" id="column">
                    <div id="img1" class="img-card-food">
                        <img src="IMGs/fundo-principal.webp" alt="Imagens de prato com carne">
                    </div>

                    <div id="img2" class="img-card-food">
                        <img src="IMGs/aperitivo.webp" alt="Imagem de aperitivos ppara degustar">
                    </div>
                    
                    <div id="img3" class="img-card-food" >
                        <h3 id="titleN3">Ambientação</h3>
                        <img src="IMGs/plano-fundo.webp" alt="Ambientação interna de uma restaurante">
                    </div>

                        <article class="txt4">
                            <div class="txt4-content">
                                <h4 id="titleN4">Não nos conhece?</h4>
                                <p id="sobreRestaurante">
                                    Maison Aurèle é um restaurante de cozinha contemporânea que une técnica, ingredientes selecionados e um ambiente acolhedor. Cada prato é pensado para transformar uma refeição em uma experiência memorável, do primeiro olhar à última garfada.
                                </p>
                            </div>

                            <div class="row">
                                <img src="IMGs/SVGs/arrow.svg" alt="Seta curvada">
                                <p id="Us">Conheça mais sobre nós</p>
                            </div>
                            <a href = "#about" id="about-link">Venha conhecer mais sobre o nosso restaurante</a>
                        </article>
                </div>
            </section>

             <section class="brevecardapio">
                <div class="cardapio heading">
                    <h2 class="titleN2">Alguns itens do Cardápio</h2>
                    <div class="line"></div>
                </div>

                <div class="fourcards" id="ItensCard">
            
                    <div class="cards" id="card-1">
                        <img src="IMGs/Prato2Combo.webp" alt="Prato Combo" id="Img-1">
                        <h3>Seleção Maison</h3>
                        <p class="t-descrição">
                            Combo de quatro bowls com proteínas grelhadas, arroz, legumes e acompanhamentos variados, servido em louça artesanal.
                        </p>
                    </div>

                    <div class="cards">
                        <img src="IMGs/Prato1.webp" alt="Prato Tradicional" id="Img-2">
                        
                            <h3>Salmão Aurèle</h3>
                            <p class="t-descrição">
                                Filé de salmão selado sobre risoto cremoso de ervilha, cenouras glaceadas, brotos frescos e redução de balsâmico.
                            </p>
                    </div>

                    <div class="cards">
                        <img src="IMGs/Prato4.webp" alt="Bife" id="Img-3">
                        <h3>Bife Bordeaux</h3>
                        <p class="t-descrição">
                            Corte nobre com osso, grelhado e finalizado com redução de vinho tinto, acompanhado de brócolis e cenoura.
                        </p>
                    </div>

                    <div class="cards" id="Img-4">
                        <img src="IMGs/Prato3.webp" alt="Pão torrado">
                        <h3>Toast Rústico Maison</h3>
                        <p class="t-descrição">
                            Pão de fermentação natural tostado, recheio cremoso, pimentão assado e folhas de rúcula, servido sobre tábua de madeira.
                        </p>
                    </div>

                </div>

                <div class="link">
                    <div class="sub-link" id="linkMenu">
                        <a href="#menu">
                            Veja mais em nosso Cardápio
                        </a>
                    </div>
                </div>
            </section>
        `;
    }



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