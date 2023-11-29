/// <reference types="cypress" />

describe('Tool Tips', ()=> {
    beforeEach(()=> {
      cy.visit('https://demoqa.com/tool-tips');
    })
  
   it('button toolTips', ()=> {
    //setTimeout(()=> {debugger},2000) write in consol
    cy.get('#toolTipButton').trigger('mouseover');

    cy.get('.tooltip-inner').should('have.text', 'You hovered over the Button');
   })
  

   it('input toolTips' , ()=>{
    cy.get('#toolTipTextField').trigger('mouseover');

    cy.get('.tooltip-inner').should('have.text', 'You hovered over the text field');
   })

 


  })
  