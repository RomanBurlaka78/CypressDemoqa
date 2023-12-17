/// <reference types = "cypress" />

import HomePage from "../pom/HomePage";
import variables from "../../fixtures/variables.json";

describe('Elements -> Radiobutton', function() {
    const homePage =new HomePage();

    beforeEach(function() {
        homePage.visitHomePage()
     })
    it('test "Yes" radioButton', function() {
        homePage
            .gotoElementsPage()
            .clickRadioButton()
            .clickRadioYes()
            .getRadioYes().should('be.checked');                   
    })

    it('test "Impressive" radioButton', function() {
        homePage
            .gotoElementsPage()
            .clickRadioButton()
            .clickRadioImpressive()
            .getRadioImpressive().should('be.checked');             
    })
    it('test "No" radioButton', function() {
        homePage
            .gotoElementsPage()
            .clickRadioButton()
            .clickRadioNo()
            .getRadioNo().should('be.checked');           
    })

})