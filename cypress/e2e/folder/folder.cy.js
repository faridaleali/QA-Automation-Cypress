describe('Create folder', () => {
	beforeEach(() => {
    cy.visit('https://qa-challenge.ensolvers.com/login');
    cy.login('user', 'user');
		cy.get('[data-cy="submit"]').click()
  });

	//Happyway
	it('Create a folder OK', () => {
		cy.get('button').contains('Manage Folders').click()
		cy.get('[data-cy="entityCreateButton"]').click()
		cy.wait(1500)
		cy.get('[data-cy="name"]').type('test folder')
		cy.get('[data-cy="entityCreateSaveButton"]').click()
	})

	//Wrongway
	it('Duplicate name', () => {
		cy.get('button').contains('Manage Folders').click()
		cy.get('[data-cy="entityCreateButton"]').click()
		cy.wait(1500)
		cy.get('[data-cy="name"]').type('test folder')
		cy.get('[data-cy="entityCreateSaveButton"]').click()
		cy.wait(1500)
		cy.get('[data-cy="entityCreateButton"]').click()
		cy.wait(1500)
		cy.get('[data-cy="name"]').type('test folder')
		cy.get('[data-cy="entityCreateSaveButton"]').click()
	})

	it('Untitled folder', () => {
		cy.get('button').contains('Manage Folders').click()
		cy.get('[data-cy="entityCreateButton"]').click()
		cy.wait(1500)
		cy.get('[data-cy="entityCreateSaveButton"]').click()
	})

	it('Character limit', () => {
		cy.get('button').contains('Manage Folders').click()
		cy.get('[data-cy="entityCreateButton"]').click()
		cy.wait(1500)
		cy.get('[data-cy="name"]').type('01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789')
		cy.get('[data-cy="entityCreateSaveButton"]').click()
	})
})