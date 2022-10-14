
describe('My text suite', () => {

    it('verify title of the page', () => {
      cy.visit('https://genuine-marzipan-13a42f.netlify.app/') //opens the Url
      cy.title().should('eq','Ema-john')
      
    })

    it('verify product add to  cart then product quantity', () => {
      cy.visit('https://genuine-marzipan-13a42f.netlify.app/')  //opens the Url

      cy.get(':nth-child(1) > .card-container > .btn-custom').click() //shapping cart
      cy.get(':nth-child(2) > .card-container > .btn-custom').click()
      cy.get(':nth-child(9) > .card-container > .btn-custom').click()
      cy.get(':nth-child(29) > .card-container > .btn-custom').click()
      cy.get(':nth-child(33) > .card-container > .btn-custom').click()
      //cy.wait(3000)
      cy.get('.cart-container > h5').contains('1072.30') //validating point
      
    })

  })