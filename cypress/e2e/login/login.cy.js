describe('Enter the login page', () => {
  
  //Happyway
  it('Login OK', () => {
    cy.intercept('POST', '/api/authenticate').as('userLogin')

    cy.visit('https://qa-challenge.ensolvers.com/login');
    cy.login('user', 'user')
    cy.get('[data-cy="submit"]').click()

    cy.wait('@userLogin').then(interception => {
			expect(interception.response.statusCode).to.equal(200)
			cy.log('Login OK')
		})
  })

  //Wrongway
  it('Wrong password', () => {
    cy.intercept('POST', '/api/authenticate').as('userLogin')

    cy.visit('https://qa-challenge.ensolvers.com/login');
    cy.login('user', 'user1')
    cy.get('[data-cy="submit"]').click() 

    cy.wait('@userLogin').then(interception => {
			expect(interception.response.statusCode).to.equal(401)
			cy.log('Wrong password')
		})
  })

  it('Wrong username', () => {
    cy.intercept('POST', '/api/authenticate').as('userLogin')

    cy.visit('https://qa-challenge.ensolvers.com/login');
    cy.login('user1', 'user')
    cy.get('[data-cy="submit"]').click()

    cy.wait('@userLogin').then(interception => {
			expect(interception.response.statusCode).to.equal(401)
			cy.log('Wrong username')
		})
  })
})