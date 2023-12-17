/// <reference types = "cypress" />

import HomePage from "../pom/HomePage";

describe('suit Elements-> Brokenlinks', function() {
    const homePage =new HomePage();

    beforeEach(function() {
        homePage.visitHomePage()
    })
    it('test links', ()=> {
        homePage
            .gotoElementsPage()
            .clickBrokenLinks()
            .checkBrokenImg()
    })

})