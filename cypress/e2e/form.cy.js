/// <reference types="cypress" />

describe('Form', ()=> {
    beforeEach(()=> {
      cy.visit('https://demoqa.com/automation-practice-form');
  
    })
  
   it('fill the form', ()=> {
    cy.get('input#firstName').type('Roman');
    cy.get('input#lastName').type('Ranewski');
    cy.get('input#userEmail').type('roman@wp.pl');
    cy.get('input#gender-radio-1').check({force: true}).should('be.checked');
    cy.get('input#gender-radio-2').should('not.be.checked');
    cy.get('input#userNumber').type('7341231221');
    cy.get('input#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('September').should('have.value', '8');
    cy.get('.react-datepicker__year-select').select('1988').should('have.value', '1988');
    cy.get('.react-datepicker__day').contains('10').click();
    cy.get('input#subjectsInput').type('client').type('{enter}');
    cy.get('input#hobbies-checkbox-1').check({force: true});
    cy.get('#uploadPicture').attachFile('test2.png');
   })
  
  
  })
  