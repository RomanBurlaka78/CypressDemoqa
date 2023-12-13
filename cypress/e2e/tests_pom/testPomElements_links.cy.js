/// <reference types = "cypress" />

import HomePage from "../pom/HomePage";
import variables from "../../fixtures/variables.json";

describe('suit Elements-> links', function() {
    const homePage =new HomePage();
    const title = "Links";

    beforeEach(function() {
        cy.visit('https://demoqa.com')
    })
    it('test links', ()=> {
        homePage
            .gotoElementsPage()
            .clickLinks()
            .checkTitleOfPage(title)
            .goLinkHome()
            .checkLocation()
            .returnBack()
            .goLinkHomeIVtB()
            .returnBack()

    })

    it('test links', ()=> {
        homePage
            .gotoElementsPage()
            .clickLinks()
            .clickApiLinkCreated()
            .clickApiLinkNoContent()
            .clickApiLinkMoved()
            .clickApiLinkBadRequest()
            .clickApiLinkUnauthorized()
            .clickApiLinkForbidden()
            .clickApiLinkNotFound()
    })

   
    

})