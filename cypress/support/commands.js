// Cypress.Commands.add('meuLogin', (user, pass) => {
//   const fd = new FormData()
//   fd.append('username', user)
//   fd.append('password', pass)
//   fd.append('woocommerce-login-nonce', '17cba3c664')
//   fd.append('_wp_http_referer', '/minha-conta')
//   fd.append('login', 'Login')

//   cy.request({
//     method: 'POST',
//     url: `/minha-conta`,
//     body: fd
//   })
//     .its('allRequestResponses')
//     .its('0')
//     .its('Response Headers')
//     .then(resp => {
//       resp['set-cookie'].forEach(cookie => {
//         const firstPart = cookie.split(';')[0]
//         const separator = firstPart.indexOf('=')
//         const name = firstPart.substring(0, separator)
//         const value = firstPart.substring(separator + 1)
//         cy.setCookie(name, value)
//       })
//     })

//   cy.visit('/produtos/')
// })
Cypress.Commands.add('addCart', (tamanho, cor, qunatidade) => {
  const fd = new FormData()
  fd.append('attribute_size', tamanho)
  fd.append('attribute_color', cor)
  fd.append('quantity', qunatidade)
  fd.append('add-to-cart', 4104)
  fd.append('product_id', 4104)
  fd.append('variation_id', 4108)

  cy.request({
    method: 'POST',
    url: `/`,
    body: fd
  }).then(resp => {
    expect(resp.status).to.equal(200)
  })

  cy.visit('/carrinho')
})
