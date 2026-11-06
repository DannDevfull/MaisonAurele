export function renderContactsPage(){

    return `

        <section class="contacts-page responsive">
            <div class="heading">
                <h2 class="titleN2">Contatos</h2>
                <div class="line"></div>
                <p>Fale com a Maison Aurèle</p>
                <div class="line></div>"
            </div>

            <div class="contact-note">
                <div class="Icons-contacts">
                    <i class="fa-solid fa-message"></i>
                    <i class="fa-solid fa-location"></i>
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div class="hours">
                    <h3 class="location">Horários</h3>
                    <ul>
                        <li> Terça a quinta: • 12h às 15h e 19h às 23h </li>
                        <li>  Sexta e sábado: • 12h às 16h e 19h à 00h   </li>
                        <li>  Domingo • 12h às 17h  </li>
                        <li>  Segunda: • fechado  </li>
                    </ul>
                </div>

                <div class="location">
                      <h3>Onde nos encontrar</h3>
                </div>
                <div class="addresses">
                    <address class="place">
                        Maison Aurèle <br>
                        Rua das Acácias Douradas, 1200, Jardim Aurèle <br>
                        São Paulo, SP, CEP 00000-000
                    </address>

                    <address class="numbers">
                        <div>
                            Celular (WhatsApp):
                            <a href="javascript:void(0);">
                                (11) 99999-9999
                            </a> <br>
                        </div>

                        <div>
                            Fixo (reservas):
                            <a href="javascript:void(0);">
                                (11) 3333-3333
                            </a>
                        </div>
                    </address>

                    <address class="social-icons">
                        <div>
                             <i class="fa-brands fa-instagram"></i><a href="javascript:void(0);">@maisonaurele</a>
                        </div>
                        
                        <div>
                             <i class="fa-brands fa-facebook"></i><a href="javascript:void(0);">/maisonaurele</a>
                        </div>
                    </address>
                </div>
            </div>
        </section>
    
    `

}