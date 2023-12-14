///<reference types= "cypress"/>
import HomePage from "../pom/HomePage";
import variables from "../../fixtures/variables.json";
import ButtonsPage from "../pom/elementsPages/ButtonsPage";
describe("Elements->buttons test", function() {
    const doubleClickMessage = 'You have done a double click';
    const rigthClickMessage = 'You have done a right click';
    const nameOfClickMe = 'Click Me';
    const dinamicMessage = 'You have done a dynamic click';
    const homePage =new HomePage();
    beforeEach(function () {
        homePage.visitHomePage()
    })

    it('test double click', function() {
        homePage
            .gotoElementsPage()
            .clickGetButtons()
            .clickDoubleClick()
            .checkDoubleClickMessage(doubleClickMessage)
            .clickRigthClick()
            .checkRigthClickMessage(rigthClickMessage)
            .clickDinamicClick()
            .checkDinamicClickMessage(dinamicMessage)
    } )
})