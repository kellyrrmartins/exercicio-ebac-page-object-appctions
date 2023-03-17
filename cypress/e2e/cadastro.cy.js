/// <reference types="cypress" />

// const dates = require('../fixtures/dates.json')
let faker = require('faker')
// const dados = require('../fixtures/dados.json')
const {
  cadastroPage,
  minhaContaPage,
  cadastroDinamico
} = require('../support/pages')
describe('Cadastro ', () => {
  // let email = faker.internet.email()
  beforeEach(() => {
    cy.visit('/minha-conta')

    cy.geradorFixture()
  })
  it('Deve realizar o cadastro, com validações dinamicas na EBAC-Shop ', () => {
    cy.fixture('dates').then(resp => {
      resp.date.forEach(item => {
        cadastroPage.register(item.email, item.password)
      })
    })
    minhaContaPage.message.should(
      'contain',
      'A partir do painel de controle de sua conta'
    )
  })

  // dates.date.forEach(dado => {
  //   it.only('Deve fazer o cadastro com dados dinamicos ', () => {
  //     cadastroPage.register(dado.email, dado.password)
  //     minhaContaPage.message.should(
  //       'contain',
  //       'A partir do painel de controle de sua conta'
  //     )
  //   })
  // })
})
