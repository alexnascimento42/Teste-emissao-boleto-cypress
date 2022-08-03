/// <reference types="Cypress"/>

describe('Geração de boleto', () => {

    before(function () {

        cy.viewport(1440, 900)
        cy.visit('http://www.hapvida.com.br/site/')
    })

    it('Página inicial', () => {

        cy.get(':nth-child(4) > .css-menu-principal').click()
        cy.get('.ui-button-text').click()
    })

    it('Login usuário', () => {

        cy.get('#pEmail').type('alexnascimento43@yahoo.com.br')
        cy.get('#pSenha').type('08134')
        cy.get('#tabs-1 > .ui-dialog-buttonset > [type="submit"] > .botao').click()
    })

})