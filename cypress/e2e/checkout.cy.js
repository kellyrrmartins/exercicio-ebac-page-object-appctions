///<reference types="cypress"/>

const dados = require('../fixtures/dados.json')

const { minhaContaPage } = require('../support/pages')
describe('Checkout', () => {
  beforeEach(() => {
    cy.meuLogin(dados.email, dados.senha)
  })
  it('Deve fazer checkout com sucesso ', () => {
    minhaContaPage.message.should(
      'contain',
      'A partir do painel de controle de sua conta'
    )
  })
})
