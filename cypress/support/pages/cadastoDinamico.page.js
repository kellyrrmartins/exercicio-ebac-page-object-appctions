///<reference types="cypress"/>

export const cadastroDinamico = {
  get cadastro() {
    return cy.get('.register .input-text')
  }
}
