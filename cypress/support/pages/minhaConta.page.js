/// <reference types="cypress"/>

export const minhaContaPage = {
  get message() {
    return cy.get('.woocommerce-MyAccount-content > :nth-child(3)')
  }
}
