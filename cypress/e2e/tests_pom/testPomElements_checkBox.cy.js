/// <reference types = "cypress" />

import HomePage from "../pom/HomePage";
import variables from "../../fixtures/variables.json";

describe('suit Elements', function() {
    const homePage =new HomePage();

    beforeEach(function() {
        homePage.visitHomePage()
    })
    it('test checkBox', ()=> {
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