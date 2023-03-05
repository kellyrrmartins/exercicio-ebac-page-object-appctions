Cypress.Commands.add('meuLogin', (user, pass) => {
  const fd = new FormData()
  fd.append('username', user)
  fd.append('password', pass)
  fd.append('woocommerce-login-nonce', '75ade13255')
  fd.append('_wp_http_referer', '/minha-conta')
  fd.append('login', 'Login')

  cy.request({
    method: 'POST',
    url: '/minha-conta/',
    body: fd
  })

  cy.visit('/minha-conta/')
})
