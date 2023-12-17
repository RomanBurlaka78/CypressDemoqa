/// <reference types = "cypress" />

import HomePage from "../pom/HomePage";
import variables from "../../fixtures/variables.json";

describe('Elements-> CheckBox', function() {
    const homePage =new HomePage();

    beforeEach(function() {
        homePage.visitHomePage()
    })
    it('test checkBox', function() {
        homePage
            .gotoElementsPage()
            .clickGetCheckBox()
            .clickGetcheckElement()
            .getCheckElement().should('be.visible');
    })

    it('test checkBox dropdown click', function() {
        homePage
            .gotoElementsPage()
            .clickGetCheckBox()
            .clickGetArrowCheckBox()
            .clickDropDownElement()
            .getDropDownElement().should('be.visible');     
    })

    it('test checkBox dropdown click', function() {
        homePage
            .gotoElementsPage()
            .clickGetCheckBox()
            .clickGetArrowCheckBox()
            .clickDropDownElement()
            .uncheckDropDownElement(); 
    })

    it('test checkBox dropdown click', function() {
        homePage
            .gotoElementsPage()
            .clickGetCheckBox()
            .clickGetArrowCheckBox()
            .clickSelectByText('Documents');
             
    })
    

})