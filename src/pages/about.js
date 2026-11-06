export function renderAboutPage(){

    return `
        <section class="about responsive">
                <div class="sobreText heading">
                    <h2 class="titleN2">Sobre</h2>
                    <div class="line"></div>
                    <p id="p">Vamos nos conhecer melhor!</p>
                </div>
                <div class="descrição path">
                    <div class="sub-desc" id="desc">
                        <h3 class="titleN3">MAISON AURÈLE</h3>
                        <p id="p-desc">
                            Maison Aurèle nasceu da convicção de que uma boa refeição vai além do alimento: é um encontro entre pessoas, memórias e sabores. Inspirado na tradição das casas francesas e na riqueza dos ingredientes brasileiros, o restaurante propõe uma cozinha contemporânea, elegante e sem excessos.
                        </p>
                    </div>

                    <div class="card" id="ImgTeam">
                        <img src="IMGs/team.webp" alt="Equipe de um restaurante">
                    </div>
                </div>

                <div class="about-details" id="details-article">
                    <article id="details">
                        <p>
                            Na <span>Maison Aurèle</span>, cada refeição é um convite para descobrir novos sabores. Com uma cozinha contemporânea e aberta a diferentes influências, o restaurante combina ingredientes selecionados, técnicas cuidadosas e criatividade para criar um cardápio diverso, que passeia entre referências sem perder a personalidade.
                        </p>
    
                        <p>
                             O ambiente une elegância e conforto em uma atmosfera moderna, pensada tanto para um jantar especial quanto para um encontro descontraído. Da apresentação dos pratos à recepção atenciosa, cada detalhe contribui para uma experiência acolhedora e marcante.
                        </p>
    
                        <p>
                              Mais do que servir boa comida, a Maison Aurèle celebra o prazer de estar à mesa: <span>
                                um lugar onde diferentes gostos se encontram, a curiosidade é bem-vinda e cada visita pode revelar algo novo.
                              </span>
                        </p>
                    </article>
    
    
                    <div class="cards-article">
    
                        <article class="ambientacao">
                             <img src="IMGs/homeRestaurante.webp" alt="Fundo de um restaurante">
                        </article>
                    
                        <article class="ambientacao">
                            <img src="IMGs/plano-fundo.webp" alt="Fundo de um restaurante">
                        </article>

                    </div>   
                </div>
            </section>

    `;
};

