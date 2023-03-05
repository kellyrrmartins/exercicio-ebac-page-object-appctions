///<reference types="cypress"/>

class CadastroPage {
  get #email() {
    return cy.get('#reg_email')
  }
  get #pass() {
    return cy.get('#reg_password')
  }
  get #register() {
    return cy.get(':nth-child(4) > .button')
  }

  register(email, pass) {
    this.#email.type(email)
    this.#pass.type(pass, { log: false })
    this.#register.click()
  }
}

module.exports = new CadastroPage()
