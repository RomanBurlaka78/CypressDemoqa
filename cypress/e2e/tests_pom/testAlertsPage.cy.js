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
            .confirmAlertWait("This alert appeared after 5 seconds");        
            
    })

    it ("alerts-> click button, confirm box will apear", function() {
        homePage
            .gotoAllertsFramesWindows()
            .gotoAlertsPage()
            .confirmBoxApear();
    }) 



}) 