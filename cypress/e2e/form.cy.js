/// <reference types="cypress" />

import variables from '../fixtures/variables.json'

describe('Form', ()=> {
  let allNamesNew;
    beforeEach(() => {
      cy.fixture('variables').as('allData')
      cy.visit('https://demoqa.com/automation-practice-form');
    })
  
   it('fill the form from ', ()=> {
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

   it.only('fill the form from fixture : import variables', () => {
    cy.get('input#firstName')
      .should('have.text', '')
      .type(variables.formData.firstName)
      .should('have.value', variables.formData.firstName);
    cy.get('input#lastName')
      .should('have.text', '')
      .type(variables.formData.lastName);
    cy.get('input#userEmail')
      .should('have.text', '')
      .type(variables.formData.email);
    cy.get('input#gender-radio-1')
      .check({force: true})
      .should('be.checked');
    cy.get('input#gender-radio-2').should('not.be.checked');
    cy.get('input#userNumber')
      .should('have.text', '')
      .type(variables.formData.phone);
    cy.get('input#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select')
      .select('September')
      .should('have.value', '8');
    cy.get('.react-datepicker__year-select')
      .select('1988')
      .should('have.value', '1988');
    cy.get('.react-datepicker__day')
      .contains('10')
      .click();
    cy.get('input#subjectsInput')
      .type('client')
      .type('{enter}');
    cy.get('input#hobbies-checkbox-1').check({force: true});
    //upload image steps:
    //paste image in fixtures
    //type in terminal -> npm install --save cypress-file-upload
    //paste in command.js -> import 'cypress-file-upload'
    cy.get('#uploadPicture').attachFile('test2.png');
  

   })
   
  

   it('fill the form from fixture: as aliase', () => {
    cy.get('@allData').its('formData').then((allNamesNewAlias)=> {
      
      cy.get('input#firstName')
      .should('have.text', '')
      .type(allNamesNewAlias.firstName)
      .should('have.value', allNamesNewAlias.firstName);
      cy.get('input#lastName')
        .should('have.text', '')
        .type(allNamesNewAlias.lastName);
      cy.get('input#userEmail')
        .should('have.text', '')
        .type(allNamesNewAlias.lastName);
      cy.get('input#gender-radio-1')
        .check({force: true})
        .should('be.checked');
      cy.get('input#gender-radio-2').should('not.be.checked');
      cy.get('input#userNumber')
        .should('have.text', '')
        .type(allNamesNewAlias.phone);
      cy.get('input#dateOfBirthInput').click();
      cy.get('.react-datepicker__month-select')
        .select('September')
        .should('have.value', '8');
      cy.get('.react-datepicker__year-select')
        .select('1988')
        .should('have.value', '1988');
      cy.get('.react-datepicker__day')
        .contains('10')
        .click();
      cy.get('input#subjectsInput')
        .type('client').
        type('{enter}');
      cy.get('input#hobbies-checkbox-1').check({force: true});
      cy.get('#uploadPicture').attachFile('test2.png');

      })
      })

   
  })
  