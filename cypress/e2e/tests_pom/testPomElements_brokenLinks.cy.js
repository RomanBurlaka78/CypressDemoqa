/// <reference types = "cypress" />

import HomePage from "../pom/HomePage";

describe('Elements-> Brokenlinks', function() {
    const homePage =new HomePage();

    beforeEach(function() {
        homePage.visitHomePage()
    })
    it('test BrokenImg', function() {
        homePage
            .gotoElementsPage()
            .clickBrokenLinks()
            .checkBrokenImg()
    })

})