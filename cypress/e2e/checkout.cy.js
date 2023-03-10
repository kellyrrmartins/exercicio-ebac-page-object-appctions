///<reference types="cypress"/>

const produtos = require('../fixtures/produtos.json')

describe('Checkout', () => {
  beforeEach(() => {
    cy.addCart(produtos.tamanho, produtos.cor, produtos.quantidade)
  })
  it('Deve fazer checkout com sucesso ', () => {
    cy.get('.woocommerce-message').should(
      'contain',
      `${produtos.quantidade} × “Ingrid Running Jacket” foram adicionados no seu carrinho.`
    )
  })
})
