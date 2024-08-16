describe('Create item', { testInsolation:false } , () => {
	beforeEach(() => {
    cy.visit('https://qa-challenge.ensolvers.com/login');
    cy.login('user', 'user');
		cy.get('[data-cy="submit"]').click()
  });

  //Happyway
	it('Create item OK', () => {
		cy.get('button').contains('Manage To-Do Items').click()
		cy.get('[data-cy="entityCreateButton"]').click()
		cy.wait(1500)
		cy.get('[data-cy="title"]').type('test name item')
		cy.get('[data-cy="description"]').type('test description item')
		cy.get('[data-cy="folder"]').select('6') // If 6 exist!
		cy.get('[data-cy="entityCreateSaveButton"]').click()
	})

	//Wrongway
	it('Duplicate name', () => {
		cy.get('button').contains('Manage To-Do Items').click()
		cy.get('[data-cy="entityCreateButton"]').click()
		cy.wait(1500)
		cy.get('[data-cy="title"]').type('test name item 1')
		cy.get('[data-cy="description"]').type('test description item')
		cy.get('[data-cy="folder"]').select('6') // If 5 exist!
		cy.get('[data-cy="entityCreateSaveButton"]').click()
		cy.wait(1500)
		cy.get('[data-cy="title"]').type('test name item 1')
		cy.get('[data-cy="description"]').type('test description item')
		cy.get('[data-cy="folder"]').select('6') // If 5 exist!
		cy.get('[data-cy="entityCreateSaveButton"]').click()
	})

	it('No description', () => {
		cy.get('button').contains('Manage To-Do Items').click()
		cy.get('[data-cy="entityCreateButton"]').click()
		cy.wait(1500)
		cy.get('[data-cy="title"]').type('test name item 2')
		cy.get('[data-cy="folder"]').select('6') // If 5 exist!
		cy.get('[data-cy="entityCreateSaveButton"]').click()
	})

	it('Do not select a folder', () => {
		cy.get('button').contains('Manage To-Do Items').click()
		cy.get('[data-cy="entityCreateButton"]').click()
		cy.wait(1500)
		cy.get('[data-cy="title"]').type('test name item 3')
		cy.get('[data-cy="description"]').type('test description item')
		cy.get('[data-cy="entityCreateSaveButton"]').click()
	})

	it('No data', () => {
		cy.get('button').contains('Manage To-Do Items').click()
		cy.get('[data-cy="entityCreateButton"]').click()
		cy.wait(1500)
		cy.get('[data-cy="entityCreateSaveButton"]').click()
	})
})