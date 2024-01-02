/// <reference types = "cypress" />

import HomePage from "../pom/HomePage";

describe('Elements-> Brokenlinks', function() {
    const homePage =new HomePage();

    it('test BrokenImg', function() {
        homePage
            .gotoElementsPage()
            .clickBrokenLinks()
            .checkBrokenImg()
    })

    it('test Valid Link', function() {
        homePage
            .gotoElementsPage()
            .clickBrokenLinks()
            .checkValidLink()     
    })

    it('test Broken Link', function() {
        homePage
            .gotoElementsPage()
            .clickBrokenLinks()
            .checkBrokenLink()       
    })

})