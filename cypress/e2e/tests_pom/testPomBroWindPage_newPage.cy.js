///<reference types= "cypress"/>
import HomePage from "../pom/HomePage";


describe("Browser Windows Page->new page test", function() {

    const homePage =new HomePage();


    it('test double click', function() {
        homePage
            .gotoBrowserWindowsPage()
            .openBrowserWindowPage()
            .checkOpenNewPage()
    } )
})