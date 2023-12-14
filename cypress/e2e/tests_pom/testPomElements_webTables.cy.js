/// <reference types = "cypress" />
require('cypress-xpath');
import HomePage from "../pom/HomePage";
import variables from "../../fixtures/variables.json";

describe('Web Tables demoqa.com', ()=> {
    const homePage = new HomePage(); 
    beforeEach(function() {
        homePage.visitHomePage()
     })

    it('add user, search user, delete user', ()=> {

        homePage
            .gotoElementsPage()
            .clickWebTables()
            .clickAddNewRecord()
            .enterFirstName(variables.formData.firstName)
            .enterLastName(variables.formData.lastName)
            .enterEmail(variables.formData.email)
            .enterAge(variables.formData.age)
            .enterSalary(variables.formData.salary)
            .enterDepartment(variables.formData.department)
            .enterSubmit()
            .enterSearchBox(variables.formData.email)
            .searchRowUser(variables.formData.email)
            .clickGetDeleteButton()
            .getAllUser().should('have.value', '')   
    })


})