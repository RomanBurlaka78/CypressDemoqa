/// <reference types = "cypress" />

import HomePage from "../pom/HomePage";

describe('Elements-> Dynamic Properties', function() {
    const homePage =new HomePage();
  
    it('test text has random id', function() {
        homePage
            .gotoElementsPage()
            .clickDynamicProperties()
            .checkDynamicId()
            .checkColorChange()
    })

    it('test text change color', function() {
        homePage
            .gotoElementsPage()
            .clickDynamicProperties()
            .checkColorChange()
    })

    it('test button visible after 5s', function() {
        homePage
            .gotoElementsPage()
            .clickDynamicProperties()
            .checkVisibleAfter()
    })

 
})