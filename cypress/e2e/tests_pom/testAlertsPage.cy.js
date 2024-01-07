/// <reference types ="cypress"/>

import HomePage from "../pom/HomePage"

describe("alerts->test", function() {
    const homePage = new HomePage();

    it ("alerts->click button to see alert", function() {
        homePage
            .gotoAllertsFramesWindows()
            .gotoAlertsPage()
            .clickButtonToSeeAlert()
            .confirmAlert("You clicked a button");     
            
    })

    it ("alerts->click button,  alert will apear after 5 sec", function() {
        homePage
            .gotoAllertsFramesWindows()
            .gotoAlertsPage()
            .clickButtonAllertAfterFiveSec()
            .confirmAlertWait();        
            
    })


}) 