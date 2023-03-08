Cypress.Commands.add('meuLogin', (user, pass) => {
  const fd = new FormData()
  fd.append('username', user)
  fd.append('password', pass)
  fd.append('woocommerce-login-nonce', '61f2b532ab')
  fd.append('_wp_http_referer', '/minha-conta')
  fd.append('login', 'Login')

  cy.request({
    method: 'POST',
    url: `/minha-conta`,
    body: fd
  }).then(resp => {
    // resp.headers['set-cookie'].forEach(cookie => {
    //   const firstPart = cookie.split(';')[0]
    //   const separator = firstPart.indexOf('=')
    //   const name = firstPart.substring(0, separator)
    //   const value = firstPart.substring(separator + 1)
    //   cy.setCookie(name, value)
    // })
    // expect(resp.status).to.equal(200)
  })

  cy.visit('/produto/')
})
