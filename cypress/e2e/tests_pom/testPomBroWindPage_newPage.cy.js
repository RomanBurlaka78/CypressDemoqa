///<reference types= "cypress"/>
import HomePage from "../pom/HomePage";


describe("Browser Windows Page->new page test", function() {

    const homePage =new HomePage();


    it('test open new tab', function() {
        homePage
            .gotoBrowserWindowsPage()
            .openBrowserWindowPage()
            .checkOpenNewPage()
    } )

    it('test open new window', function() {
        homePage
            .gotoBrowserWindowsPage()   
            .openBrowserWindowPage()
            .gotoNewWindow()
            .checkOpenNewPage()
    } )

    it.only('test   window  message', function() {
        homePage
            .gotoBrowserWindowsPage()   
            .openBrowserWindowPage()
            .openWindowMessage()
            .checkWindowMessage()
    } )
})