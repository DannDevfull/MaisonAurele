const galleryImages = [
    {src: "IMGs/Prato1.webp", alt: "prato de salmão"},
    {src: "IMGs/Prato2Combo.webp", alt: "Combo de quatro bowls"},
    {src: "IMGs/Prato3.webp", alt: "Pão fermentado natural"},
    {src: "IMGs/Prato4.webp", alt: "Bife gralhado"},
    {src: "IMGs/fundo-principal.webp", alt: "Bife"},
    {src: "IMGs/aperitivo.webp", alt: "aperitivos degustativos"},
    {src: "IMGs/img-gallery/pizza-artesanal-com-ervas.webp", alt: "Pizza artesanal"},
    {src: "IMGs/img-gallery/hamburgueres-com-batatas-fritas.webp", alt: "Hamburguer com Fritas"},
    {src: "IMGs/img-gallery/curry-de-frango-cremoso.webp", alt: "Curry de frango"},
    {src: "IMGs/img-gallery/croissants-de-amendoa.webp", alt: "Croissants de Amêndoa"},
    {src: "IMGs/img-gallery/churrasco-na-brasa.webp", alt: "Churrasco em grande escala"},
    {src: "IMGs/img-gallery/cheeseburger-com-batatas-fritas.webp", alt: "ChesseBurger com Fritas"},
    {src: "IMGs/img-gallery/cafe-com-fatia-de-bolo.webp", alt: "Bolo com café"},
];

export function renderGalleryPage(){
    const images = galleryImages.map((image) => `
        <figure class="gallery-card">
            <img src="${image.src}" alt="${image.alt}">
        </figure>
    `).join("");

    
    return `
    
         <section class="gallery-page responsive">
                <div class="heading">
                    <h2 class="titleN2">Galeria</h2>
                    <div class="line"></div>
                    <p>Um pouco dos sabores e do ambiente da Maison Aurèle</p>
                </div>
    
                <div class="gallery-grid" id="gallery">${images}</div>
            </section>
    
        `;
}
