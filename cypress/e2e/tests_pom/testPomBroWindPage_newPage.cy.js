///<reference types= "cypress"/>
import HomePage from "../pom/HomePage";


describe("Browser Windows Page->new page test", function() {

    const homePage =new HomePage();


    it('test open new tab', function() {
        homePage
            .gotoAllertsFramesWindows()
            .gotoBrowserWindowPage()
            .checkOpenNewPage()
    } )

    it('test open new window', function() {
        homePage
            .gotoAllertsFramesWindows()
            .gotoBrowserWindowPage()
            .gotoNewWindow()
            .checkOpenNewPage()
    } )

    it('test   window  message', function() {
        homePage
            .gotoAllertsFramesWindows()
            .gotoBrowserWindowPage()
            .openWindowMessage()
            .checkWindowMessage()
    } )
})