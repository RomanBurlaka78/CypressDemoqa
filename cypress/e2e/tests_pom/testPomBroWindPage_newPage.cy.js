///<reference types= "cypress"/>
import HomePage from "../pom/HomePage";


describe("Browser Windows Page->new page test", function() {

    const homePage =new HomePage();
    beforeEach(function () {
        homePage.visitHomePage()
    })

    it('test double click', function() {
        homePage
            .gotoBrowserWindowsPage()
            .openBrowserWindowPage()
            .checkOpenNewPage()
    } )
})