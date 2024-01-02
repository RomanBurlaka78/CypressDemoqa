/// <reference types = "cypress" />

import HomePage from "../pom/HomePage";

describe('suit Elements-> links', function() {
    const homePage =new HomePage();
    const title = "Links";

    it('test links', function() {
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

    it('test links', function(){
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