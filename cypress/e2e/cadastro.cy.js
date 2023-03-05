/// <reference types="cypress" />

let faker = require('faker')
const dados = require('../fixtures/dados.json')
const { cadastroPage, minhaContaPage } = require('../support/pages')
describe('Cadastro ', () => {
  let email = faker.internet.email()
  beforeEach(() => {
    cy.visit('/minha-conta')
  })
  it('Deve realizar o cadastro na EBAC-Shop ', () => {
    cadastroPage.register(email, dados.senha)
    minhaContaPage.message.should(
      'contain',
      'A partir do painel de controle de sua conta'
    )
  })
})
