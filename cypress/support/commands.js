import loc from '../support/locators'
import data from '../fixtures/example.json'


Cypress.Commands.add('modalativacao', () => {
    cy.get(loc.Menu.menu).click()
    cy.get(loc.Menu.soucliente).click()
    cy.get(loc.Menu.ajuda).click()
    cy.contains(loc.Pergunta.comoativar).click()
    cy.get(loc.Resposta.comoativar)
    .contains(data.modalativar)
    cy.get(loc.Resposta.fechar).click()
  });