const locators = {

    Menu:{
       menu: '#gnt-burger',
       soucliente: '#menu-header-login > :nth-child(1) > .gnt-nav-button', 
       ajuda: '#menu-ajuda-sou-cliente-central-ajuda', 
    }, 

    Pergunta: {
        comoativar: 'Como ativar/desbloquear o meu cartão Getnet?'

    }, 
    Resposta: {
        comoativar: '.is-modal-open > .o-modal__content > .o-modal__text > .o-modal__text-content', 
        fechar: '.is-modal-open > .o-modal__content > .o-modal__close'

    }



}

export default locators;