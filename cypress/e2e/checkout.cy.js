///<reference types="cypress"/>

const produtos = require('../fixtures/produtos.json')

describe('Checkout', () => {
  beforeEach(() => {
    cy.addCart(produtos[1].tamanho, produtos[1].cor, produtos[1].quantidade)
  })
  it('Deve fazer checkout com sucesso ', () => {
    cy.get('.woocommerce-message').should(
      'contain',
      `${produtos[1].quantidade} × “Ingrid Running Jacket” foram adicionados no seu carrinho.`
    )
  })
})
