describe('My First Test', () => {
    it('Esegue una registrazione con relativo login', () => {
        cy.visit('http://localhost:4200/signin')
        cy.get('input[id=username]')
            .type('nani')
        cy.get('input[id=password]')
            .type('password')

        cy.get('button[id=button]')
            .click()

        cy.url('/home')

        cy.get('input[id=username]')
            .type('nani')
        cy.get('input[id=password]')
            .type('password')

        cy.get('button[id=button]')
            .click()

        cy.url().should('include', '/home')



    })
})