/// <reference types = "cypress" />

import HomePage from "../pom/HomePage";
import variables from "../../fixtures/variables.json";

describe('suit Elements', ()=> {
    const homePage =new HomePage();

    beforeEach(()=> {
        homePage.navigateHomePage(variables.URL.site);  
    })
    it('test checkBox', ()=> {
        homePage
            .gotoElementsPage()
            .clickGetCheckBox()
            .clickGetcheckElement()
            .getCheckElement().should('be.visible');
            

    })

    it('test checkBox dropdown click', ()=> {
        homePage
            .gotoElementsPage()
            .clickGetCheckBox()
            .clickGetArrowCheckBox()
            .clickDropDownElement()
            .getDropDownElement().should('be.visible');     
    })

})