/// <reference types = "cypress" />
require('cypress-xpath');

describe('Web Tables demoqa.com', ()=> {
    beforeEach(() => {
        cy.visit('https://demoqa.com/webtables');
    })

    it('add user', ()=> {
        const testUser = ["Roman", "Romanowski","33","qwery@wp.pl","4500","IT RWD"];
        cy.get('#addNewRecordButton').click();
        cy.wait(3000)
        .get('#firstName').clear().type(testUser[0])
        .should('have.value', 'Roman');
        cy.get('#lastName').clear()
        .type('Romanowski');
        cy.get('#userEmail').clear()
        .type('qwery@wp.pl');
        cy.get('#age').clear()
        .type('33');
        cy.get('#salary').clear()
        .type('4500');
        cy.get('#department').clear()
        .type('IT RWD');  
        cy.get('#submit').click();
        cy.get('#searchBox').type('Roman');
        cy.xpath('//div[@class="rt-td"]').contains('Roman');
    
    })

    it('edit user', ()=> {
        cy.get('#edit-record-1').click();

        cy.wait(3000)
        .get('#firstName').clear().type('Igor')
        .should('have.value', 'Igor');
        cy.get('#lastName').clear()
        .type('Baranowski');
        cy.get('#userEmail').clear()
        .type('qwer44y@wp.pl');
        cy.get('#age').clear()
        .type('45');
        cy.get('#salary').clear()
        .type('3500');
        cy.get('#department').clear()
        .type('IT SEO');   
        cy.get('#submit').click();
    })

    it('remove user', ()=> {
        cy.get('#delete-record-1').click();
        cy.get('.rt-boby .rt-tr:not(.-padRow)').should('not.exist');
    })

})