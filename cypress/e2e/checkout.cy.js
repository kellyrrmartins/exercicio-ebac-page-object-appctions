///<reference types="cypress"/>

const dados = require('../fixtures/dados.json')

const { minhaContaPage } = require('../support/pages')
describe('Checkout', () => {
  beforeEach(() => {
    cy.meuLogin(dados.email, dados.senha)
  })
  it('Deve fazer checkout com sucesso ', () => {
    cy.get('a > .hidden-xs').should('contain', 'Welcome')
  })
})
