/// <reference types="cypress"/>

// import { HomePage } from '../support/pages'
const produtos = require('../fixtures/produtos.json')

describe('Carrinho', () => {
  beforeEach(() => {
    cy.visit('/produtos/page/2')
  })

  it.only('Deve adicionar um produto com sucesso', () => {
    cy.intercept('POST', '/product/augusta-pullover-jacket', {
      fixture: 'resposta.html'
    }).as('novo-produto')
    cy.get('[class="product-block grid"]').contains(produtos[0].nome).click()
    cy.get('.button-variable-item-' + produtos[0].tamanho).click()
    cy.get('.button-variable-item-' + produtos[0].cor).click()
    cy.get('.input-text').clear().type(produtos[0].quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.wait('@novo-produto').then(resp => {
      expect(resp.response.statusCode).to.equal(200)
    })
  })
})
