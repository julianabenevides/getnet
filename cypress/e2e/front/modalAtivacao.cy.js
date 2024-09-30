/// <reference types="cypress" />

import '../../support/commands'

describe('Automação GetNet', () => {

  before ('acessar site', () => {
    cy.visit('https://site.getnet.com.br/');
  })
 
    it('Verifica a abertura modal de ativar cartão', () => {
  
      cy.modalativacao()
    
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.log(err);
      return false;
    })
  });
  