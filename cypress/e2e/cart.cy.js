/// <reference types="cypress"/>

import { HomePage } from '../support/pages'
describe('Carrinho', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve adicionar um produto com sucesso', () => {
    const produto = {
      product: 'ingrid-running-jacket',
      attribute_size: 'XS',
      attribute_color: 'Red'
    }
    cy.intercept('POST', '/ingrid-running-jacket', {
      form: {
        produto
      }
    })
    cy.visit('/carrinho')
    // HomePage.ecolherProduto('Stellar Solar Jacket', 'S', 'Blue', '1')
  })
})
