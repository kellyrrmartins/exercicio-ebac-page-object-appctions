/// <reference types="cypress"/>

import { HomePage } from '../support/pages'
describe('Carrinho', () => {
  beforeEach(() => {
    cy.visit('/produtos/page/2')
  })

  it('Deve adicionar um produto com sucesso', () => {
    cy.intercept('POST', '/augusta-pullover-jacket/').as('getProdutos')
    HomePage.ecolherProduto('Augusta Pullover Jacket', 'S', 'Blue', '1')

    // cy.wait('@getProdutos')
    cy.visit('/carrinho')
    cy.get('.product-name > a').should(
      'contain',
      'Augusta Pullover Jacket - S, Blue'
    )
    cy.intercept('GET')
  })
})
