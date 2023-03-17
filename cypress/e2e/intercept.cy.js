/// <reference types="cypress"/>

// import { HomePage } from '../support/pages'
const produtos = require('../fixtures/produtos.json')
const fragmento = require('../fixtures/fragmento.json')

describe('Carrinho', () => {
  beforeEach(() => {
    cy.visit('/produtos/page/2')
  })

  it('Deve adicionar um produto com sucesso', () => {
    cy.intercept('POST', '/product/augusta-pullover-jacket', {
      fixture: 'resposta.html'
    }).as('novo-produto')
    cy.get('[class="product-block grid"]').contains(produtos.nome).click()
    cy.get('.button-variable-item-' + produtos.tamanho).click()
    cy.get('.button-variable-item-' + produtos.cor).click()
    cy.get('.input-text').clear().type(produtos.quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('@novo-produto').then(resp => {
      expect(resp.response.statusCode).to.equal(200)
      cy.log(resp)
    })
    cy.get('@novo-produto').then(novoProduto => {
      cy.log(novoProduto)
    })
  })
  it('Teste com Intercept', () => {
    cy.intercept('POST', '/product/augusta-pullover-jacket', {
      fixture: 'resposta.html'
    }).as('novo-produto')

    cy.get('[class="product-block grid"]').contains(produtos.nome).click()
    cy.get('.button-variable-item-' + produtos.tamanho).click()
    cy.get('.button-variable-item-' + produtos.cor).click()
    cy.get('.input-text').clear().type(produtos.quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('@novo-produto').then(res => {
      expect(res.response.statusCode).to.equal(200)

      cy.log(res)
    })
  })
  it.only('Pegar o produto do carrinho', () => {
    cy.intercept('POST', '/product/augusta-pullover-jacket', {
      fixture: 'resposta.html'
    }).as('novo-produto')
    cy.intercept('POST', '/?wc-ajax=get_refreshed_fragments', {
      fixture: 'intercept.json'
    }).as('getCarrinho')
    cy.get('[class="product-block grid"]').contains(produtos.nome).click()
    cy.get('.button-variable-item-' + produtos.tamanho).click()
    cy.get('.button-variable-item-' + produtos.cor).click()
    cy.get('.input-text').clear().type(produtos.quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('@getCarrinho').then(req => {
      cy.log(req)
    })
  })
})
