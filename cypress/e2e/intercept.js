/// <reference types="cypress"/>

// import { HomePage } from '../support/pages'
const produtos = require('../fixtures/produtos.json')
describe('Carrinho', () => {
  beforeEach(() => {
    cy.visit('/produtos/page/2')
  })

  it('Deve adicionar um produto com sucesso', () => {
    cy.intercept('POST', '/wp-admin/admin-ajax.php').as('novo-produto')
    cy.get('[class="product-block grid"]').contains(produtos.nome).click()
    cy.get('.button-variable-item-' + produtos.tamanho).click()
    cy.get('.button-variable-item-' + produtos.cor).click()
    cy.get('.input-text').clear().type(produtos.quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.wait('@novo-produto').then(resp => {
      expect(resp.response.statusCode).to.equal(200)
      expect(resp.response.statusMessage).to.equal('OK')
    })
  })
})
