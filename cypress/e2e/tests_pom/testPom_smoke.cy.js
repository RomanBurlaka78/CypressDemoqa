/// <reference types ="cypress" />

describe('Test suit SmokeTests', ()=> {

    it('tes1 smoke',{tags: '@smoke'}, ()=> {
        cy.visit('https://demoqa.com');
        console.log('Test1 smoke');
    })
    it('tes2', ()=> {
        cy.visit('https://demoqa.com');
        console.log('Test2 smoke');
    })
    it('tes3', ()=> {
        cy.visit('https://demoqa.com');
        console.log('Test3 smoke');
    })
    
})  