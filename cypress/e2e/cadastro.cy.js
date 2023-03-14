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
    cy.intercept('POST', '/minha-conta').as('novo-cadastro')
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(dados.senha)
    cy.get(':nth-child(4) > .button').click()

    cy.wait('@novo-cadastro').its('response.statusCode').should('eq', 302)
    cy.get('@novo-cadastro').then(res => {
      expect(res.response.body).to.eq('')
    })
    minhaContaPage.message.should(
      'contain',
      'A partir do painel de controle de sua conta'
    )
  })
})
