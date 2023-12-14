/// <reference types = "cypress" />

import HomePage from "../pom/HomePage";
import variables from "../../fixtures/variables.json";

describe('suit Elements', ()=> {
    const homePage =new HomePage();

    beforeEach(function() {
        homePage.visitHomePage()
     })
    it('test "Yes" radioButton', ()=> {
        homePage
            .gotoElementsPage()
            .clickRadioButton()
            .clickRadioYes()
            .getRadioYes().should('be.checked');                   
    })

    it('test "Impressive" radioButton', ()=> {
        homePage
            .gotoElementsPage()
            .clickRadioButton()
            .clickRadioImpressive()
            .getRadioImpressive().should('be.checked');             
    })
    it('test "No" radioButton', ()=> {
        homePage
            .gotoElementsPage()
            .clickRadioButton()
            .clickRadioNo()
            .getRadioNo().should('be.checked');           
    })

})